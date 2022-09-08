<template>
    <div id="login-form">
        <p>login</p>
        <div className="form-container">
            <form v-on:submit="handleSubmit">
                <input
                    name="username"
                    type="text"
                    placeholder="username"
                    :value="username"
                    v-on:input="handleFormChange"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    :value="password"
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
        props: ['currentUser'],
        data: () => ({
            username: '',
            password: ''
        }),
        methods: {
            handleSubmit(e) {
                e.preventDefault()
                alert('form submitted')
                this.setCurrentUser(this.username)
                console.log(this.username)
                this.username = ''
                this.password = ''
            },
            handleFormChange(e) {
                this[e.target.name] = e.target.value
            },
            setCurrentUser() {
                this.$emit('currentUser', 'username')
            }
        }
    }
</script>

