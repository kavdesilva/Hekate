<template>
    <div>
        <p>this is a detailed view of the selected day's record. there will be a button that directs you to add, update or delete the record of selected day.</p>
        <button v-on:click="createNewRecord">update record</button>
    </div>
</template>

<script>
import router from '@/router'
    export default {
        name: 'ViewDate',
        props: ['currentDate', 'selectedDate'],
        data: () => ({
            previousDate: null
        }),
        methods: {
            createNewRecord(){
                let selected = this.selectedDate.date.toISOString().slice(0, 10)
                if (this.currentDate != selected){
                    this.previousDate = selected
                    router.push(`/record/${this.previousDate}`)
                } else {
                    router.push(`/record/${this.currentDate}`)
                }
            }
        }
    }
</script>