<template>
  <UserLogin v-if="!isLoggedIn" />
  <UserProfile v-else />
  <MovieList />
  Number of movies: {{ numberOfMovies }}
</template>
<script>
import { computed } from "vue";
import MovieList from "@/components/MovieList.vue";
import useMovies from "@/composable/useMovies";
import UserLogin from "@/components/UserLogin.vue";
import UserProfile from "@/components/UserProfile.vue";
import { useStore } from "vuex";

export default {
  name: "RestaurantDefault",
  components: {
    MovieList,
    UserLogin,
    UserProfile,
  },
  setup() {
    const store = useStore();
    const { getNumberOfMovies } = useMovies();
    const isLoggedIn = computed(() => store.getters["user/getIsLoggedIn"]);

    return {
      isLoggedIn,
      numberOfMovies: getNumberOfMovies(),
    };
  },
};
</script>
<style></style>
