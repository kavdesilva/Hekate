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
        props: ['currentUser', 'users'],
        data: () => ({
            username: '',
            password: ''
        }),
        methods: {
            handleSubmit(e) {
                e.preventDefault()
                this.setCurrentUser(this.username)
                console.log(this.username)
                alert('form submitted')
                this.username = ''
                this.password = ''
            },
            handleFormChange(e) {
                this[e.target.name] = e.target.value
            },
            setCurrentUser(username) {
                this.$emit('currentUser')
            }
        }
    }
</script>

