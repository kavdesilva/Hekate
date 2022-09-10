<template>
    <div>
        <h1>recall.</h1>
        <p>this is the recall previous record page. calendar will go here.</p>
        <CalendarView />
    </div>
</template>

<script>
import CalendarView from '../components/CalendarView.vue';
    export default {
    name: "RecallPage",
    components: { CalendarView }
}
</script>