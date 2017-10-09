import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Courses from '../views/Courses.vue'
import MandatoryCourses from '../views/MandatoryCourses.vue'
import CompanyGoals from '../views/CompanyGoals.vue'
import PersonalGoals from '../views/PersonalGoals.vue'
import TeamGoals from '../views/TeamGoals.vue'
import PersonalResults from '../views/PersonalResults.vue'
import EmployeeResults from '../views/EmployeeResults.vue'
import AssessEmployee from '../views/AssessEmployee.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/courses',
      component: Courses
    },
    {
      path: '/courses/mandatory',
      component: MandatoryCourses
    },
    {
      path: '/goals/company',
      component: CompanyGoals
    },
    {
      path: '/goals/personal',
      component: PersonalGoals
    },
    {
      path: '/goals/team',
      component: TeamGoals
    },
    {
      path: '/results/personal',
      component: PersonalResults
    },
    {
      path: '/results/employees',
      component: EmployeeResults
    },
    {
      path: '/results/assess',
      component: AssessEmployee
    }
  ]
})
