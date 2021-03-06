import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import TimelinePage from '@/components/TimelinePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: TimelinePage
    }
  ]
})
