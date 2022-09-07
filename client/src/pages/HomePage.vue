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
        <button v-on:click="logOut">logout</button>
    </div>
</template>

<script>
import SignUp from '../components/SignUp.vue';
import LogIn from '../components/LogIn.vue'
import NextCycle from '../components/NextCycle.vue';
import router from '@/router';
    export default {
    name: "HomePage",
    components: { LogIn, SignUp, NextCycle },
    data: () => ({
        currentUser: null
    }),
    mounted() {
        this.isLoggedIn();
    },
    methods: {
        loginForm() {
            router.push('/login')
            document.getElementById('login-form').style.display = 'block'
            document.getElementById('signup-form').style.display = 'none'
        },
        signupForm() {
            router.push('/signup')
            document.getElementById('login-form').style.display = 'none'
            document.getElementById('signup-form').style.display = 'block'
        },
        isLoggedIn() {
            if (!this.currentUser) {
                document.getElementById('login-signup').style.display = 'block'
                document.getElementById('next-cycle').style.display = 'none'
            } else {
                document.getElementById('login-signup').style.display = 'none'
                document.getElementById('next-cycle').style.display = 'block'
            }
        },
        logOut() {
            this.currentUser = null
            this.isLoggedIn()
        }
    }
}
</script>