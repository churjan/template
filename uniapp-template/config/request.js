import Request from '@/js_sdk/luch-request'
import {
	baseURL
} from '@/config/env'
const getTokenStorage = () => {
	let token = ''
	try {
		token = uni.getStorageSync('token')
	} catch (e) {}
	return token
}

const http = new Request()
http.setConfig((config) => {
	config.baseURL = baseURL
	return config
})

http.interceptors.request.use(config => {
	config.header = {
		...config.header,
		token: getTokenStorage()
	}
	return config
})
http.interceptors.response.use(response => {
	const {
		status = 0,
			message = '',
	} = response.data
	const {
		isShowToast = true
	} = response.config.header
	if (!isShowToast) {
		return response.data
	}
	if (status !== 200) {
		uni.showToast({
			title: message
		})
		return Promise.reject(message)
	}
	return response.data
}, (response) => {
	console.log(response)
	uni.showToast({
		title: '接口报错'
	})
	return Promise.reject(response)
})

export default http
