export default [
  {
    path: '/',
    component: () => import('@/views'),
    children: [
      { path: '', redirect: 'dashboard' },
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard'),
      },
    ],
  },
]
