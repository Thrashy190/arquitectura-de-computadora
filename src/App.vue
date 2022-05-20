<template>
  <v-app>
    <div id="app">
      <Navbar class="mb-15" />
      <div class="bodyContainer body-position">
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
  color: #2c3e50;
}

.body-position {
  margin-top: 270px;
}

.title {
  font-size: 40px;
  color: #691640;
  font-weight: bold;
}

.subtitle {
  font-size: 20px;
  font-weight: bold;
}

div {
  font-size: 18px;
}
</style>
