<template>
  <div class="page">
    <courses-menu></courses-menu>

    <div class="row">
      <div class="col-md-12" style="padding-top: 15px;">
        <course-list :courses="courses" :is-mandatory="false"></course-list>
      </div>
    </div>
  </div>
</template>

<script>
  import CoursesMenu from '../components/courses/CoursesMenu.vue'
  import CourseList from '../components/courses/CourseList.vue'

  export default {
    components: {
      CoursesMenu,
      CourseList
    },
    data() {
      return {
        courses: [
          {
            title: 'Īsa pamācība ar MS Excel',
            place: 'Birojs',
            teacher: 'J. Liepa (IT spec.)',
            date: '03/11/2017, 11:00 - 13:00'
          }
        ]
      }
    }
  }
</script>
