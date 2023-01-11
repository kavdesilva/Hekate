<template>
    <nav v-if="currentUser">
      <router-link to="/">home</router-link>
      <router-link :to="{name: 'CurrentDate', params: {date: currentDate.toISOString().slice(0, 10)}}">record</router-link>
      <router-link to="/recall">recall</router-link>
      <router-link to="/reflect">reflect</router-link>
    </nav>
</template>

<script>
  export default {
    name: 'NavBar',
    props: ['currentUser', 'currentDate']
  }
</script>

<style scoped>

</style>
