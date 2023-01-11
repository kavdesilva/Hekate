<template>
    <div>
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
            async getAllRecords(){
                try {
                    this.records = await db.collection(`${this.currentUser.username}-records`).get()
                }
                catch(error) {
                    console.log('error: ', error)
                }
            },
            // getCurrentMonth() {
            //     let currentMonth = null
            //     this.records.map((record) => {
            //         // map records for each record with date matching current month/year
            // }

            // 9/19 - this page has the following two bugs: automatic creation of a collection in the local db; also counts collections rather than the records within. reformulation required.
        }
    }
</script>