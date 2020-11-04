import { postJson, file } from './base'
export function test(params) {
	return postJson('/mock/test', params)
}
export function imgUpload(params) {
	return file('/mock/imgUpload', params, {
		headers: {
			isShowToast: false,
		},
	})
}
export function pageList(params) {
	return postJson('/mock/pageList', params)
}
