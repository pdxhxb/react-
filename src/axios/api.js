import axios from 'axios'
import decrypt from './crypto.js'
const instance = axios.create({
  baseURL: '/prod/mock/',
  timeout: 900000,
});

instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});


instance.interceptors.response.use(function (response) {
  if (response.status === 200) {
    let crypto = decrypt(response.data)
    return crypto.data;
  } else {
    return Promise.reject("数据获取失败")
  }
}, function (error) {

  return Promise.reject(error);
});
export default instance