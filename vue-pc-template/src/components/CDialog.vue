<template>
  <el-dialog title="提示" :visible.sync="visibleDialog" width="30%">
    <slot></slot>
  </el-dialog>
</template>

<script>
export default {
  props: {
    // 对外暴露visible属性，⽤于显示隐藏弹框
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visibleDialog: false,
    }
  },
  watch: {
    visible: {
      handler() {
        setTimeout(() => {
          this.visibleDialog = this.visible
        }, 300)
      },
      immediate: true,
    },
    visibleDialog(val) {
      setTimeout(() => {
        this.$emit('update:visible', val)
      }, 300)
    },
  },
}
</script>

<style lang="scss" scoped></style>
