import Vue from 'vue'
const util = {
	//删除对象中字段的值为空字符串，null,undefined的字段
	deleteNullValue(obj) {
		const newObj = {}
		for (let key of Object.keys(obj)) {
			if (!['', null, undefined].includes(obj[key])) {
				newObj[key] = obj[key]
			}
		}
		return newObj
	},

	//获取当前地址栏上的参数并转化为对象
	getURLParams() {
		const search = window.location.search
		const q = {}
		search.replace(/([^?=&]+)=([^&]+)/g, (_, k, v) => {
			console.log(_, k, v)
			q[k] = v
		})
		return q
	},
}

Vue.prototype.$util = util
export default util
