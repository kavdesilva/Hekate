<template>
    <div>
        <p>this is the create record page.</p>
        <CurrentDate />
    </div>
</template>

<script>
import CurrentDate from '../components/CurrentDate.vue';
    export default {
        name: "RecordPage",
        components: { CurrentDate }
    }
</script>