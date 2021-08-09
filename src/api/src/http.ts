
import axios from "axios";

import { createLocalStorage } from "./cache";

const state: any = createLocalStorage({
  token: {
    type: 'cookie',
    default: ''
  }
})

axios.defaults.baseURL = 'http://yunxioa.com:82';
axios.defaults.headers.common['Authorization'] = state.token;
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log(response.data.errcode)
  if (response.data.errcode !== 0) {
    console.log("请求失败拉！", response.data)
  }
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
export const http = axios;

