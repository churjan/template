<template>
  <view>lifecycle</view>
</template>

<script>
export default {
  onLoad: function (options) {
    console.log('B onLoad');
  },
  onShow: function () {
    console.log('B onShow');
  },
  onReady: function () {
    console.log('B onReady');
  },
  onHide: function () {
    console.log('B onHide');
  },
  onUnload: function () {
    console.log('B onUnload');
  },
};
</script>
