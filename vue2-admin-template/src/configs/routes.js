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
            {
                path: 'draggable',
                component: () => import('@/views/draggable'),
            },
            {
                path: 'html2canvas',
                component: () => import('@/views/html2canvas'),
            },
        ],
    },
]
