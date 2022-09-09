<template>
    <div>
        <p>this is the calendar.</p>
        <DatePicker 
            v-model="date" 
            inline
            dark
            autoApply 
            id="calendar" 
            monthNameFormat="long" 
            showNowButton 
            nowButtonLabel="today"
            :maxDate="new Date()"
            :enableTimePicker="false"
            calendarClassName="">
        </DatePicker>
        <h3 v-if="date">selected date: {{ date.toDateString().toLowerCase() }}</h3>
        <button v-if="date" >add record</button>
    </div>
</template>

<script>
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss';
    export default {
        name: 'CalendarView',
        components: { DatePicker },
        data() {
            return {
                date: null,
            };
        }
    }
</script>

<style>
    #calendar {
        margin: 0 auto;
        width: min-content;
        padding-bottom: 20px;
        text-transform: lowercase;
    }
    .dp__month_year_select {
        font-size: 30px;
    }
    .dp__now_wrap {
        margin-bottom: 20px;
    }
    .dp__now_button {
        font-size: 20px;
        padding: 5px 10px;
    }
    .dp__cell_disabled {
        color: rgb(97, 96, 96);
    }
</style>