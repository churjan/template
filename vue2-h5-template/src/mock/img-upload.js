const Mock = require('mockjs')

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
