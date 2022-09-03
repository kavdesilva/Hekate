import { createWebHistory, createRouter } from "vue-router"
import HomePage from './pages/HomePage'
import RecordPage from './pages/RecordPage'
import RecallPage from './pages/RecallPage'
import ReflectPage from './pages/ReflectPage'
import DeletePage from './pages/DeletePage'

const routes = [
    {path: '/', component: HomePage, name: 'HomePage'},
    {path: '/record', component: RecordPage, name: 'RecordPage'},
    {path: '/recall', component: RecallPage, name: 'RecallPage'},
    {path: '/reflect', component: ReflectPage, name: 'ReflectPage'},
    {path: '/delete', component: DeletePage, name: 'DeletePage'}
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router
  