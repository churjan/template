<template>
  <div class="el-select-wrap" @mouseenter="mouseEnter = true" @mouseleave="mouseEnter = false">
    <el-select
      multiple
      collapse-tags
      :value="vals"
      @change="onChange"
      @visible-change="onChangeListStatus"
      clearable
      v-bind="$attrs"
    >
      <el-option v-for="(item, index) in list" :key="index" :label="item[label]" :value="item[value]"></el-option>
    </el-select>
    <div class="custom-select" v-show="!listVisible && mouseEnter && selList.length > 1">
      <div class="el-select set-height">
        <span v-for="(item, index) in selList" :key="index">
          <span class="el-tag el-tag--info el-tag--mini el-tag--light">
            <span class="el-select__tags-text">{{ item[label] }}</span>
            <i class="el-tag__close el-icon-close" @click="deleteItem(index)"></i>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mouseEnter: false,
      listVisible: false,
    }
  },
  model: {
    prop: 'vals',
    event: 'change',
  },
  props: {
    vals: {
      type: Array,
      require: true,
    },
    list: {
      type: Array,
      require: true,
    },
    label: {
      type: String,
      default: 'label',
    },
    value: {
      type: String,
      default: 'value',
    },
  },
  computed: {
    selList() {
      return this.list.reduce((acc, prev) => {
        if (this.vals.includes(prev[this.value])) {
          return [...acc, prev]
        }
        return [...acc]
      }, [])
    },
  },
  methods: {
    onChangeListStatus(bool) {
      this.listVisible = bool
    },
    deleteItem(idx) {
      //禁止状态，不能删除
      if (this.$attrs.disabled) return
      let vals = this.vals.slice(0)
      vals.splice(idx, 1)
      this.$emit('change', vals)
    },
    onChange(val) {
      this.$emit('change', val)
    },
  },
}
</script>

<style lang="scss">
.el-select-wrap {
  position: relative;
  display: inline-block;
}
.custom-select {
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 0;
  right: 0;
  padding-top: 6px;
  .el-select {
    width: 100%;
    padding: 5px 0;
    background-color: #ffffff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  .set-height {
    max-height: 180px;
    overflow: auto;
  }
}
</style>
