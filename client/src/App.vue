<template>
  <div id="app">
    <header>
      <img src="./assets/hekates_wheel2.jpeg" id="hekate-logo"/>
      <NavBar />
    </header>
    <main>
      <router-view @newUser="currentUser" @currentUser="currentUser" :currentUser="currentUser"/>
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
        currentUser: null
      }
    }
  }
</script>

<style>

</style>
