<template>
    <div id="login-form">
        <p>login</p>
        <div className="form-container">
            <form>
                <input
                    id="username"
                    type="text"
                    placeholder="username"
                />
                <input
                    id="passwordDigest"
                    type="text"
                    placeholder="password"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
        <button v-on:click="closeForm">close</button>
    </div>
</template>

<script>
import router from '@/router';

    export default {
        name: 'LogIn',
        props: ['loggedIn', 'isLoggedIn'],
        methods: {
            closeForm() {
                router.push('/')
                document.getElementById('login-form').style.display = 'none'
            }
        }
    }
</script>

