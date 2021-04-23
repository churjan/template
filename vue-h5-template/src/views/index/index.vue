<template>
    <div>
        <van-button type="primary" @click="fetchYuQueUser">获取我的语雀用户信息</van-button>
    </div>
</template>

<script>
export default {
    methods: {
        fetchYuQueUser() {
            this.$apis.demo.fetchYuQueUser().then((res) => {
                console.log(res)
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
