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
                    <option value="nonbinary">non-binary</option>
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
    export default {
        name: 'SignUp',
        data: () => ({
            formData: {
                username: '',
                password: '',
                email: '',
                gender: ''
            },
            currentUser: null
        }),
        methods: {
            handleSubmit(e) {
                e.preventDefault()
                alert('form submitted')
                this.createUser()
                this.username = ''
                this.password = ''
                this.email = ''
                this.gender = ''
            },
            handleFormChange(e) {
                this[e.target.name] = e.target.value
            },
            async createUser() {
                const res = await axios.post('http://localhost:3001/api/signup', this.formData)
                this.currentUser = res.data
                console.log(this.currentUser)
            }
        }
    }
</script>