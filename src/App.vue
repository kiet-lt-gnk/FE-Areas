<template>
  <HeaderComponent v-if="$route.name != 'login'" />
  <SideBar v-if="$route.name != 'login'" />
  <div
    class="leftbar"
    v-if="$route.name != 'login'"
    :class="[isChecked ? 'ml-250' : 'ml-50']"
  >
    <div class="home_page">
      <div class="home_page--container">
        <router-view />
      </div>
    </div>
  </div>
  <div v-else>
    <router-view />
  </div>
</template>
<script>
import { computed } from "vue";
import HeaderComponent from "@/components/HeaderComponentt.vue";
import SideBar from "@/components/SideBar.vue";
import { useStore } from "vuex";
export default {
  name: "App",
  components: {
    HeaderComponent,
    SideBar,
  },
  setup() {
    const store = useStore();
    const isChecked = computed(() => store.state.onCheckedSidebar);

    return {
      isChecked,
    };
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li > a {
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.ml-250 {
  margin-left: 250px;
}

.ml-50 {
  margin-left: 50px;
}

.leftbar {
  transition: all 0.5s;
}

.home_page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 30px;
  height: calc(100vh - 80px);
}

.home_page--container {
  width: 100%;
  height: 100%;
  border: 1px solid #042331;
  border-radius: 20px;
}
</style>
