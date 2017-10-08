<template>
  <div class="page">
    <goal-menu></goal-menu>

    <div class="row">
      <div class="col-md-12" style="padding-top: 15px;">
        <goal-list :goals="goals"></goal-list>
      </div>
    </div>
  </div>
</template>

<script>
  import GoalMenu from '../components/goals/GoalMenu.vue'
  import GoalList from '../components/goals/GoalList.vue'

  export default {
    components: {
      GoalMenu,
      GoalList
    },
    data() {
      return {
        goals: [
          {
            percentage: 45,
            title: 'Vadītāju līderības prasmju paaugstināšana',
            status: 'Procesā',
            deadline: '31/12/2017',
            priority: '1. pakāpe',
            className: 'info'
          },
          {
            percentage: 85,
            title: 'Izveidot "On-boarding" procedūru jaunajiem darbiniekiem',
            status: 'Procesā',
            deadline: '01/06/2018',
            priority: '2. pakāpe',
            className: 'info'
          },
          {
            percentage: 100,
            title: 'Pieņemt un apmācīt 4 "team leadus"',
            status: 'Pabeigts',
            deadline: '01/06/2017',
            priority: '3. pakāpe',
            className: 'success'
          }
        ]
      }
    }
  }
</script>
