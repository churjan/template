import axios from 'axios'
import { Message } from 'element-ui'
axios.interceptors.response.use(
	response => {
		const { status, message } = response.data
		//默认status不为200时，全局会弹toast错误提示
		const { isShowToast } = response.config
		if (status !== 200 && isShowToast) {
			Message.error(message)
			return Promise.reject(message)
		} else {
			return response.data
		}
	},
	error => {
		Message.error(error.toString())
		return Promise.reject(error)
	}
)

export default axios
