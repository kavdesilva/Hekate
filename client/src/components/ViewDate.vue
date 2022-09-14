<template>
    <div>
        <p>this is a detailed view of the selected day's record. there will be a button that directs you to add, update or delete the record of selected day.</p>
        <button v-on:click="createNewRecord">add/update record</button>
    </div>
</template>

<script>
import router from '@/router'
    export default {
        name: 'ViewDate',
        props: ['currentDate', 'selectedDate'],
        data: () => ({
            previousDate: null,
            formValue: null
        }),
        methods: {
            createNewRecord(){
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