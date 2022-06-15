<template>
  <ul>
    <li v-for="movie in movies" :key="movie.id">
      {{ movie.title }}
      <span v-if="movie.requiresLogin">{login required}</span>
      <button v-if="isLoggedIn" @click="removeMovie(movie.id)">x</button>
    </li>
  </ul>
  <button @click="onAddMovieClick" v-if="isLoggedIn">Add Movie</button>
</template>
<script>
import useMovies from "@/composable/useMovies";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "MovieList",
  setup: () => {
    const store = useStore();
    const isLoggedIn = computed(() => store.getters["user/getIsLoggedIn"]);
    const { addMovie, getNumberOfMovies, removeMovie, getMovies } = useMovies();

    const onAddMovieClick = () => {
      addMovie({
        id: getNumberOfMovies().value + 1,
        title: `Movie ${getNumberOfMovies().value + 1}`,
        requiresLogin: false,
      });
    };

    return {
      movies: getMovies(),
      onAddMovieClick,
      isLoggedIn,
      removeMovie,
    };
  },
};
</script>
