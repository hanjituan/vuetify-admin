/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

// static routes
const staticRoutes = [
	{
		path: '/',
		redirect: '/login',
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/layouts/login.vue'),
	}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	extendRoutes: setupLayouts,
})

staticRoutes.forEach(route => {
	router.addRoute(route)
})

console.log(router.getRoutes());


export default router
