// pages/foodinfo/foodinfo.js
const app = getApp()
var title = ''
var chapterId = 0
Page({
	data: {
		id: '',
		data: null,
		content: '',
		isShow: false
	},
	onLoad: function (options) {
		this.setData({
			id: options.id
		}, () => this.getDetail())

	},
	getDetail() {
		app.globalData.request({
			url: 'attentions/detail',
			data: {
				id: this.data.id
			},
			success: (res) => {
				this.setData({
					data: res.data.data
				})
			}
		})
	},
	postComment() {
		app.globalData.request({
			url: 'attentions/post',
			method: 'post',
			data: {
				id: this.data.id,
				content: this.data.content
			},
			success: res => {
				if (res.data.code == 200) {
					this.setData({
						content: ''
					})
					this.getDetail()
				}
			}
		})
	},
	change(e) {
		this.setData({
			content: e.detail.value
		})
	},
	focus(){
		this.setData({
			isShow: true 
		})
	},
	blur(){
		this.setData({
			isShow: false 
		})
	},
	like(e){
		console.log(e);
		let liked = e.target.dataset.like
		app.globalData.request({
			method: 'post',
			url: 'attentions/liked',
			data:{
				liked,
				id: this.data.id
			},
			success:(res )=>{
				if(res.data.code == 200){
					this.getDetail()
					
				}
			}
		})

	}
})