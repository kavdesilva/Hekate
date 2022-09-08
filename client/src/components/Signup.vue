<template>
    <div id="signup-form">
        <p>sign up</p>
        <div className="form-container">
            <form>
                <input
                    id="username"
                    type="text"
                    placeholder="username"/>
                <input
                    id="password"
                    type="text"
                    placeholder="password"/>
                <input
                    id="email"
                    type="text"
                    placeholder="email address"/>
                <select
                    id="gender"
                    v-model="select"
                    placeholder="username">
                    <option disabled>select</option>
                    <option>female</option>
                    <option>male</option>
                    <option>non-binary</option>
                    <option>prefer not to say</option>
                </select><br/>
                <button type="submit">submit</button>
            </form>
        </div><br/>
        <router-link to="/">close</router-link>
    </div>
</template>

<script>
    export default {
        name: 'SignUp',
        methods: {

        }
    }
</script>