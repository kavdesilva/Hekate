<template>
  <div id="app">
    <header>
      <img src="./assets/hekates_wheel2.jpeg" id="hekate-logo"/>
      <NavBar />
    </header>
    <main>
      <router-view :currentUser="currentUser" :currentDate="currentDate" @logUser="logUser"/>
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
        currentDate: new Date().toISOString().slice(0, 10)
      }
    },
    mounted() {
        this.todaysDate()
    },
    methods: {
      logUser(user) {
        this.currentUser = user
        console.log(this.currentUser)
      },
      todaysDate() {
        console.log(this.C)
      }
    }
  }
</script>
