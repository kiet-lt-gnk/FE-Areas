<template>
  <form @submit.prevent="onSubmit">
    <label>
      Email:
      <input type="email" v-model="userForm.email" />
    </label>

    <label>
      Password:
      <input type="password" v-model="userForm.password" />
    </label>

    <button type="submit" :disabled="isLoading">
      {{ isLoading ? "Loading..." : "Submit" }}
    </button>
  </form>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "UserLogin",
  setup: () => {
    const store = useStore();
    const userForm = ref({
      email: "",
      password: "",
    });

    const isLoading = computed(() => store.state.user.loading);

    const onSubmit = () => {
      store.dispatch("user/loginUser", userForm.value);
    };

    return { userForm, onSubmit, isLoading };
  },
};
</script>
<style></style>
