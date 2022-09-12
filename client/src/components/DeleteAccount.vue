<template>
    <div>
        <p>delete</p>
        <button v-on:click="deleteRecord">delete records</button><br />
        <button v-on:click="deleteAccount">delete account</button><br />
        <router-link to="/">back to home</router-link>
    </div>
</template>

<script>
import axios from 'axios';
import router from '@/router'
    export default {
        name: 'DeleteAccount',
        props: ['users', 'currentUser'],
        data: () => ({
            deletedUser: null
        }),
        methods: {
            deleteRecord() {}, // delete client-side data
            async deleteAccount() {
                if (confirm(`are you sure you want to delete ${this.currentUser.username}'s account? this action is irreversible.`) == true) {
                    await axios.delete(`http://localhost:3001/api/users/${this.currentUser.id}`, this.currentUser)
                    alert(`account deleted.`)
                    this.$emit('logUser', this.deletedUser)
                    router.push('/')
                } else {
                    router.push('/delete')
                }
            }
        }
    }
</script>