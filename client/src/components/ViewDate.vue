<template>
    <div>
        <button v-on:click="createRecord">go to record</button>
    </div>
</template>

<script>
import router from '@/router'
// import Localbase from 'localbase'
// let db = new Localbase('db')
    export default {
        name: 'ViewDate',
        props: ['currentDate', 'selectedDate', 'currentUser'],
        data: () => ({
            previousDate: null,
            formValue: null,
            selectedRecord: null
        }),
        methods: {
            createRecord(){
                let selected = this.selectedDate.date.toISOString().slice(0, 10)
                let current = this.currentDate.toISOString().slice(0, 10)
                if (current == selected){
                    router.push(`/record/${current}`)
                } else {
                    this.previousDate = selected
                    this.formValue = 1
                    this.$emit('showPreviousDateForm', this.formValue)
                    router.push(`/recall/${this.previousDate}`)
                }
            }
        }
    }
</script>