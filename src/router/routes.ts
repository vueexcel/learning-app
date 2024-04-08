import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
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
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('pages/ForgotPassword.vue')
  },
  {
    path: '/all-lesson',
    name: 'all-lesson',
    component: () => import('pages/AllLessonPage.vue')
  },
  {
    path: '/lesson',
    name: 'lesson',
    component: () => import('pages/LessonPage.vue')
  },
  {
    path: '/level',
    name: 'level',
    component: () => import('pages/LevelPage.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('pages/SettingPage.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
