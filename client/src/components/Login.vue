<template>
    <div id="login-form">
        <p>login</p>
        <div className="form-container">
            <form v-on:submit="handleSubmit">
                <input
                    name="email"
                    type="text"
                    placeholder="email"
                    v-model="formData.email"
                    v-on:input="handleFormChange"/>
                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    v-model="formData.password"
                    v-on:input="handleFormChange"/>
                <button type="submit">submit</button>
            </form>
        </div><br/>
        <span><router-link to="/">close</router-link></span>
    </div>
</template>

<script>
import router from '@/router'
import axios from 'axios'
    export default {
        name: 'LogIn',
        data: () => ({
            formData: {
                email: '',
                password: ''
            },
            loggedUser: null
        }),
        props: ['users', 'userEmit'],
        methods: {
            handleSubmit(e) {
                e.preventDefault()
                this.getUser()
            },
            handleFormChange(e) {
                this[e.target.name] = e.target.value
            },
            async getUser() {
                const res = await axios.post('http://localhost:3001/api/login', this.formData)
                this.loggedUser = this.users?.filter((user) => user.id === res.data.user.id)
                this.$emit('emitUserToRoot', this.loggedUser[0])
                this.resetFormData()
                router.push('/')
            },
            resetFormData() {
                this.email = ''
                this.password = ''
            }
        }
    }
</script>

