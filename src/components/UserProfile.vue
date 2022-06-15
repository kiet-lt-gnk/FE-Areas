<template>
  <div>
    <h3>User Profile: {{ fullName }}</h3>
    <button @click="updateIsLoggedIn">Logout</button>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "UserProfile",
  setup: () => {
    const store = useStore();

    const fullName = computed(() => store.getters["user/getFullName"]);

    const updateIsLoggedIn = () => {
      store.dispatch("user/logoutUser");
    };
    return {
      fullName,
      updateIsLoggedIn,
    };
  },
};
</script>
<style></style>
