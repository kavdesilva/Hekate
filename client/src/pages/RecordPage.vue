<template>
    <div>
        <h1>record.</h1>
        <CurrentDate v-if="!selectedDate" :currentDate="currentDate" @addRecord="addRecord"/>
        <PreviousDate v-else/>
    </div>
</template>

<script>
import CurrentDate from '../components/CurrentDate.vue';
import PreviousDate from '../components/PreviousDate.vue';
import Localbase from 'localbase'
let db = new Localbase('db')

    export default {
        name: "RecordPage",
        components: { CurrentDate, PreviousDate },
        props: ['currentDate', 'selectedDate', 'currentUser'],
        data() {
            return {
                newRecord: {},
                records: []
            }
        },
        mounted() {
            this.todaysDate()
        },
        methods: {
            todaysDate() {
                console.log(this.currentDate)
            },
            addRecord(date, userId, flow, symptoms, mood, notes) {
                let newRecord = {
                    id: date,
                    userId: userId,
                    flow: flow,
                    symptoms: symptoms,
                    mood: mood,
                    notes: notes
                }
                db.collection('records').add(newRecord)
            }
        }
    }
</script>