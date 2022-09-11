<template>
    <div>
        <p>update</p>
        <div className="form-container">
            <form v-on:submit="handleSubmit">
                <input
                    name="username"
                    type="text"
                    placeholder="username"
                    v-model="formData.username"
                    v-on:input="handleFormChange"/> 
                    :value="formData.username"
                <input
                    name="currentPassword"
                    type="currentPassword"
                    placeholder="currentPassword"
                    v-model="formData.currentPassword"
                    v-on:input="handleFormChange"/>
                <input
                    name="email"
                    type="text"
                    placeholder="email address"
                    v-model="formData.email"
                    v-on:input="handleFormChange"/>
                    :value="formData.email"
                <select
                    name="gender"
                    v-model="formData.gender"
                    v-on:change="handleFormChange">
                    value="formData.gender"
                    <option disabled value="">select</option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="non-binary">non-binary</option>
                    <option value="other">other/prefer not to say</option>
                </select><br/>
                <button type="submit">submit</button>
            </form>
        </div><br/>
        <router-link to="/">back to home</router-link>
    </div>
</template>

<script>
import axios from 'axios'
import router from '@/router'
    export default {
        name: 'UpdateAccount',
        data: () => ({
            formData: {
                username: this.currentUser.username,
                password: '',
                email: this.currentUser.email,
                gender: this.currentUser.gender
            },
            updatedUser: null
        }),
        props: ['users', 'currentUser'],
        methods: {
            handleSubmit(e) {
                e.preventDefault()
                alert('user updated')
                this.updateUser()
                router.push('/')
            },
            handleFormChange(e) {
                this[e.target.name] = e.target.value
            },
            async updateUser() {
                const res = await axios.put(`http://localhost:3001/api/users/${this.currentUser.id}`, this.formData)
                // if formData.password === this.currentUser.password, then >>
                this.updatedUser = res.data
                console.log(this.updatedUser)
                // else throw error, log out
            },
            emitUpdatedUser() {
                this.$emit('logUser', this.updatedUser)
            }
        }
    }
</script>