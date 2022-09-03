<template>
    <div id="signup-form">
        <p>this is the signup form.</p>
        <button v-on:click="closeForm">close</button>
    </div>
</template>

<script>
    export default {
        name: 'SignUp',
        methods: {
            closeForm() {
                document.getElementById('signup-form').style.display = 'none'
            }
        }
    }
</script>
