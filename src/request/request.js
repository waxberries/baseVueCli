import Vue from 'vue'
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import router from '../router/index.js'
// todo 测试地址：'http://ehome.hndianhui.com/'
const url = 'http://ehome.hndianhui.com/' || process.env.BASE_API;	//基础url

// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['Content-Type'] = 'application/json';
// axios.defaults.headers.common['Authorization'] = 'token';
// axios.defaults.headers.common['from-app'] = 'app';
axios.defaults.baseURL = url;
Vue.prototype.$axios = axios;

// 添加请求拦截器
//axios.interceptors.request.use(config => {
////axios.defaults.headers.common['Authorization'] = sessionStorage.getItem("token");
//
//return config;
//}, err => {
//return Promise.resolve(err);
//});

// //添加响应拦截器
// axios.interceptors.response.use(response => {
// 	return response
// },error => {
// 	// 对响应错误做点什么
// 	const { status } = error.response
// 	switch (status) {
// 		case 401:
// 			alert('错误码：' + status + '，' + error.response.data.message)
// 			// Message({
// 			// 	duration: 1000,
// 			// 	message: '错误码：' + status + '，' + error.response.data.message,
// 			// 	type: 'error'
// 			// })
// 			break
// 		case 422:
// 		case 404:
// 			alert('错误码：' + status + '，' + JSON.stringify(error.response.data.errors || error.response.data.message))
// 			// Message({
// 			// 	duration: 2000,
// 			// 	message: '错误码：' + status + '，' + JSON.stringify(error.response.data.errors || error.response.data.message),
// 			// 	type: 'error'
// 			// })
// 			break
// 		case 403:
// 			alert('错误码：' + status + '，' + error.response.data.message)
// 			// Message({
// 			// 	duration: 2000,
// 			// 	message: '错误码：' + status + '，' + error.response.data.message,
// 			// 	type: 'error',
// 			// 	onClose: action => {
// 			// 		// router.push({ name: 'Index' })
// 			// 		router.go(-1)
// 			// 	}
// 			// })
// 			break
// 		default:
// 			alert('错误码：' + status + '，服务器错误')
// 			// Message({
// 			// 	duration: 2000,
// 			// 	message: '错误码：' + status + '，服务器错误',
// 			// 	type: 'error'
// 			// })
// 	}
// 	return Promise.resolve(error);
// });
