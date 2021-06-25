export const request = (config1) => {
	config1.method && (config1.method = config1.method.toUpperCase())
	wx.showLoading({
		title: '加载中',
	})
	const token =  wx.getStorageSync('token')
	console.log(token);
	let config = {
		method: 'GET',
		baseUrl: 'http://localhost:3099/',
		// baseUrl: 'http://192.168.2.123:3099/',
		url: '',
		header: {
			token:  (!!token && token) || ''
		},
		data: {},
		complete(res) {
			if(res.data.code !== 200){
				wx.showToast({
					title: res.data.msg,
					icon: 'error',
					mask: true
				})
			}
			wx.hideLoading()
		},
		fail: (err)=>{
			wx.showToast({
				title: '系统错误',
				icon: 'error',
				mask: true
			})
		}
	}
	config = {
		...config,
		...config1,
		url: config.baseUrl + config1.url
	}
	wx.request(config)
}
