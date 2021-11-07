<template>
  <ItemTable
    headline="Meine Merkliste"
    :allDatas="donkeyears"
    @donkeyearChanged="handledonkeyearChanged"
  />
</template>

<script>
import AllBooksPage from "@/views/AllBooksPage.vue";
export default {
  name: "AllBooksPage",
  extends: AllBooksPage,
  computed: {
    donkeyears() {
      return this.books.filter((book) => book.isBookmarked);
    },
  },
};
</script>
