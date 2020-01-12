const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home'),
    children: [
      { path: '', component: () => import('../views/Hello') },
      { path: 'hello', component: () => import('../views/Hello') }
    ]
  },
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') }
]
export default routes
