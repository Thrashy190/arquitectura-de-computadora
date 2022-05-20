<template>
  <div class="footer pb-6 pt-4 mt-10">
    <v-container>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
          <div class="text-h6 mb-4">Informacion del alumno</div>
          <div>
            <div>Diego Antonio Lopez Martinez</div>
            <div>C19051632</div>
            <div>6° semestre</div>
          </div>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
          <div class="text-h6 mb-4">Informacion de la materia</div>
          <div>
            <div>Arquitectura de computadora</div>
            <div>Hora: 5:00 - 6:00</div>
          </div>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
          <div class="text-h6 mb-4">Redes del tecnologico</div>
          <div>
            <div>Instituto tecnologico de saltillo</div>
            <div></div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  background: #691640;
  color: #ffffff;
}
</style>
