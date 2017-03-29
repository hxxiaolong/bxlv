/**
 * Created by Administrator on 2017/3/28.
 */
import axios from "axios";
import qs from "qs";

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = '/api';

axios.interceptors.request.use((config) => {
  if(config.method  === 'post'){
    config.data = qs.stringify(config.data);
  }
  return config;
},(error) =>{
  // _.toast("错误的传参", 'fail');
  return Promise.reject(error);
});

axios.interceptors.response.use((res) =>{
  if(res.status !==200){
    return Promise.reject(res);
  }
  return res;
}, (error) => {
  return Promise.reject(error);
});

export function fetchPost(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export function fetchGet(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(res => {
      resolve(res.data);
    }).catch(err => {
      console.log(err);
    });
  })
}

export default {
  getSeller() {
    return fetchGet('/seller');
  }
}
