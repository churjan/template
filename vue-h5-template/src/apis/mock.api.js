import { postJson, file } from './base'
export function test(data) {
	return postJson('/mock/test', data)
}
export function imgUpload(data) {
	return file('/mock/imgUpload', data, {
		headers: {
			isShowToast: false,
		},
	})
}
export function pageList(data) {
	return postJson('/mock/pageList', data)
}
