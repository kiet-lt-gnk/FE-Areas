<template>
  <HeaderComponent />
  <SideBar />
  <div class="leftbar" :class="[isChecked ? 'ml-250' : 'ml-50']">
    <div class="home_page">
      <div class="home_page--container">
        <router-view :key="$route.path" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import HeaderComponent from "@/components/HeaderComponentt.vue";
import SideBar from "@/components/SideBar.vue";
import { useStore } from "vuex";
export default {
  name: "LayoutView",
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

.ml-250 {
  margin-left: 250px;
}

.ml-50 {
  margin-left: 50px;
}

.leftbar {
  transition: all 0.5s;
}
</style>
