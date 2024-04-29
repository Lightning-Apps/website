import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/downloads",
      name: 'downloads',
      component: () => import('../views/downloads.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/news.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/faq.vue')
    },
    {
      path: '/apps',
      name: 'apps',
      component: () => import('../views/AppView.vue')
    },
    {
      path: '/roadhouse-finder',
      name: 'roadhousefinder',
      component: () => import('../views/RoadhouseFinder.vue')
    },
    {
      path: '/replay',
      name: 'replayapplemusic',
      component: () => import('../views/Replay.vue')
    },
    {
      path: '/university-wizard',
      name: 'universitywizard',
      component: () => import('../views/UniversityWizard.vue')
    },
    {
      path: '/trick-counting',
      name: 'trickcounting',
      component: () => import('../views/TrickCounting.vue')
    },
    {
      path: '/hlg-kaifu-app',
      name: 'hlgkaifu',
      component: () => import('../views/hlgkaifu.vue')
    }
  ]
})

export default router
