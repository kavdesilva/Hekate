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
        methods: {
            deleteRecord() {}, // delete client-side data
            async deleteAccount() {
                confirm(`are you sure you want to delete ${this.currentUser}'s account? this action is irreversible.`) // if yes, >>
                await axios.delete(`http://localhost:3001/api/users/${this.currentUser.id}`, this.currentUser)
                alert(`account deleted.`)
                router.push('/')
                // else, >> reload page
            }
        }
    }
</script>