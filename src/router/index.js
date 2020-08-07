import Vue from 'vue'
import VueRouter from 'vue-router'
import Board from '../views/Board.vue'
import CreateCard from '../views/CreateCard.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Board',
    component: Board
  },
  {
    path: '/create',
    name: 'CreateCard',
    component: CreateCard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
