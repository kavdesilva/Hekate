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
            hideOffsetDates
            nowButtonLabel="today"
            :maxDate="new Date()"
            :enableTimePicker="false"
            :dayNames="['m', 'tu', 'w', 'th', 'f', 'sa', 'su']"
            :monthChangeOnScroll="false"
            menuClassName="dp-custom-menu">
        </DatePicker>
        <h3 v-if="date">selected date: {{ date.toDateString().toLowerCase() }}</h3>
        <button v-if="date">add record</button>
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
        border: 1px solid whitesmoke;
        border-radius: 4px;
    }
    .dp__month_year_select {
        font-size: 30px;
    }
    .dp__now_wrap {
        height: 75px;
    }
    .dp__now_button {
        font-size: 20px;
        color: whitesmoke;
        border-color: rgb(224, 223, 223);
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-weight: 500;
    }
    .dp__cell_disabled {
        color: rgb(97, 96, 96);
    }
    .dp-custom-menu {
        font-family: Georgia, 'Times New Roman', Times, serif;
        border: none;
    }
</style>