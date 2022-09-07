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
                <button type="submit">submit</button>
            </form>
        </div><br/>
        <router-link to="/">close</router-link>
    </div>
</template>

<script>
    export default {
        name: 'LogIn',
        props: ['loggedIn', 'isLoggedIn'],
        methods: {

        }
    }
</script>

