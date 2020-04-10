import axios from 'axios'
import { Message } from 'element-ui'
axios.interceptors.response.use(
	response => {
		const { status, message } = response.data
		if ([200].includes(status)) {
			return response.data
		} else {
			Message.error(message)
			return Promise.reject(message)
		}
	},
	error => {
		Message.error(error.toString())
		return Promise.reject(error)
	}
)

export default axios
