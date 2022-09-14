<template>
    <div>
        <h1>reflect.</h1>
        <p>number of cycles recorded: {{records.length}}</p>
    </div>
</template>

<script>
import Localbase from 'localbase'
let db = new Localbase('db')
    export default {
        name: 'ReflectPage',
        props: ['currentUser'],
        data: () => ({
            records: []
        }),
        mounted() {
            this.getAllRecords()
        },
        methods: {
            getAllRecords(){
                this.records.push(db.collection(`${this.currentUser.username}-records`).get())
            }
        }
    }
</script>