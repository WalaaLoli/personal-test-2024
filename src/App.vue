<template>
  <div id="app">
    <NavigationApp />
    <div class="content">
      <div class="lolo">
        <h2 class="lolo-name">ًWalaa Mostafa</h2>
      </div>
      <router-view />
    </div>
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
