const Mock = require('mockjs')

// 格式： Mock.mock( url, 'post'|'get' , 返回的数据)
Mock.mock('/mock/test', 'post', require('./data/test.json'))

//图片上传
Mock.mock('/mock/imgUpload', 'post', () => {
  return {
    ...Mock.mock({
      'res|1': [
        {
          status: 200,
          message: '上传成功',
        },
        {
          status: 500,
          message: '上传失败',
        },
      ],
    }).res,
  }
})
//分页接口
import './rolling-load'
