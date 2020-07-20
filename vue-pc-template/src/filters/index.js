import Vue from 'vue'
const rules = {
	phone: [
		{ required: true, message: '手机号码格式不对', trigger: 'blur' },
		{
			validator: (rule, value, callback) => {
				if (value !== '' && !/^1\d{10}$/.test(value)) {
					callback(new Error('手机号码格式不对'))
				} else {
					callback()
				}
			},
			trigger: 'blur',
		},
	],
}
Vue.prototype.$rules = rules
