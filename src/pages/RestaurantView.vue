<template>
  <ContentHeader>
    <template v-slot:left> Restaurant </template>
    <template v-slot:right>
      <button class="restaurant_page--button primary">BUTTON</button>
      <button class="restaurant_page--button secondary">BUTTON</button>
    </template>
  </ContentHeader>
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
import ContentHeader from "@/components/ContentHeader.vue";
import { useStore } from "vuex";
export default {
  name: "RestaurantView",
  components: {
    MovieList,
    UserLogin,
    UserProfile,
    ContentHeader,
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
<style>
.restaurant_page--button {
  padding: 13px 22px;
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.restaurant_page--button.primary {
  background-color: bisque;
  color: #042331;
}

.restaurant_page--button.primary:hover {
  background-color: #042331;
  color: bisque;
  border: 1px solid bisque;
}

.restaurant_page--button.secondary {
  background-color: #042331;
  color: white;
  border: 1px solid white;
}

.restaurant_page--button.secondary:hover {
  background-color: bisque;
  color: #042331;
}
</style>
