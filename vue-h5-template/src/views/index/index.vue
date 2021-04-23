<template>
    <div>
        <van-button type="primary" @click="fetchList">vant按钮</van-button>
    </div>
</template>
<script>
export default {
    methods: {
        fetchList() {
            this.$apis.mock.test().then((res) => {
                console.log(res)
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
