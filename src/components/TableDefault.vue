<template>
  <TableComponent :labels="labels" :data="data" :isActions="true">
    <template v-slot:actions="item">
      <button @click="logItem(item)">Edit</button>
      <button @click="logItem(item)">Delete</button>
    </template>
  </TableComponent>
</template>
<script>
import TableComponent from "@/components/table/TableComponent.vue";

import { ref } from "vue";
export default {
  name: "TableDefault",
  components: {
    TableComponent,
  },
  setup() {
    const labels = ref([
      { text: "ID", field: "id" },
      { text: "Name", field: "name" },
      { text: "Created", field: "date_created" },
    ]);
    const data = ref([
      { id: 1, name: "Foo", date_created: "20.06.2022" },
      { id: 2, name: "Bar", date_created: "20.06.2022" },
    ]);

    const logItem = (item) => {
      console.log(item);
    };

    return { labels, data, logItem };
  },
};
</script>
