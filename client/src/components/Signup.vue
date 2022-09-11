<template>
    <div id="signup-form">
        <p>sign up</p>
        <div className="form-container">
            <form v-on:submit="handleSubmit">
                <input
                    name="username"
                    type="text"
                    placeholder="username"
                    v-model="formData.username"
                    v-on:input="handleFormChange"/>
                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    v-model="formData.password"
                    v-on:input="handleFormChange"/>
                <input
                    name="email"
                    type="text"
                    placeholder="email address"
                    v-model="formData.email"
                    v-on:input="handleFormChange"/>
                <select
                    name="gender"
                    v-model="formData.gender"
                    v-on:change="handleFormChange">
                    <option disabled value="">select</option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="non-binary">non-binary</option>
                    <option value="other">other/prefer not to say</option>
                </select><br/>
                <button type="submit">submit</button>
            </form>
        </div><br/>
        <router-link to="/">close</router-link>
    </div>
</template>

<script>
import axios from 'axios'
import router from '@/router'
    export default {
        name: 'SignUp',
        data: () => ({
            formData: {
                username: '',
                password: '',
                email: '',
                gender: ''
            },
            newUser: null
        }),
        props: ['users', 'currentUser', 'userEmit'],
        methods: {
            handleSubmit(e) {
                e.preventDefault()
                alert('form submitted')
                this.createUser()
                this.emitNewUser()
                this.resetFormData()
                router.push('/')
            },
            handleFormChange(e) {
                this[e.target.name] = e.target.value
            },
            async createUser() {
                const res = await axios.post('http://localhost:3001/api/signup', this.formData)
                this.newUser = res.data
                console.log(this.newUser)
            },
            emitNewUser() {
                this.$emit('emitUserToRoot', this.newUser)
            },
            resetFormData() {
                this.username = ''
                this.password = ''
                this.email = ''
                this.gender = ''
            }
        }
    }
</script>