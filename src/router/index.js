import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import { useAuthStore } from "../stores/auth";

import middleware from "./middleware";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/AuthView.vue'),
            meta: {
                title: `Sign-In | ${import.meta.env.VITE_FE_TITLE}`,
            },
            beforeEnter: middleware.guest,
        },
        {
            path: '/',
            name: 'main',
            meta: {
                title: `Admin | ${import.meta.env.VITE_FE_TITLE}`,
            },
            component: MainView,
            // beforeEnter: middleware.user,
            children: [
              // Users Maintenance Route
              {
                path: '/home',
                name: 'home',
                component: () => import('../views/HomeView.vue'),
                meta: {
                  title: `Home | ${import.meta.env.VITE_FE_TITLE}`,
              },
              // beforeEnter: middleware.user,
              },
            ],
        }

    ]
});
router.beforeEach(async (to, from, next) => {
    document.title = `${to.meta.title}`;
    const token = sessionStorage.user ? JSON.parse(sessionStorage.user) : null;
    if (sessionStorage.authenticated && token) {
      const store = useAuthStore()
      const data = await store.isAuthenticated()
    } 
    next();
    
});

export default router
