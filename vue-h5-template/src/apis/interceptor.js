import axios from 'axios'
import { Toast } from 'vant'
axios.interceptors.response.use(
	response => {
		const { status, message } = response.data
		if ([200].includes(status)) {
			return response.data
		} else {
			Toast.fail(message)
			return Promise.reject(message)
		}
	},
	error => {
		Toast.fail(error.toString())
		return Promise.reject(error)
	}
)

export default axios
