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
        <h3 v-if="date">selected date:</h3>
        <h2 v-if="date"  id="selected-date">{{ date.toDateString().toLowerCase() }}</h2>
        <ViewDate v-if="date" :selectedDate="selectedDate"/>
    </div>
</template>

<script>
import router from '@/router'
import ViewDate from '../components/ViewDate.vue'
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss';
    export default {
        name: 'CalendarView',
        components: { DatePicker, ViewDate },
        props: ['selectedDate'],
        data() {
            return {
                date: null,
            }
        },
        methods: {
            viewDate(){
                router.push('/view-date')
            },
            emitSelectedDate(){
                if(this.date){
                    this.$emit('selectDate', this.date)
                }
            }
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
        font-weight: 600;
    }
    .dp__cell_disabled {
        color: rgb(97, 96, 96);
    }
    .dp-custom-menu {
        font-family: Georgia, 'Times New Roman', Times, serif;
        border: none;
    }
    .select-input {
        margin: 5px 3px;
        padding: 5px;
        width: auto;
        border-radius: 4px;
        border-color: var(--dp-border-color);
        outline: none;
    }
    .dp__button_bottom {
        height: 50px;
        background-color: black;
    }
    .dp__button_bottom:hover {
        background-color: black;
        filter: brightness(70%);
    }
    #selected-date {
        color: darkred;
    }
    .dp__icon:hover {
        stroke: darkred;
        fill: darkred;
    }
    .dp__inner_nav:hover {
        background-color: black;
    }
</style>