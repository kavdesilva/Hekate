<template>
    <div id="login-signup" v-if="!currentUser">
        <header>
            <h1>welcome.</h1>
        </header>
        <button v-on:click="loginForm">log in</button>
        <button v-on:click="signupForm">sign up</button>
        <router-view currentUser="currentUser"/>
    </div>
    <div id="next-cycle" v-else>
        <header>
            <h1>welcome back.</h1>
        </header>
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