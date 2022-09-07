<template>
    <div id="login-signup" v-if="!currentUser">
        <header>welcome.</header>
        <button v-on:click="loginForm">log in</button>
        <button v-on:click="signupForm">sign up</button>
        <router-view />
    </div>
    <div id="next-cycle" v-else>
        <header>welcome back.</header>
        <NextCycle />
        <button v-on:click="logOut">logout</button>
    </div>
</template>

<script>
import NextCycle from '../components/NextCycle.vue';
import router from '@/router';
    export default {
    name: "HomePage",
    components: { NextCycle },
    data: () => ({
        currentUser: null
    }),
    mounted() {

    },
    methods: {
        loginForm() {
            router.push('/login')
        },
        signupForm() {
            router.push('/signup')
        },
        logOut() {
            this.currentUser = null
            router.push('/')
        }
    }
}
</script>