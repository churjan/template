<template>
    <div>
        <div @click="fetchList">test</div>
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
