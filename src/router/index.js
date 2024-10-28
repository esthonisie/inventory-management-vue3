import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/domains/inventory/views/HomeView.vue'

const routes = [
	{ 
    path: '/',
    name: 'home', 
    component: HomeView 
  },
  { 
    path: '/create',
    name: 'create', 
    component: () => import('@/domains/inventory/views/CreateView.vue') 
  },
  { 
    path: '/edit/:id',
    name: 'edit',
    component: () => import('@/domains/inventory/views/EditView.vue')
  },
  { 
    path: '/order',
    name: 'order',
    component: () => import('@/domains/inventory/views/OrderView.vue')
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router