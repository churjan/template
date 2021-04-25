import { postJSON, file } from './base'
export function test(data) {
    return postJSON('/mock/test', data)
}
export function imgUpload(data) {
    return file('/mock/imgUpload', data, {
        headers: {
            isShowToast: false,
        },
    })
}
export function pageList(data) {
    return postJSON('/mock/pageList', data)
}
