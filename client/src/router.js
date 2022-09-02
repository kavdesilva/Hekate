import { createWebHistory, createRouter } from "vue-router"
import HomePage from './pages/HomePage'
import CreateRecord from './pages/CreateRecord'

const routes = [
    {path: '/', component: HomePage, name: 'HomePage'},
    {path: '/record', component: CreateRecord, name: 'CreateRecord'}
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router
  