import { get } from './base'
export function fetchYuQueUser(params) {
    return get('/yuque/users/churjan', {
        params,
        headers: {
            'X-Auth-Token': '8CF41n2mw8Xh4U0Q0TlPWQ6gFs8kJSbcrVgL8l8h',
            isShowToast: false,
        },
    })
}
