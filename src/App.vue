<template>
  <router-view />
</template>
<script>
export default {
  name: "App",
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
</style>
