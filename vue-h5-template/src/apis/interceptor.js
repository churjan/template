import axios from 'axios'
import { Toast } from 'vant'
axios.interceptors.response.use(
	response => {
		const { status, message } = response.data
		if (status !== 200) {
			Toast.fail(message)
			return Promise.reject(message)
		} else {
			return response.data
		}
	},
	error => {
		Toast.fail(error.toString())
		return Promise.reject(error)
	}
)

export default axios
