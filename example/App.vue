<template>
  <div id="app">
    <div class="row justify-content-center">
      <h1>Ejemplos de buscador RCEA</h1>
    </div>
    <div class="row">
      <div class="col-3" />
      <div class="col-3">
        <buscador-rcea v-model="personaFisicaLeft">
          <template v-slot:message="slotProps">
            <h5>Mostrando mensaje usando slot</h5>
            {{ slotProps.message }}
          </template>
        </buscador-rcea>
        <code>{{ personaFisicaLeft }}</code>
      </div>
      <div class="col-3">
        <h5>Mostrando mensaje sin usar slot</h5>
        <buscador-rcea v-model="personaFisicaRight" />
        <code>{{ personaFisicaRight }}</code>
      </div>
      <div class="col-3" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BuscadorrceaComponent from "../src/index";

Vue.use(BuscadorrceaComponent, { host: "http://localhost:3000" });

export default Vue.extend({
  data: function() {
    return {
      personaFisicaLeft: null,
      personaFisicaRight: null
    };
  }
});
</script>
