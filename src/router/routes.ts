import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'courses',
    component: () => import('pages/IndexPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('pages/RegisterPage.vue')
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: () => import('pages/ForgotPassword.vue')
  },
  {
    path: '/reset/:token',
    name: 'reset',
    component: () => import('pages/ResetPassword.vue')
  },
  {
    path: '/category/:id',
    name: 'category',
    component: () => import('pages/AllLessonPage.vue')
  },
  {
    path: '/course/:id/lesson',
    name: 'lesson',
    component: () => import('pages/LessonPage.vue')
  },
  {
    path: '/course/:id',
    name: 'course',
    component: () => import('pages/LevelPage.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('pages/SettingPage.vue')
  },
  {
    path:'/course/:id/rules',
    name:'rules',
    component: () => import('pages/RulesPage.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
