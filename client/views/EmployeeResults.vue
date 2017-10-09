<template>
  <div class="page">
    <results-menu></results-menu>

    <div class="row">
      <div class="col-md-12">
        <table class="table table-striped">
          <thead>
          <tr>
            <th></th>
            <th>Pievērš uzmanību detaļām</th>
            <th>Analītiska domāšana</th>
            <th>Līderības prasmes</th>
            <th>Iniciatīva</th>
            <th>Orientācija uz rezultātu</th>
            <th>Komandas vadīšana</th>
            <th>
              <a href="javascript:">Pievienot</a>
            </th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <th>
              Ieva Kalna, <br />
              IT vadītāja
            </th>
            <td>
              <v-icon>done</v-icon>
            </td>
            <td>
              <v-icon>error</v-icon>
            </td>
            <td>
              <v-icon>access_time</v-icon>
            </td>
            <td>
              <v-icon>done</v-icon>
            </td>
            <td>
              <v-icon>done</v-icon>
            </td>
            <td>
              <v-icon>done</v-icon>
            </td>
            <td></td>
          </tr>

          <tr>
            <th>
              Jānis Liepa, <br />
              IT speciālists
            </th>
            <td>
              <v-icon>done</v-icon>
            </td>
            <td>
              <v-icon>done</v-icon>
            </td>
            <td>
              <v-icon>error</v-icon>
            </td>
            <td>
              <v-icon>access_time</v-icon>
            </td>
            <td>
              <v-icon>access_time</v-icon>
            </td>
            <td>
              n/a
            </td>
            <td></td>
          </tr>

          <tr>
            <th>
              Linda Puķe, <br />
              HR vadītāja
            </th>
            <td>
              <v-icon>access_time</v-icon>
            </td>
            <td>
              <v-icon>access_time</v-icon>
            </td>
            <td>
              <v-icon>done</v-icon>
            </td>
            <td>
              <v-icon>done</v-icon>
            </td>
            <td>
              <v-icon>done</v-icon>
            </td>
            <td>
              <v-icon>done</v-icon>
            </td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="row" v-for="(row, i) in matrix">
          <div class="col-md-1" style="width: 12.5%;"></div>
          <div class="col-md-3 matrix-col" v-for="(col, j) in row">
            <div class="matrix-col-inner" :style="'background-color:' + col.background + ';color:' + col.color" @click="dialog = true">
              <h4>
                {{ col.title }}
              </h4>

              <small style="margin-top: 50px; display: block">
                {{ col.description }}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title class="headline">Darbinieki</v-card-title>
        <v-card-text>
          Jānis Bērziņš, IT speciālists<br />
          Ēriks Zariņš, Mārketinga vadītājs<br />
          Pēteris Rudzītis, Lietvedis
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click.native="dialog = false">Aizvērt</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import ResultsMenu from '../components/results/ResultsMenu.vue'
  import VIcon from "vuetify/src/components/VIcon/VIcon";

  export default {
    components: {
      VIcon,
      ResultsMenu,
    },
    data() {
      return {
        dialog: false,
        matrix: [
          [
            {
              'title': 'Augsts profesionālis',
              'description': 'Pastāvīgi sasniedz izcilus rezultātus. Zina pašreizējo amatu ļoti labi. Ne vienmēr spēj pielāgoties jaunām situācijām.',
              'background': '#564040',
              'color': '#ffffff',
            },
            {
              'title': 'Augsts profesionālis plus',
              'description': 'Pastāvīgi sasniedz izcilus rezultātus un augsta snieguma vērtējumus. Ir labs darbinieks vienā vai vairākās jomās. Spēj adaptēties jaunām situācijām un apgūt jaunas lietas.',
              'background': '#FFDC9C',
              'color': '#000000',
            },
            {
              'title': 'Pastāvīga zvaigzne',
              'description': 'Parasti uzņēmuma nelielā skaitā, bet ļoti pieprasīti. Strādā labi, mācās ātri. Ir spēja uzņemties izaicinošus darba pienākumus jaunās jomās.',
              'background': '#564040',
              'color': '#ffffff',
            },
          ],
          [
            {
              'title': 'Pamatīgs profesionālis',
              'description': 'Pastāvīgi sasniedz un reizumis pārsniedz sagaidīto. Zina savu pašreizējo darbu labi. Nespēj pielāgoties jaunām situācijām.',
              'background': '#564040',
              'color': '#ffffff',
            },
            {
              'title': 'Labākais izpildītājs',
              'description': 'Zina savu darbu labi un pilnveido savas prasmes atbilstoši. Var piemēroties jaunām situācijām un izaicinājumiem. Var pārvietoties karjerā vertikāli vai horizontāli.',
              'background': '#FFDC9C',
              'color': '#000000',
            },
            {
              'title': 'Nākotnes zvaigzne',
              'description': 'Pastāvīgi sasniedz un dažreiz pārsniedz sagaidīto un spēj uzņemties jaunus izaicinājumus pastāvīgi.',
              'background': '#FFDC9C',
              'color': '#000000',
            },
          ],
          [
            {
              'title': 'Zema snieguma darbinieks',
              'description': 'Nesasniedz rezultātus kā sagaidīts. Nespēj efektīvi pielāgoties jaunām situācijām.',
              'background': '#FF5F5B',
              'color': '#ffffff',
            },
            {
              'title': 'Svārstīgs sniegums',
              'description': 'Darba rezultāti ir svārstīgi. Var nebūt pareizajā amatā vai funkcijā.',
              'background': '#FF5F5B',
              'color': '#ffffff',
            },
            {
              'title': 'Neslīpēts dimants',
              'description': 'Ir potenciāls sasniegt labus rezultātus un darīt lielas lietas uzņēmuma labā. Viņiem vēl nav bijusi iespēja sevi pierādīt vai ir pārāk neilgs laiks organizācijā.',
              'background': '#FFDC9C',
              'color': '#000000',
            },
          ]
        ]
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  .matrix-col {
    height: 150px;

    .matrix-col-inner {
      height: 100%;
      text-align: center;
      padding-top: 20px;
      cursor: pointer;
      border: solid 1px #c2c2c2;
    }
  }
</style>
