import { createWebHistory, createRouter } from "vue-router"
import HomePage from './pages/HomePage'
import RecordPage from './pages/RecordPage'
import RecallPage from './pages/RecallPage'
import ReflectPage from './pages/ReflectPage'
import DeleteAccount from './components/DeleteAccount'
import UpdateAccount from './components/UpdateAccount'
import SignUp from './components/SignUp.vue'
import LogIn from './components/LogIn.vue'
import ViewDate from './components/ViewDate'

const routes = [
    {path: '/', component: HomePage, name: 'HomePage', 
      children: [
        {path: '/login', component: LogIn, name: 'LogIn'},
        {path: '/signup', component: SignUp, name: 'SignUp'}
      ]},
    {path: '/record', component: RecordPage, name: 'RecordPage'},
    {path: '/recall', component: RecallPage, name: 'RecallPage'},
    {path: '/reflect', component: ReflectPage, name: 'ReflectPage'},
    {path: '/delete', component: DeleteAccount, name: 'DeleteAccount'},
    {path: '/update', component: UpdateAccount, name: 'UpdateAccount'},
    {path: '/view-date', component: ViewDate, name: 'ViewDate'}
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router
  