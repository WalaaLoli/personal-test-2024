<template>
  <div id="app">
    <NavigationApp />
    <router-view />
  </div>
</template>

<script>
import NavigationApp from "./components/NavigationApp.vue";

export default {
  name: "App",
  components: {
    NavigationApp,
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
</style>
