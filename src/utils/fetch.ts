// import { Toast } from '../components'
// const BASEHOST = 'http://musicapi.ignorantscholar.cn'
import { message } from 'antd'
const BASEHOST = 'http://blogserver.ignorantscholar.cn'
let fetchs = {
	/**
	  * 基于 fetch 封装的 GET请求
	  * @param url
	  * @param params {}
	  * @param headers
	  * @returns {Promise}
	  */
	get: (url: String, params?: any) => {
		console.log(params)
		if (params) {
			var paramsArray: Array<any> = [];
			Object.keys(params).forEach(function (key) {
				paramsArray.push(key + '=' + params[key])
			});
			if (url.search(/\?/) === -1) {
				url += '?' + paramsArray.join('&')
			} else {
				url += '&' + paramsArray.join('&')
			}
		}
		let fetchConfig: any = {
			method: 'get',
			headers: {
				authorization: window.sessionStorage.getItem('token') ? window.sessionStorage.getItem('token') : null,
				'Content-Type': 'application/json; charset=utf-8'
			},
			credentials: "include",
			mode: 'cors',
		}
		return fetch(BASEHOST + url, fetchConfig).then(response => {
			return response.json().then((res) => {
				if (response.ok && res.code === 200) {
					return Promise.resolve(res)
				} else {
					return Promise.reject(res)
				}
			})
		})
	},
	post: (url: String, options?: any) => {
		console.log(options)
		// let optionsString = ''
		// if (options) {
		// 	var optionsArray: Array<any> = [];
		// 	Object.keys(options).forEach(function (key) {
		// 		optionsArray.push(key + '=' + options[key])
		// 	});
		// 	optionsArray.forEach((res: any, index: number) => {
		// 		optionsString += res + `${index + 1 === optionsArray.length ? '' : '&'}`
		// 	})
		// 	console.log(optionsString, '5555555555555')
		// }
		return fetch(BASEHOST + url, {
			method: 'post',
			headers: {
				//  authorization: window.sessionStorage.getItem('token') ? window.sessionStorage.getItem('token') : null,
				 'Content-Type': 'application/json; charset=utf-8'
				// 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
				// "Content-Type": "application/x-www-form-urlencoded"
			},
			credentials: "include",
			mode: 'cors',
			body: JSON.stringify(options)
		}).then(response => {
			return response.json().then((res) => {
				if (response.ok && res.data.code === 200) {
					return Promise.resolve(res)
				} else {
					message.error(res.data.msg);
					console.log(res, '000000000')
					return Promise.reject(res)
				}
			})
		})
	}
}

export default fetchs