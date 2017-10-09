<template>
  <div class="page">
    <results-menu></results-menu>

    <h3 style="padding-left: 25px;">Darbinieks: Jānis Liepa, IT speciālists</h3>

    <div class="row" style="padding-left: 25px;">
      <div class="col-md-6">
        <h4 style="padding-bottom: 15px;">
          Pievērš uzmanību detaļām:
        </h4>

        <v-radio-group v-model="column" column>
          <v-radio label="1 - Pilnīgi nepiekrītu" value="1" ></v-radio>
          <v-radio label="2 - Nepiekrītu" value="2"></v-radio>
          <v-radio label="3 - Grūti pateikt" value="3"></v-radio>
          <v-radio label="4 - Piekrītu" value="4"></v-radio>
          <v-radio label="5 - Pilnīgi piekrītu" value="5"></v-radio>
        </v-radio-group>
      </div>

      <div class="col-md-6">
        <h4 style="padding-bottom: 15px;">
          Analītiska domāšana:
        </h4>

        <v-radio-group v-model="column" column>
          <v-radio label="1 - Pilnīgi nepiekrītu" value="1" ></v-radio>
          <v-radio label="2 - Nepiekrītu" value="2"></v-radio>
          <v-radio label="3 - Grūti pateikt" value="3"></v-radio>
          <v-radio label="4 - Piekrītu" value="4"></v-radio>
          <v-radio label="5 - Pilnīgi piekrītu" value="5"></v-radio>
        </v-radio-group>
      </div>
    </div>

    <div class="row" style="padding-left: 25px; margin-bottom: 15px;">
      <div class="col-md-12">
        <v-btn color="green darken-1">Iesniegt</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import ResultsMenu from '../components/results/ResultsMenu.vue'

  export default {
    components: {
      ResultsMenu,
    }
  }
</script>
