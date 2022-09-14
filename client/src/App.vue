<template>
  <div id="app">
    <header>
      <router-link to="/">
        <img src="./assets/hekates_wheel2.jpeg" id="hekate-logo"/>
      </router-link>
      <NavBar :currentUser="currentUser" />
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
        currentDate: new Date()
      }
    },
    mounted() {
        this.todaysDate()
    },
    methods: {
      logUser(user) {
        this.currentUser = user
      },
      todaysDate() {
        console.log(this.currentDate)
      },
    }
  }
</script>
