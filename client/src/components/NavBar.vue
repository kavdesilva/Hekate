<template>
    <nav>
      <router-link v-if="currentUser" to="/">home</router-link>
      <router-link v-if="currentUser" to="/record">record</router-link>
      <router-link v-if="currentUser" to="/recall">recall</router-link>
      <router-link v-if="currentUser" to="/reflect">reflect</router-link>
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
