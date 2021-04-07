export const modalController = {
    props: {
        // 对外暴露visible属性，⽤于显示隐藏弹框
        visible: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        // 通过计算属性，对.sync进⾏转换，外部也可以直接使⽤visible.sync
        visibleDialog: {
            get() {
                return this.visible
            },
            set(val) {
                this.$emit('update:visible', val)
            },
        },
    },
}
