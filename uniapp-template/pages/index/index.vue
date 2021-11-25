<template>
  <view class="content">
    <button @click="onJump">跳转</button>
  </view>
</template>

<script>
export default {
  methods: {
    onJump() {
      uni.navigateTo({
        url: '/pages/lifecycle/lifecycle',
      });
    },
  },
  onLoad: function (options) {
    console.log('A onLoad');
  },
  onShow: function () {
    console.log('A onShow');
  },
  onReady: function () {
    console.log('A onReady');
  },
  onHide: function () {
    console.log('A onHide');
  },
  onUnload: function () {
    console.log('A onUnload');
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
