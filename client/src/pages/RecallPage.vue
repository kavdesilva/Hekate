<template>
    <div>
        <p>this is the recall previous record page. calendar will go here.</p>
        <CalendarView />
        <PastDate />
    </div>
</template>

<script>
import CalendarView from '../components/CalendarView.vue';
import PastDate from '../components/PastDate.vue';
    export default {
    name: "RecallPage",
    components: { CalendarView, PastDate }
}
</script>