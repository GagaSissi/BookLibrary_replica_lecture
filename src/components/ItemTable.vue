<template>
  <section class="table-item">
    <h2 class="table-item__hl">Liste aller Bücher</h2>
    <table class="table-item__table">
      <thead>
        <tr>
          <th class="table-item__table-head-name">Name</th>
          <th class="table-item__table-head--isbn">ISBN</th>
          <th class="table-item__table-head--actions"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="allData in allDatas"
          :key="allData.id"
          class="table-item__table-row"
        >
          <td>{{ allData.title }}</td>
          <td>{{ allData.isbn }}</td>
          <td>
            <button class="table-item__table-btn-remove">- entfernen</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: "ItemTable",
  props: {
    headline: {
      type: String,
      required: true,
    },
    allDatas: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
