import { createWebHistory, createRouter } from "vue-router"
import HomePage from './pages/HomePage'
import RecordPage from './pages/RecordPage'
import RecallPage from './pages/RecallPage'
import ReflectPage from './pages/ReflectPage'
import DeleteAccount from './components/DeleteAccount'
import UpdateAccount from './components/UpdateAccount'
import SignUp from './components/SignUp.vue'
import LogIn from './components/LogIn.vue'
import CurrentDate from './components/CurrentDate'
// import PreviousDate from './components/PreviousDate'

const routes = [
    {path: '/', component: HomePage, name: 'HomePage', 
      children: [
        {path: '/login', component: LogIn, name: 'LogIn'},
        {path: '/signup', component: SignUp, name: 'SignUp'}
      ]},
    {path: '/record', component: RecordPage, name: 'RecordPage',
      children: [
        {path: '/record/:date', component: CurrentDate, name: 'CurrentDate'},
        // {path: '/record/:date', component: PreviousDate, name: 'PreviousDate'}
      ]},
    {path: '/recall', component: RecallPage, name: 'RecallPage'},
    {path: '/reflect', component: ReflectPage, name: 'ReflectPage'},
    {path: '/delete', component: DeleteAccount, name: 'DeleteAccount'},
    {path: '/update', component: UpdateAccount, name: 'UpdateAccount'}
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router
  