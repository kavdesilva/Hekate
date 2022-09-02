<template>
    <div>
        <p>this is the homepage.</p>
    </div>
    <div id="login-signup">
        <button v-on:click="loginToggle">log in</button>
        <button v-on:click="signupToggle">sign up</button>
        <LogIn />
        <SignUp />
    </div>
    <div id="next-cycle">
        <NextCycle />
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
        loginToggle() {
            document.getElementById('login-form').style.display = 'block'
            document.getElementById('signup-form').style.display = 'none'
        },
        signupToggle() {
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
        }
    }
}
</script>