<template>
    <div>
        <div className="record-form-container">
            <h2 className="selected-date">{{selectedDate.toUTCString().slice(5, 16).toLowerCase()}}</h2>
            <form v-on:submit="handleFormSubmit">
                <!-- flow -->
                <p>flow:</p>
                <section className="flow">
                    <label for="light">
                        <input 
                        type="radio" 
                        name="light" 
                        value="light"
                        v-model="formData.flow"
                        v-on:change="handleFormChange"/>light</label>
                    <label for="medium">
                        <input 
                        type="radio" 
                        name="medium" 
                        value="medium" 
                        v-model="formData.flow"
                        v-on:change="handleFormChange"/>medium</label>
                    <label for="heavy">
                        <input 
                        type="radio" 
                        name="heavy" 
                        value="heavy" 
                        v-model="formData.flow"
                        v-on:change="handleFormChange"/>heavy</label>
                    <label for="spotting">
                        <input 
                        type="radio" 
                        name="spotting" 
                        value="spotting" 
                        v-model="formData.flow"
                        v-on:change="handleFormChange"/>spotting</label>
                </section>
                <!-- symptoms -->
                <p>symptoms:</p>
                <section className="symptoms">
                    <label for="cramps">
                        <input 
                        type="checkbox" 
                        name="cramps" 
                        value="cramps" 
                        v-model="formData.symptoms"
                        v-on:change="handleFormChange"/>cramps</label>
                    <label for="headache">
                        <input 
                        type="checkbox" 
                        name="headache" 
                        value="headache" 
                        v-model="formData.symptoms"
                        v-on:change="handleFormChange"/>headache</label>
                    <label for="fatigue">
                        <input 
                        type="checkbox" 
                        name="fatigue" 
                        value="fatigue" 
                        v-model="formData.symptoms"
                        v-on:change="handleFormChange"/>fatigue</label>
                    <label for="tenderness">
                        <input 
                        type="checkbox" 
                        name="tenderness" 
                        value="tenderness" 
                        v-model="formData.symptoms"
                        v-on:change="handleFormChange"/>tenderness</label>
                    <label for="bloated">
                        <input 
                        type="checkbox" 
                        name="bloated" 
                        value="bloated" 
                        v-model="formData.symptoms"
                        v-on:change="handleFormChange"/>bloated</label>
                </section>
                <!-- mood -->
                <p>mood:</p>
                <section>
                    <label for="happy">
                        <input 
                        type="radio" 
                        name="happy" 
                        value="happy" 
                        v-model="formData.mood"
                        v-on:change="handleFormChange"/>happy</label>
                    <label for="content">
                        <input 
                        type="radio" 
                        name="content" 
                        value="content" 
                        v-model="formData.mood"
                        v-on:change="handleFormChange"/>content</label>
                    <label for="sad"><input 
                        type="radio" 
                        name="sad" 
                        value="sad" 
                        v-model="formData.mood"
                        v-on:change="handleFormChange"/>sad</label>
                    <label for="frustrated">
                        <input 
                        type="radio" 
                        name="frustrated" 
                        value="frustrated" 
                        v-model="formData.mood"
                        v-on:change="handleFormChange"/>frustrated</label>
                </section><br/>
                <!-- notes -->
                <p>notes:</p>
                <section>
                    <textarea
                        name="notes"
                        placeholder="notes go here."
                        v-model="formData.notes"
                        v-on:input="handleFormChange"></textarea>
                </section>
                <button v-if="!recordExists" type="submit">add</button>
            </form>
            <button v-if="recordExists" v-on:click="updateRecord">update</button>
            <button v-on:click="deleteRecord">delete</button>
        </div>
    </div>
</template>

<script>
import Localbase from 'localbase'
let db = new Localbase('db')
    export default {
        name: 'PreviousDate',
        props: ['selectedDate', 'currentUser'],
        data: () => ({
            formData: {
                flow: '',
                symptoms: [],
                mood: '',
                notes: ''
            },
            recordExists: false
        }),
        mounted() {
            this.checkRecord()
        },
        methods: {
            handleFormChange(e) {
                this[e.target.name] = e.target.value
            },
            handleFormSubmit (e) {
                e.preventDefault()
                this.addRecord()
            },
            async checkRecord() {
                let record = await db.collection(`${this.currentUser.username}-records`).doc({ date: `${this.selectedDate.toISOString().slice(0, 10)}` }).get()
                if(record){
                    this.recordExists = true
                }
            },
            addRecord() {
                let newRecord = JSON.parse(JSON.stringify({
                    date: this.selectedDate.toISOString().slice(0, 10),
                    userId: this.currentUser.id,
                    flow: this.formData.flow,
                    symptoms: this.formData.symptoms,
                    mood: this.formData.mood,
                    notes: this.formData.notes
                }))
                db.collection(`${this.currentUser.username}-records`).add(newRecord)
                alert('record submitted')
            },
            updateRecord() {
                let recordUpdate = JSON.parse(JSON.stringify({
                    date: this.selectedDate.toISOString().slice(0, 10),
                    userId: this.currentUser.id,
                    flow: this.formData.flow,
                    symptoms: this.formData.symptoms,
                    mood: this.formData.mood,
                    notes: this.formData.notes
                }))
                if (
                    db.collection(`${this.currentUser.username}-records`).doc({ date: `${this.selectedDate.toISOString().slice(0, 10)}` }).get()
                ){
                    db.collection(`${this.currentUser.username}-records`).set(recordUpdate)
                }
            },
            deleteRecord() {
                if (confirm(`are you sure you want to delete record for ${this.selectedDate.toUTCString().slice(5, 16).toLowerCase()}?`)){
                    db.collection(`${this.currentUser.username}-records`).doc({ date: `${this.selectedDate.toISOString().slice(0, 10)}`}).delete()
                } else {
                    return
                }
            }
        }
    }
</script>