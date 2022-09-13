<template>
    <div>
        <p>this is a detailed view of the selected day's record. there will be a button that directs you to add, update or delete the record of selected day.</p>
        <button v-on:click="currentDateRecord">update record</button>
        <!-- <button v-on:click="previousDateRecord" v-else>update record</button> -->
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
            currentDateRecord(){
                router.push(`/record/${this.currentDate}`)
            },
            previousDateRecord(){
                router.push(`/record/${this.previousDate}`)
            }
        }
    }
</script>