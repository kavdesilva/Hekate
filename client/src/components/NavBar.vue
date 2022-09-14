<template>
    <nav v-if="currentUser">
      <router-link to="/">home</router-link>
      <router-link to="/record">record</router-link>
      <router-link to="/recall">recall</router-link>
      <router-link to="/reflect">reflect</router-link>
    </nav>
</template>

<script>
  export default {
    name: 'NavBar',
    props: ['currentUser']
  }
</script>

<style scoped>

</style>
