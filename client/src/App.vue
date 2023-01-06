<template>
  <div id="app">
    <header>
      <router-link to="/">
        <img :src="logoSwitch" id="hekate-logo" @mouseover="hover=true" @mouseleave="hover=false"/>
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
        currentDate: new Date(),
        logoDefault: require("./assets/hekates_wheel.png"),
        logoHover: require("./assets/hekates_wheel2.png"),
        hover: false
      }
    },
    methods: {
      logUser(user) {
        this.currentUser = user
      }
    },
    computed: {
      logoSwitch(){
        if (this.hover == true){
          return this.logoHover
        }else{
          return this.logoDefault
        }
      }
    }
  }
</script>
