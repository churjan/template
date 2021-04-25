import axios from 'axios'

axios.interceptors.response.use(
    (response) => {
        const { status = 0, message = '' } = response.data
        //默认status不为200时，全局会弹toast错误提示
        const { isShowToast = true } = response.config.headers
        if (!isShowToast) {
            return response.data
        }
        if ([200].includes(status)) {
            return response.data
        } else {
            alert(message)
            return Promise.reject(message)
        }
    },
    (error) => {
        alert(error.toString())
        return Promise.reject(error)
    }
)

export default axios