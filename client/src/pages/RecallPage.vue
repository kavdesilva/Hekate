<template>
    <div>
        <CalendarView :currentUser="currentUser" :currentDate="currentDate"/>
    </div>
</template>

<script>
import CalendarView from '../components/CalendarView.vue';
    export default {
    name: "RecallPage",
    components: { CalendarView },
    props: ['currentUser','currentDate'],
    data: () => ({
        
    })
}
</script>