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
        component: { template: '<router-view />' },
        children: [
          { path: '', redirect: 'multiple-select' },
          {
            path: 'multiple-select',
            component: () => import('@/views/form/multiple-select'),
          },
        ],
      },
    ],
  },
]
