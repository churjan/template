export default [
	{
		path: '/',
		component: () => import('@/views/index'),
	},
	{
		path: '/mock',
		component: () => import('@/views/mock'),
	},
]
