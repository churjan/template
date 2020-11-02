import { postJson } from './base'
export function test(params) {
	return postJson('/mock/test', params)
}
