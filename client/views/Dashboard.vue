<template>
  <div class="page">
    <div class="row">
      <div class="col-md-6">
        <v-card>
          <v-card-media
            class="white--text"
            height="200px"
            src="/static/user.png"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">Mans Profils</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title>
            <div style="width: 100%">
              <div class="row">
                <div class="col-md-6">
                  Vārds, Uzvārds:
                </div>

                <div class="col-md-6">
                  <strong>Anna Bērziņa</strong>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  Dzimšanas dati
                </div>

                <div class="col-md-6">
                  <strong>1990. gada 1. septembris</strong>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  E-pasts:
                </div>

                <div class="col-md-6">
                  <strong>anna.berzina@epasts.lv</strong>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  Departaments
                </div>

                <div class="col-md-6">
                  <strong>Mārketings</strong>
                </div>
              </div>
            </div>
          </v-card-title>
        </v-card>
      </div>

      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12">
            <v-card>
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">Atgādinājumi</span>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-card-title>
                <div style="width: 100%">
                  <div class="row">
                    <div class="col-md-2">
                      11/10/2017
                    </div>

                    <div class="col-md-8">
                      <strong>Sagatavot darba līgumu Jānim Ābolam</strong>
                    </div>

                    <div class="col-md-2">
                      <a href="javascript:">Apskatīt</a>
                    </div>
                  </div>
                </div>
              </v-card-title>
            </v-card>
          </div>
        </div>

        <div class="row" style="margin-top: 15px;">
          <div class="col-md-12">
            <v-card>
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">Mērķi</span>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-card-title>
                <div style="width: 100%">
                  <div class="row">
                    <div class="col-md-10">
                      Uzņēmuma mērķi <strong>(4)</strong>
                    </div>

                    <div class="col-md-2">
                      <router-link to="/goals/company">Apskatīt</router-link>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-10">
                      Mani individuālie mērķi <strong>(4)</strong>
                    </div>

                    <div class="col-md-2">
                      <router-link to="/goals/personal">Apskatīt</router-link>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-10">
                      Komandas mērķi <strong>(3)</strong>
                    </div>

                    <div class="col-md-2">
                      <router-link to="/goals/team">Apskatīt</router-link>
                    </div>
                  </div>
                </div>
              </v-card-title>
            </v-card>
          </div>
        </div>
      </div>
    </div>

    <div class="row" style="margin-top: 15px;">
      <div class="col-md-6">
        <v-card>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Aktuālie Projekti</span>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-title>
            <div style="width: 100%">
              <div class="row">
                <div class="col-md-3">
                  IS Ieviešana
                </div>

                <div class="col-md-8">
                  <v-progress-linear value="45" height="10" color="info"></v-progress-linear>
                </div>

                <div class="col-md-1">
                  <strong>45%</strong>
                </div>
              </div>

              <div class="row">
                <div class="col-md-3">
                  On-boarding
                </div>

                <div class="col-md-8">
                  <v-progress-linear value="80" height="10" color="warning"></v-progress-linear>
                </div>

                <div class="col-md-1">
                  <strong>80%</strong>
                </div>
              </div>
            </div>
          </v-card-title>
        </v-card>
      </div>

      <div class="col-md-6">
        <v-card>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Mācības</span>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-title>
            <div style="width: 100%">
              <div class="row">
                <div class="col-md-10">
                  Manas izvēlētās apmācības <strong>(0/2)</strong>
                </div>

                <div class="col-md-2">
                  <router-link to="/courses">Pieteikties</router-link>
                </div>
              </div>

              <div class="row">
                <div class="col-md-10">
                  Obligātās apmācības <strong>(2)</strong>
                </div>

                <div class="col-md-2">
                  <router-link to="/courses/mandatory">Apskatīt</router-link>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 text-center">
                  <v-btn color="success">Sagatavot apmācību plānu</v-btn>
                </div>
              </div>
            </div>
          </v-card-title>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from 'components/Counter'

export default {
  components: {
    Counter
  }
}
</script>
