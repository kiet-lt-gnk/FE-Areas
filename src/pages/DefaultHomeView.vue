<template>
  <ContentHeader>
    <template v-slot:left> Default Home </template>
    <template v-slot:right>
      <button class="default_home_page--button primary">BUTTON</button>
      <button class="default_home_page--button secondary">BUTTON</button>
    </template>
  </ContentHeader>
  <router-link :to="{ name: 'restaurant', params: {} }">Restaurant</router-link>
  <div class="default_home_page--content">
    <!-- <Header /> -->
    <TableComponent :labels="labels" :data="data" :isActions="true">
      <template v-slot:actions="item">
        <button @click="logItem(item)">Edit</button>
        <button @click="logItem(item)">Delete</button>
      </template>
    </TableComponent>
    <!-- <Footer /> -->
  </div>
  <!-- <HelloWorld />
  <TestView /> -->
</template>
<script>
import ContentHeader from "@/components/ContentHeader.vue";
import TableComponent from "@/components/table/TableComponent.vue";
// import Header from "home/Header";
// import Footer from "home/Footer";
// import HelloWorld from "none/HelloWorld";
// import TestView from "router/TestView";
import { ref } from "vue";
export default {
  name: "DefaultHomeView",
  components: {
    ContentHeader,
    TableComponent,
    // Header,
    // Footer,
    // HelloWorld,
    // TestView,
  },
  setup() {
    const labels = ref([
      { text: "ID", field: "id" },
      { text: "Name", field: "name" },
      { text: "Created", field: "date_created" },
    ]);
    const data = ref([
      { id: 1, name: "Foo", date_created: "01.01.2021" },
      { id: 2, name: "Bar", date_created: "01.01.2021" },
    ]);

    const logItem = (item) => {
      console.log(item);
    };

    return { labels, data, logItem };
  },
};
</script>
<style>
.default_home_page--button {
  padding: 13px 22px;
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.default_home_page--button.primary {
  background-color: bisque;
  color: #042331;
}

.default_home_page--button.primary:hover {
  background-color: #042331;
  color: bisque;
  border: 1px solid bisque;
}

.default_home_page--button.secondary {
  background-color: #042331;
  color: white;
  border: 1px solid white;
}

.default_home_page--button.secondary:hover {
  background-color: bisque;
  color: #042331;
}

.default_home_page--content {
  margin: 10px;
}
</style>
