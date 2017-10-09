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
          <div class="col-md-4 matrix-col" v-for="(col, j) in row">
            <div class="matrix-col-inner" :style="'background-color:' + col.background + ';color:' + col.color" @click="dialog = true">
              <h4>
                {{ col.title }}
              </h4>

              <p style="margin-top: 50px;">
                {{ col.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title class="headline">Darbinieki</v-card-title>
        <v-card-text>
          Jānis Bērziņš<br />
          Ēriks Zariņš<br />
          Pēteris Rudzītis
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
              'description': 'Lorem ipsum',
              'background': '#564040',
              'color': '#ffffff',
            },
            {
              'title': 'Augsts profesionālis plus',
              'description': 'Lorem ipsum',
              'background': '#FFDC9C',
              'color': '#000000',
            },
            {
              'title': 'Pastāvīga zvaigzne',
              'description': 'Lorem ipsum',
              'background': '#564040',
              'color': '#ffffff',
            },
          ],
          [
            {
              'title': 'Pamatīgs profesionālis',
              'description': 'Lorem ipsum',
              'background': '#564040',
              'color': '#ffffff',
            },
            {
              'title': 'Labākais izpildītājs',
              'description': 'Lorem ipsum',
              'background': '#FFDC9C',
              'color': '#000000',
            },
            {
              'title': 'Nākotnes zvaigzne',
              'description': 'Lorem ipsum',
              'background': '#FFDC9C',
              'color': '#000000',
            },
          ],
          [
            {
              'title': 'Zema snieguma darbinieks',
              'description': 'Lorem ipsum',
              'background': '#FF5F5B',
              'color': '#ffffff',
            },
            {
              'title': 'Svārstīgs sniegums',
              'description': 'Lorem ipsum',
              'background': '#FF5F5B',
              'color': '#ffffff',
            },
            {
              'title': 'Neslīpēts dimants',
              'description': 'Lorem ipsum',
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
    height: 300px;

    .matrix-col-inner {
      height: 100%;
      text-align: center;
      padding-top: 20px;
      cursor: pointer;
      border: solid 1px #c2c2c2;
    }
  }
</style>
