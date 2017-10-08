<template>
  <div>
    <div class="row" v-for="goal in goals">
      <div class="col-md-2">
        <h3>
          {{ goal.percentage }}%
        </h3>
      </div>

      <div class="col-md-10">
        <div class="row">
          <div class="col-md-12">
            {{ goal.title }}
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            Statuss: <strong>{{ goal.status }}</strong>
          </div>

          <div class="col-md-4">
            Deadline: <strong>{{ goal.deadline }}</strong>
          </div>

          <div class="col-md-4">
            Svarīgums: <strong>{{ goal.priority }}</strong>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <v-progress-linear :value="goal.percentage" height="10" :color="goal.className"></v-progress-linear>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      goals: {
        type: Array,
        required: true
      },
    },
  }
</script>
