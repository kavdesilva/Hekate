<template>
    <div>
        <h1>reflect.</h1>
        <p>cycles recorded to date: {{records.length}}</p>
    </div>
</template>

<script>
import Localbase from 'localbase'
let db = new Localbase('db')
    export default {
        name: 'ReflectPage',
        props: ['currentUser'],
        data: () => ({
            records: [],
            recordsThisMonth: []
        }),
        mounted() {
            this.getAllRecords()
        },
        methods: {
            getAllRecords(){
                this.records.push(db.collection(`${this.currentUser.username}-records`).get())
            },
            // getCurrentMonth() {
            //     let currentMonth = null
            //     this.records.map((record) => {
            //         // map records for each record with date matching current month/year
            // }
        }
    }
</script>