<template>
  <div>
    <multiple-select :list="list" v-model="type"> </multiple-select>
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
      type: '',
    }
  },
  components: {
    MultipleSelect: () => import('./components/multiple-select.vue'),
  },
}
</script>

<style lang="scss" scoped></style>
