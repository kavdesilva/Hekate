<template>
    <div id="login-signup" v-if="!currentUser">
        <header>
            <h1>welcome.</h1>
        </header>
        <button v-on:click="loginForm">log in</button>
        <button v-on:click="signupForm">sign up</button>
        <router-view :users="users" :userEmit="userEmit" @emitUserToRoot="emitUserToRoot"/>
    </div>
    <div id="next-cycle" v-else>
        <header>
            <h1>welcome back.</h1>
        </header>
        <NextCycle />
        <button v-on:click="updateAccount">update account</button>
        <button v-on:click="deleteAccount">delete account</button><br />
        <button v-on:click="logOut">logout</button>
    </div>
</template>

<script>
import NextCycle from '../components/NextCycle.vue';
import router from '@/router';
import axios from 'axios'
    export default {
    name: "HomePage",
    components: { NextCycle },
    data: () => ({
        users: [],
        userEmit: null
    }),
    props: ['currentUser'],
    mounted() {
        this.getUsers();
        this.emitUserToRoot();
    },
    methods: {
        loginForm() {
            router.push('/login')
        },
        signupForm() {
            router.push('/signup')
        },
        logOut() {
            this.$emit('logUser', null)
            router.push('/')
        },
        async getUsers() {
            const res = await axios.get('http://localhost:3001/api/users')
            this.users = res.data
            console.log(this.users)
        },
        emitUserToRoot(user) {
            this.userEmit = user
            this.$emit('logUser', this.userEmit)
            console.log(this.userEmit)
        },
        updateAccount() {
            router.push('/update')
        },
        deleteAccount() {
            router.push('/delete')
        }
    }
}
</script>