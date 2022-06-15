<template>
  <table class="content-table">
    <thead>
      <tr>
        <th v-for="(label, labelIndex) in labels" :key="labelIndex">
          {{ label.text }}
        </th>
        <th v-if="isActions">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, itemIndex) in data" :key="itemIndex">
        <td v-for="(label, labelIndex) in labels" :key="labelIndex">
          {{ item[label.field] }}
        </td>
        <td v-if="isActions">
          <slot name="actions" v-bind="item" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "table-component",
  props: {
    labels: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    isActions: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style>
.content-table {
  border-collapse: collapse;
  font-size: 0.9rem;
  min-width: 400px;
  width: 100%;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.content-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
}

.content-table th,
.content-table td {
  padding: 12px 15px;
}

.content-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.content-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.content-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

.content-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
</style>
