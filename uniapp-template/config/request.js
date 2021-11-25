import Request from '@/utils/luch-request/index.js';
import { baseURL } from '@/config/env';
const getTokenStorage = () => {
  let token = '';
  try {
    token = uni.getStorageSync('token');
  } catch (e) {}
  return token;
};

const http = new Request();
http.setConfig((config) => {
  config.baseURL = baseURL;
  return config;
});

http.interceptors.request.use((config) => {
  config.header = {
    ...config.header,
    token: getTokenStorage(),
  };
  return config;
});
http.interceptors.response.use(
  (response) => {
    const { status = 0, message = '' } = response.data;
    const { isShowToast = true } = response.config;
    if (!isShowToast) {
      return response.data;
    }
    if (status !== 200) {
      uni.showToast({
        title: message,
      });
      return Promise.reject(message);
    }
    return response.data;
  },
  (error) => {
    console.log(error);
    uni.showToast({
      title: '接口报错',
    });
    return Promise.reject(error);
  }
);

export default http;
