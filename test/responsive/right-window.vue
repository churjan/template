<template>
	<view><newDetail ref="detailPage"></newDetail></view>
</template>

<script>
import App from './App.vue';

const host = 'https://unidemo.dcloud.net.cn/';

// #ifndef VUE3
import Vue from 'vue';
Vue.config.productionTip = false;
Vue.prototype.$host = host;
App.mpType = 'app';
const app = new Vue({
	...App,
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue';
export function createApp() {
	const app = createSSRApp(App);
	return {
		app,
	};
}
// #endif

import newDetail from '../pages/news/detail.nvue';
export default {
	components: {
		newDetail,
	},
	data() {
		return {
			title: 'Hello',
		};
	},
	created(e) {
		//监听自定义事件，该事件由详情页列表的点击触发
		uni.$on('updateDetail', e => {
			// 执行 /pages/news/detail.nvue页面的load方法
			this.$refs.detailPage.load(e.detail);
		});
	},
};
</script>

<style></style>
