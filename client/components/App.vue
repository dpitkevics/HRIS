<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
        permanent
        clipped
        class="grey lighten-4"
        app
      >
        <v-list
          dense
          class="grey lighten-4"
        >
          <v-list-tile to="/">
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Dashboard</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile to="/goals/personal">
            <v-list-tile-action>
              <v-icon>trending_up</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Mērķi</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile to="/results/personal">
            <v-list-tile-action>
              <v-icon>assessment</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Novērtēšana</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile to="/courses">
            <v-list-tile-action>
              <v-icon>library_books</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Mācības</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar class="blue-grey darken-1" app absolute clipped-left>
        <span class="title">
          HRIS
        </span>
      </v-toolbar>

      <main>
        <v-content>
          <v-container grid-list-md class="grey lighten-4">
            <v-layout row wrap>
              <router-view></router-view>
            </v-layout>
          </v-container>
        </v-content>
      </main>
    </v-app>
  </div>
</template>

<script>
  export default {
    props: {
      source: String
    },

    methods: {
      notImplementedAlert() {
        alert('Šī sistēmas funkcionalitāte nav istrādāta.');
      }
    }
  }
</script>

<style lang="scss">
  @import "~vuetify/dist/vuetify.css";
  @import "~bootstrap/dist/css/bootstrap.css";

  #keep main .container {
    height: 660px;
  }
  .navigation-drawer__border {
    display: none;
  }
  .title {
    color: #ffffff;
  }
  .page {
    width: 100%;
  }
  .private {
    border: 1px solid orangered;
  }
</style>
