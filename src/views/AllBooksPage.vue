<template>
  <ItemTable
    headline="Meine Merkliste"
    :allDatas="donkeyears"
    @donkeyearChanged="handledonkeyearChanged"
  />
  <ItemTable
    headline="Liste aller Bücher"
    :allDatas="books"
    @donkeyearChanged="handledonkeyearChanged"
  />
</template>

<script>
import ItemTable from "@/components/ItemTable.vue";
export default {
  name: "AllBooksPage",
  data() {
    return {
      books: [],
    };
  },
  components: {
    ItemTable,
  },
  methods: {
    async handledonkeyearChanged(id) {
      const index = this.books.findIndex((book) => book.id === id);
      try {
        const newBookmarkedValue = !this.books[index].isBookmarked;
        const data = {
          ...this.books[index],
          isBookmarked: newBookmarkedValue,
        };
        await fetch(`http://localhost:3000/books/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        this.books[index].isBookmarked = newBookmarkedValue;
      } catch {
        alert(
          "Es gab einen technischen Fehler, dass Buch konnte nicht hinzugefügt werden."
        );
      }
    },
  },
  async created() {
    const response = await fetch("http://localhost:3000/books");
    const data = await response.json();
    this.books = data;
  },
};
</script>
