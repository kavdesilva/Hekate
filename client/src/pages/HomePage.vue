<template>
    <div>
        <p>this is the homepage.</p>
    </div>
    <div id="login-signup">
        <button v-on:click="loginForm">log in</button>
        <button v-on:click="signupForm">sign up</button>
        <LogIn />
        <SignUp />
    </div>
    <div id="next-cycle">
        <NextCycle />
    </div>
    <div v-if="loggedIn == true">
        <button v-on:click="logOut">logout</button>
    </div>
    <div v-else>
        <button v-on:click="logIn">log in demo</button>
    </div>
</template>

<script>
import SignUp from '../components/SignUp.vue';
import LogIn from '../components/LogIn.vue'
import NextCycle from '../components/NextCycle.vue';
    export default {
    name: "HomePage",
    components: { LogIn, SignUp, NextCycle },
    data: () => ({
        loggedIn: false
    }),
    mounted() {
        this.isLoggedIn();
    },
    methods: {
        loginForm() {
            document.getElementById('login-form').style.display = 'block'
            document.getElementById('signup-form').style.display = 'none'
        },
        signupForm() {
            document.getElementById('login-form').style.display = 'none'
            document.getElementById('signup-form').style.display = 'block'
        },
        isLoggedIn() {
            if (!this.loggedIn) {
                document.getElementById('login-signup').style.display = 'block'
                document.getElementById('next-cycle').style.display = 'none'
            } else {
                document.getElementById('login-signup').style.display = 'none'
                document.getElementById('next-cycle').style.display = 'block'
            }
        },
        logOut() {
            this.loggedIn = false
            this.isLoggedIn()
        },
        logIn() {
            this.loggedIn = true
            this.isLoggedIn()
        }
    }
}
</script>