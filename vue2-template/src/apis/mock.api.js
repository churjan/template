import { postJSON } from './base'
export function test(data) {
    return postJSON('/mock/test', data)
}
