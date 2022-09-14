<template>
    <div>
        <div className="record-form-container">
            <h2>current date: {{currentDate.toDateString().toLowerCase()}}</h2>
            <form v-on:submit="handleFormSubmit">
                <!-- flow -->
                <section className="flow">
                    <p>flow:</p>
                    <input 
                        type="radio" 
                        name="light" 
                        value="light"
                        v-model="formData.flow"
                        v-on:change="handleFormChange"/>
                    <label for="light">light</label>
                    <input 
                        type="radio" 
                        name="medium" 
                        value="medium" 
                        v-model="formData.flow"
                        v-on:change="handleFormChange"/>
                    <label for="medium">medium</label>
                    <input 
                        type="radio" 
                        name="heavy" 
                        value="heavy" 
                        v-model="formData.flow"
                        v-on:change="handleFormChange"/>
                    <label for="heavy">heavy</label>
                    <input 
                        type="radio" 
                        name="spotting" 
                        value="spotting" 
                        v-model="formData.flow"
                        v-on:change="handleFormChange"/>
                    <label for="spotting">spotting</label>
                </section>
                <!-- symptoms -->
                <section className="symptoms">
                    <p>symptoms:</p>
                    <input 
                        type="checkbox" 
                        name="cramps" 
                        value="cramps" 
                        v-model="formData.symptoms"
                        v-on:change="handleFormChange"/>
                    <label for="cramps">cramps</label>
                    <input 
                        type="checkbox" 
                        name="headache" 
                        value="headache" 
                        v-model="formData.symptoms"
                        v-on:change="handleFormChange"/>
                    <label for="headache">headache</label>
                    <input 
                        type="checkbox" 
                        name="fatigue" 
                        value="fatigue" 
                        v-model="formData.symptoms"
                        v-on:change="handleFormChange"/>
                    <label for="fatigue">fatigue</label>
                    <input 
                        type="checkbox" 
                        name="tenderness" 
                        value="tenderness" 
                        v-model="formData.symptoms"
                        v-on:change="handleFormChange"/>
                    <label for="tenderness">tenderness</label>
                    <input 
                        type="checkbox" 
                        name="bloated" 
                        value="bloated" 
                        v-model="formData.symptoms"
                        v-on:change="handleFormChange"/>
                    <label for="bloated">bloated</label>
                </section>
                <!-- mood -->
                <section>
                    <p>mood:</p>
                    <input 
                        type="radio" 
                        name="happy" 
                        value="happy" 
                        v-model="formData.mood"
                        v-on:change="handleFormChange"/>
                    <label for="happy">happy</label>
                    <input 
                        type="radio" 
                        name="content" 
                        value="content" 
                        v-model="formData.mood"
                        v-on:change="handleFormChange"/>
                    <label for="content">content</label>
                    <input 
                        type="radio" 
                        name="sad" 
                        value="sad" 
                        v-model="formData.mood"
                        v-on:change="handleFormChange"/>
                    <label for="sad">sad</label>
                    <input 
                        type="radio" 
                        name="frustrated" 
                        value="frustrated" 
                        v-model="formData.mood"
                        v-on:change="handleFormChange"/>
                    <label for="frustrated">frustrated</label>
                </section><br/>
                <!-- notes -->
                <section>
                    <p>notes:</p>
                    <textarea
                        name="notes"
                        placeholder="notes go here."
                        v-model="formData.notes"
                        v-on:input="handleFormChange"></textarea>
                </section>
                <button type="submit">submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import Localbase from 'localbase'
let db = new Localbase('db')
    export default {
        name: 'CurrentDate',
        props: ['currentDate', 'currentUser'],
        data: () => ({
            formData: {
                flow: '',
                symptoms: [],
                mood: '',
                notes: ''
            },
            records: []
        }),
        methods: {
            handleFormChange(e) {
                this[e.target.name] = e.target.value
            },
            handleFormSubmit (e) {
                e.preventDefault()
                this.addRecord()
            },
            addRecord() {
                let newRecord = {
                    id: this.currentDate.toISOString().slice(0, 10),
                    userId: this.currentUser.id,
                    flow: this.formData.flow,
                    symptoms: this.formData.symptoms,
                    mood: this.formData.mood,
                    notes: this.formData.notes
                }
                this.records.push(newRecord)
                console.log(newRecord)
                db.collection('records').add(newRecord)
                alert('record submitted')
            }
        }
    }
</script>