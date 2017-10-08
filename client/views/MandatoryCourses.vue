<template>
  <div class="page">
    <courses-menu></courses-menu>

    <div class="row">
      <div class="col-md-12" style="padding-top: 15px;">
        <course-list :courses="courses" :is-mandatory="true"></course-list>
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
            title: 'Līderības prasmju pastiprināšana',
            place: '"Līderu Nams", Puņu iela 1, Rīga',
            teacher: 'J. Bērziņš',
            date: '01/11/2017, 09:00 - 17:00'
          },
          {
            title: 'Stratēģiskā plānošana un vadība',
            place: 'Mācību cehs "123", Puņu iela 2, Rīga',
            teacher: 'J. Zariņš',
            date: '02/12/2017, 09:00 - 16:00'
          }
        ]
      }
    }
  }
</script>
