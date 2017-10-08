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
            percentage: 60,
            title: 'Izveidot talantu vadības sistēmu',
            status: 'Procesā',
            deadline: '31/12/2017',
            priority: '3. pakāpe',
            className: 'info'
          }
        ]
      }
    }
  }
</script>
