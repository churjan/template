const Mock = require('mockjs')

// 格式： Mock.mock( url, 'post'|'get' , 返回的数据)
Mock.mock('/mock/test', 'post', {
    status: 200,
    message: 'success',
    data: {
        'list|20': [
            {
                goodsClass: '女装',
                'goodsId|+1': 1,
                goodsName: '@ctitle(10)',
                goodsAddress: '@county(true)',
                'goodsStar|1-5': '★',
                goodsImg: "@Image('100x100','@color','小甜甜')",
                'goodsSale|30-500': 30,
            },
        ],
    },
})
