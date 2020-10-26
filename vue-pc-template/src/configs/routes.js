export default [
  {
    path: '/',
    component: () => import('@/layout'),
    children: [
      { path: '', redirect: 'dashboard' },
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard'),
      },
      {
        path: 'form',
        component: () => import('@/views/form'),
      },
      {
        path: 'mock',
        component: () => import('@/views/mock'),
      },
    ],
  },
]
