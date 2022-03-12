<template>
  <v-app>
    <div id="app">
      <Navbar class="mb-15" />
      <div class="bodyContainer">
        <router-view />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  </v-app>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Nav.vue";
export default {
  components: {
    Footer,
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
