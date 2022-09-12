<template>
  <div id="app">
    <header>
      <img src="./assets/hekates_wheel2.jpeg" id="hekate-logo"/>
      <NavBar />
    </header>
    <main>
      <router-view :currentUser="currentUser" :selectedDate="selectedDate" @logUser="logUser"/>
    </main>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  export default {
    name: 'App',
    components: { NavBar },
    data: () => {
      return {
        currentUser: null,
        selectedDate: null
      }
    },
    methods: {
      logUser(user) {
        this.currentUser = user
        console.log(this.currentUser)
      },
      selectDate(date) {
        this.selectedDate = date
      }
    }
  }
</script>

