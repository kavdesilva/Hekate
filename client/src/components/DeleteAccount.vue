<template>
    <div>
        <p>delete</p>
        <button v-on:click="deleteAllRecords">delete all records</button><br />
        <button v-on:click="deleteAccount">delete account</button><br />
        <router-link to="/">back to home</router-link>
    </div>
</template>

<script>
import axios from 'axios';
import router from '@/router'
import Localbase from 'localbase'
let db = new Localbase('db')
    export default {
        name: 'DeleteAccount',
        props: ['users', 'currentUser'],
        data: () => ({
            deletedUser: null
        }),
        methods: {
            deleteAllRecords() {
                db.collection(`${this.currentUser.username}-records`).delete()
            }, 
            async deleteAccount() {
                if (confirm(`are you sure you want to delete ${this.currentUser.username}'s account? this action is irreversible.`) == true) {
                    await axios.delete(`http://localhost:3001/api/users/${this.currentUser.id}`, this.currentUser)
                    this.deleteAllRecords()
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