<template>
  <ContentHeader>
    <template v-slot:left> Default Home </template>
    <template v-slot:right>
      <button class="default_home_page--button primary">BUTTON</button>
      <button class="default_home_page--button secondary">BUTTON</button>
    </template>
  </ContentHeader>
  <router-link :to="{ name: 'restaurant', params: {} }">Restaurant</router-link>
  |
  <router-link :to="{ name: 'tabledefault', params: {} }"
    >Table Default</router-link
  >
  |
  <router-link :to="{ name: 'restaurantdefault', params: {} }"
    >Restaurant Default</router-link
  >
  <div class="default_home_page--content">
    <!-- <Header /> -->
    <router-view :key="$route.path" />

    <!-- <Footer /> -->
  </div>
  <!-- <HelloWorld />
  <TestView /> -->
</template>
<script>
import ContentHeader from "@/components/ContentHeader.vue";
export default {
  name: "DefaultHomeView",
  components: {
    ContentHeader,
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
