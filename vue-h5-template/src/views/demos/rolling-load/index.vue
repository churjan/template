<template>
    <div>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
                :error.sync="error"
                error-text="请求失败，点击重新加载"
            >
                <h1 v-for="(item, index) in list" :key="index">{{ index + 1 }}.{{ item.content }}</h1>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            // 下拉/上拉 状态
            loading: false,
            finished: false,
            error: false,
            refreshing: false,
            // 分页
            pageNum: 1,
            pageSize: 10,
            total: 0,
        }
    },
    methods: {
        onLoad() {
            // 异步更新数据
            const params = {
                pageNum: this.pageNum,
                pageSize: this.pageSize,
            }
            this.$apis.mock
                .pageList(params)
                .then(({ data, pageSize, pageNum, total }) => {
                    setTimeout(() => {
                        if (pageSize * pageNum > total) {
                            this.finished = true
                        } else {
                            this.loading = false
                            this.pageNum++
                            this.total = total
                            this.list = [...this.list, ...data]
                        }
                    }, 300)
                })
                .catch(() => {
                    this.error = true
                    this.loading = false
                })
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data())
            this.onLoad()
        },
    },
}
</script>

<style lang="scss" scoped></style>
