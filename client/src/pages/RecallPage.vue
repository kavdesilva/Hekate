<template>
    <div>
        <p>this is the recall previous record page. calendar will go here.</p>
        <CalendarView />
        <ViewDate />
    </div>
</template>

<script>
import CalendarView from '../components/CalendarView.vue';
import ViewDate from '../components/ViewDate.vue';
    export default {
    name: "RecallPage",
    components: { CalendarView, ViewDate }
}
</script>