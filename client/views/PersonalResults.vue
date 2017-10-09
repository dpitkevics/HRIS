<template>
  <div class="page">
    <results-menu></results-menu>

    <h3>Mani rezultāti</h3>

    <div class="row text-center">
      <div class="col-md-6">
        <h4>Pievērš uzmanību detaļām</h4>

        <img src="/static/pie_chart_1.png" />
      </div>

      <div class="col-md-6">
        <h4>Analītiska domāšana</h4>

        <img src="/static/pie_chart_2.png" />
      </div>
    </div>

    <div class="row text-center" style="padding: 15px 0">
      <div class="col-md-12">
        <v-btn color="success" disabled style="padding: 30px 0;">
          Novērtēt sevi
          <br />
          (Paldies, tu jau esi sevi novērtējis)
        </v-btn>
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

<style lang="scss">
  h4 {
    position: relative;
    z-index: 1;
    margin-bottom: -30px;
  }

  img {
    width: 100%;
    position: relative;
  }
</style>
