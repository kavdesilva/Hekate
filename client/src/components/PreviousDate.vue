<template>
    <div>
        <h2>previous date:</h2>
        <div className="record-form-container">
            <form>
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
                    <label for="notes">notes:</label><br/>
                    <textarea
                        name="notes"
                        v-model="formData.notes"
                        v-on:input="handleFormChange"></textarea>
                </section>

            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PreviousDate',
        data: () => ({
            formData: {
                flow: '',
                symptoms: [],
                mood: '',
                notes: ''
            }
        }),
        methods: {
            handleFormChange(e) {
                this[e.target.name] = e.target.value
            },
            handleFormSubmit (e) {
                e.preventDefault()
            }
        }
    }
</script>