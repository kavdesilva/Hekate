<template>
  <div id="app">
    <header>
      <img src="./assets/hekates_wheel2.jpeg" id="hekate-logo"/>
      <NavBar />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  export default {
    name: 'App',
    components: { NavBar }
  }
</script>

<style>

</style>
