import axios from 'axios'
import qs from 'qs'
//默认type=1 application/x-www-form-urlencoded
export function post({ url = '', data = {}, type = 1 }) {
	let headers = {}
	if (type === 1) {
		data = qs.stringify(data)
		headers = {
			'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
		}
	} else if (type === 2) {
		data = qs.parse(data)
		headers = {
			'content-type': 'application/json;charset=UTF-8',
		}
	}
	return new Promise((resolve, reject) => {
		axios
			.post(url, data, {
				headers,
			})
			.then(res => {
				resolve(res)
			})
			.catch(error => {
				reject(error)
			})
	})
}
