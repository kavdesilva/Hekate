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
                    id="passwordDigest"
                    type="text"
                    placeholder="password"/>
                <input
                    id="email"
                    type="text"
                    placeholder="email address"/>
                <select
                    id="gender"
                    v-model="selected"
                    placeholder="username">
                    <option disabled value="select">select</option>
                    <option>female</option>
                    <option>male</option>
                    <option>non-binary</option>
                    <option>prefer not to say</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
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
