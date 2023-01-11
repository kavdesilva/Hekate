<template>
    <div>
        <CurrentDate :currentDate="currentDate" :currentUser="currentUser"/>
        <!-- <PreviousDate /> -->
    </div>
</template>

<script>
import CurrentDate from '../components/CurrentDate.vue';
// import PreviousDate from '../components/PreviousDate.vue';
    export default {
        name: "RecordPage",
        components: { CurrentDate },
        props: ['currentDate', 'selectedDate', 'currentUser']
    }
</script>