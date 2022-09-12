<template>
    <div>
        <h1>record.</h1>
        <CurrentDate v-if="selectedDate"/>
        <PreviousDate v-else/>
    </div>
</template>

<script>
import CurrentDate from '../components/CurrentDate.vue';
import PreviousDate from '../components/PreviousDate.vue';
    export default {
    name: "RecordPage",
    components: { CurrentDate, PreviousDate },
    props: ['selectedDate'],

    }
</script>