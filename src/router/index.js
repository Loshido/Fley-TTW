import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import("../views/Home.vue")
	},
	{
		path: "/locations",
		name: "locations",
		component: () => import("../views/Locations.vue")
	},
	{
		path: "/location/:location",
		name: "location",
		component: () => import("../views/Location.vue")
	},
	{
		path: "/items",
		name: "items",
		component: () => import("../views/Items.vue")
	},
	{
		path: "/item/:item",
		name: "item",
		component: () => import("../views/Item.vue")
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
