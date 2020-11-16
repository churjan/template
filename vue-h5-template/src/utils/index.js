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
}

Vue.prototype.$util = util
export default util
