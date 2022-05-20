<template>
  <div class="d-flex flex-row justify-space-around nav" id="nav">
    <img
      v-if="!isScroll"
      src="@/assets/imgs/its.png"
      alt="Logoits"
      class="logoits"
    />
    <img
      v-if="!isScroll"
      src="@/assets/imgs/Logo-TecNM-2017.png"
      alt="logotecnm"
      class="logotecnm"
    />
    <div class="d-flex align-center">
      <div
        class="text-h6 font-weight-bold mr-3 ml-3 route"
        :class="`${select === tab.id ? 'route-selected' : 'route-no-selected'}`"
        v-for="tab in links"
        :key="tab.id"
        @click="selectTab(tab)"
      >
        | {{ tab.name }} |
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => {
    return {
      isScroll: false,
      select: 0,
      links: [
        { name: "Inicio", route: "Home", id: 0 },
        { name: "Unidad 1", route: "Unidad1", id: 1 },
        { name: "Unidad 2", route: "Unidad2", id: 2 },
        { name: "Unidad 3", route: "Unidad3", id: 3 },
        { name: "Unidad 4", route: "Unidad4", id: 4 },
      ],
    };
  },
  mounted() {
    this.startRoute();
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    selectTab(route) {
      this.select = route.id;
      this.$router.push({ name: route.route });
      window.scroll({
        top: 0,
        left: 0,
      });
    },
    startRoute() {
      this.select = 0;
      this.$router.push({ name: "Home" });
    },
    handleScroll() {
      if (window.scrollY > 300) {
        console.log(window.scrollY);
        document.getElementById("nav").style.padding = "10px";
        this.isScroll = true;
      } else {
        document.getElementById("nav").style.padding = "30px";
        this.isScroll = false;
      }
    },
  },
};
</script>

<style>
.nav {
  overflow: hidden;
  transition: 0.4s;
  position: fixed;
  padding: 30px;
  background: #691640;
  color: #ffffff;
  width: 100%;
  top: 0;
  z-index: 9;
}

.route {
  cursor: pointer;
}

.route-no-selected {
  color: #ffffff;
}

.route-selected {
  color: #b18199;
}

.bodyContainer {
  min-height: calc(100vh - 40px);
}

.logoits {
  width: 10%;
  height: 10%;
}
.logotecnm {
  width: 15%;
  height: 10%;
}
</style>
