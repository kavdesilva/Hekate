<!-- <template>
    <div>
        <p>update</p>
        <div className="form-container">
            <form v-on:submit="handleSubmit">
                <input
                    name="username"
                    type="text"
                    :value="formData.username"
                    v-on:input="handleFormChange"/> 
                <input
                    name="password"
                    type="password"
                    v-model="formData.password"
                    v-on:input="handleFormChange"/>
                <input
                    name="email"
                    type="text"
                    placeholder="email address"
                    :value="formData.email"
                    v-on:input="handleFormChange"/>
                <select
                    name="gender"
                    :value="formData.gender"
                    v-on:change="handleFormChange">
                    <option disabled value="">select</option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="non-binary">non-binary</option>
                    <option value="other">other/prefer not to say</option>
                </select><br/>
                <button type="submit">submit</button>
            </form>
        </div><br/>
        <router-link to="/">back to home</router-link>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'UpdateAccount',
        props: ['users', 'currentUser'],
        data: () => ({
            formData: {
                username: this.currentUser.username,
                password: '',
                email: this.currentUser.email,
                gender: this.currentUser.gender
            },
            updatedUser: null
        }),
        methods: {
            handleSubmit(e) {
                e.preventDefault()
                alert('user updated')
                this.updateUser()
            },
            handleFormChange(e) {
                this[e.target.name] = e.target.value
            },
            async updateUser() {
                const res = await axios.put(`http://localhost:3001/api/users/${this.$props.currentUser.id}`, this.formData)
                // if formData.password === this.currentUser.password, then >>
                this.updatedUser = res.data
                console.log(this.updatedUser)
                this.$emit('logUser', this.updatedUser)
            },
            whoIsCurrentUser() {
                console.log(this.currentUser)
            }
        }
    }
</script> -->