import { createRouter, createWebHistory } from 'vue-router'
import WorkExperience from '../views/WorkExperience.vue'
import SkillsView from '../views/SkillsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import('../views/MainViev.vue')
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: function () {
      return import('../views/Projects.vue')
    }
  },
  {
    path: '/work-experience',
    name: 'work-experience',
    component: WorkExperience
  }
  ,
  {
    path: '/skills',
    name: 'skills',
    component: SkillsView

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
