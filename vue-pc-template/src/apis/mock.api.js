import { postJson } from './base'
export function pageList(params) {
	return postJson('/mock/pageList', params)
}
