const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  },
  { path: '/', name: 'home', component: () => import('../views/Home') },
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') }
]
export default routes
