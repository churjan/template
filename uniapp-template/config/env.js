
const platform = process.env.VUE_APP_PLATFORM

// APP-PLUS	App
// APP-PLUS-NVUE	App nvue
// H5	H5
// MP-WEIXIN	微信小程序
// MP-ALIPAY	支付宝小程序
// MP-BAIDU	百度小程序
// MP-TOUTIAO	字节跳动小程序
// MP-QQ	QQ小程序
// MP-360	360小程序
// MP	微信小程序/支付宝小程序/百度小程序/字节跳动小程序/QQ小程序/360小程序
// QUICKAPP-WEBVIEW	快应用通用(包含联盟、华为)
// QUICKAPP-WEBVIEW-UNION	快应用联盟
// QUICKAPP-WEBVIEW-HUAWEI	快应用华为

const baseURL = ''
export {
	platform,
	baseURL
}
