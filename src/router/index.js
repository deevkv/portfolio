import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import Contacts from '@/components/Contacts'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/portfolio',
		name: 'portfolio',
		component: Portfolio
	},
	{
		path: '/about',
		name: 'about',
		component: About
	},
	{
		path: '/contacts',
		name: 'contacts',
		component: Contacts
	},
	{ path: '*', component: Home }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
