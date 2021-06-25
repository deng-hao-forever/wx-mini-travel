const app = getApp()
Page({
	data: {
		banners: [
			'../Image/banner1.jpg',
			'../Image/banner2.jpg',
			'../Image/banner3.jpg',
			'../Image/banner4.jpg',
			'../Image/banner5.jpg',
		],
		xindex: 0,
		footer: ' 网红景点',
		RepresentativeAttractions: [
		],
		pageNo: 1,
		total: 1,
		initShow: false
	},
	onReady: function() {
		this.getAttentions()
		this.getBaner()
	},
	onPullDownRefresh() {
		this.setData({
				pageNo: 1,
				total: 1
			}, () =>
			this.getAttentions()
		)
	},
	onShow(){
		
	},
	onHide(){
		
	},
	onReachBottom() {
		if (this.data.total === this.data.pageNo) return
		let pageNo = this.data.pageNo + 1
		this.setData({
			pageNo
		}, () => this.getAttentions())
	},
	getAttentions() {
		var appToken = app.globalData.UserToken || wx.getStorage('token') || ''
		app.globalData.request({
			url: 'attentions/get',
			data: {
				pageSize: 4,
				pageNo: this.data.pageNo,
				city: '孙中山故里',
			},
			header: {
				Token: appToken,
			},
			success: (res) => {
				this.setData({
					pageNo: +res.data.data.pageNo
				}, () => {
					if (+this.data.pageNo === 1) {
						this.setData({
							RepresentativeAttractions: res.data.data.list,
							total: res.data.data.totalPage
						})
					} else {
						this.setData({
							RepresentativeAttractions: [...this.data
								.RepresentativeAttractions,
								...res.data.data.list
							],
							total: res.data.data.totalPage
						})
					}
				})


			},
		})
	},
	getBaner() {
		app.globalData.request({
			url: 'attentions/banner',
			data: {
        count: 3,
        city: '孙中山故里',
			},
			success: (res) => {
				this.setData({
					banners: res.data.data.list
				})
			},
		})
	},
	onChange: function(e) {
		this.setData({
			xindex: e.detail.current,
		})
	},
	gotoyisaninfo: function() {
		wx.navigateTo({
			url: '../yisaninfo/yisaninfo',
		})
	},
	gotoyisfood: function() {
		wx.navigateTo({
			url: '../yisfood/yisfood',
		})
	},
	gotomap: function() {
		wx.navigateTo({
			url: '../map/map',
		})
	},
	gotoattractioninfo: function(e) {
		var id = e.currentTarget.dataset.id
		wx.navigateTo({
			url: `../attraction/Attractions?id=${id}`,
		})
	},
	tapAdd(){
		this.setData({
			initShow: !this.data.initShow
		})
	},
	goIntro(){
		wx.navigateTo({
			url: '../intro/index',
		})
	},
	goWay(){
		wx.navigateTo({
			url: '../way/index',
		})
	},
	catchtouchmove(){}
})
