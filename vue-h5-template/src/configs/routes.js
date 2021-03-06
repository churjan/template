export default [
  {
    path: '/',
    component: () => import('@/views/index/index'),
  },
  {
    path: '/demos',
    component: { template: '<router-view />' },
    children: [
      { path: '', redirect: 'form' },
      {
        path: 'form',
        component: () => import('@/views/demos/form'),
      },
      {
        path: 'rolling-load',
        component: () => import('@/views/demos/rolling-load'),
      },
    ],
  },
]
