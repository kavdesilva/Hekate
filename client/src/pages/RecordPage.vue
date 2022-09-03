<template>
    <div>
        <p>this is the create record page.</p>
        <CurrentDate />
        <PreviousDate />
    </div>
</template>

<script>
import CurrentDate from '../components/CurrentDate.vue';
import PreviousDate from '../components/PreviousDate.vue';
    export default {
    name: "RecordPage",
    components: { CurrentDate, PreviousDate }
    }
</script>