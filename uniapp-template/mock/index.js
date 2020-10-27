import Mock from '@/js_sdk/better-mock/mock.mp.js'

Mock.mock('api/test', {
	status:200,
	message:'success',
	'data|1-10': [{
		'id|+1': 1
	}]
})
