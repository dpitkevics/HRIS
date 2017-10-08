<template>
  <div>
    <div class="row">
      <div class="col-md-6" v-for="course in courses">
        <v-card>
          <v-card-title primary-title>
            <div style="width: 100%">
              <h3 class="headline mb-0">{{ course.title }}</h3>

              <div class="row">
                <div class="col-md-4">
                  Vieta:
                </div>

                <div class="col-md-8">
                  <strong>{{ course.place }}</strong>
                </div>
              </div>

              <div class="row">
                <div class="col-md-4">
                  Vadītājs:
                </div>

                <div class="col-md-8">
                  <strong>{{ course.teacher }}</strong>
                </div>
              </div>

              <div class="row">
                <div class="col-md-4">
                  Datums:
                </div>

                <div class="col-md-8">
                  <strong>{{ course.date }}</strong>
                </div>
              </div>
            </div>
          </v-card-title>
          <v-card-actions v-if="!isMandatory">
            <v-btn raised color="info">Pieteikties</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      courses: {
        type: Array,
        required: true
      },
      isMandatory: {
        type: Boolean,
        required: true
      }
    },
  }
</script>
