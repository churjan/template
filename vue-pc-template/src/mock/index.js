const Mock = require('mockjs')

// 格式： Mock.mock( url, 'post'|'get' , 返回的数据)
Mock.mock('/mock/test', 'post', require('./data/test.json'))
