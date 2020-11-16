const Mock = require('mockjs')

//支持分页的列表
const total = 21
const list = Array(total)
  .fill()
  .map(() => {
    return {
      image: Mock.Random.image('200x100', '#50B347', '#FFF', 'Mock.js'),
      title: Mock.Random.title(3),
      content: Mock.Random.sentence(),
    }
  })

Mock.mock('/mock/pageList', 'post', params => {
  const { pageSize, pageNum } = JSON.parse(params.body)
  const curList = list.slice((pageNum - 1) * pageSize, pageNum * pageSize)
  return {
    status: 200,
    message: 'success',
    data: curList,
    pageNum,
    pageSize,
    total,
  }
})
