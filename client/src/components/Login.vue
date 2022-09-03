<template>
    <div id="login-form">
        <p>this is the login form.</p>
        <button v-on:click="closeForm">close</button>
    </div>
</template>

<script>
    export default {
        name: 'LogIn',
        props: ['loggedIn', 'isLoggedIn'],
        methods: {
            closeForm() {
                document.getElementById('login-form').style.display = 'none'
            }
        }
    }
</script>

