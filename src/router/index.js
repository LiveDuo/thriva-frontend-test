import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Survey from '@/components/Survey/index.js'

import MinimalLayout from '@/layout/MinimalLayout'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  mode: 'hash',
  base: '/',
  routes: [
    {
      name: 'index',
      path: '/',
      component: Survey.views.Survey,
      meta: {
        layout: MinimalLayout,
        authenticated: false
      },
      children: [
        {
          name: 'name',
          path: 'name',
          component: Survey.connectors.Name,
          meta: {
            layout: MinimalLayout,
            authenticated: false,
            currentStep: 0
          }
        },
        {
          name: 'goals',
          path: 'goals',
          component: Survey.connectors.Goals,
          meta: {
            layout: MinimalLayout,
            authenticated: false,
            currentStep: 1
          }
        },
        {
          name: 'diet',
          path: 'diet',
          component: Survey.connectors.Diet,
          meta: {
            layout: MinimalLayout,
            authenticated: false,
            currentStep: 2
          }
        },
        {
          name: 'dob',
          path: 'dob',
          component: Survey.connectors.Dob,
          meta: {
            layout: MinimalLayout,
            authenticated: false,
            currentStep: 3
          }
        },
        {
          name: 'gender',
          path: 'gender',
          component: Survey.connectors.Gender,
          meta: {
            layout: MinimalLayout,
            authenticated: false,
            currentStep: 4
          }
        }
      ]
    }
  ],
  scrollBehavior (to, from) {
    return { x: 0, y: 0 }
  }
})

export default router
