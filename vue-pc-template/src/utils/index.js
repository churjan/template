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
    // 防抖
    debounce(fn, delay = 300) {
        return function(...args) {
            clearTimeout(fn.id)
            fn.id = setTimeout(() => {
                fn.apply(this, args)
            }, delay)
        }
    },
    // 节流
    throttle(fn, interval) {
        return function(...args) {
            if (!fn.id) {
                fn.id = setTimeout(() => {
                    fn.apply(this, args)
                    fn.id = null
                }, interval)
            }
        }
    },
}

Vue.prototype.$util = util
export default util
