<template>
  <div>
    <el-form label-position="top">
      <el-form-item label="多选项">
        <multiple-select :list="list" v-model="type" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          label: '电脑',
          value: 1,
        },
        {
          label: '手机',
          value: 2,
        },
        {
          label: '平板',
          value: 3,
        },
      ],
      type: [1, 2],
    }
  },
  components: {
    MultipleSelect: () => import('./components/multiple-select.vue'),
  },
}
</script>

<style lang="scss" scoped></style>
