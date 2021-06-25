// pages/admin/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageNo: 1,
    total: 1,
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAllComments()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
this.setData({
  pageNo: 1
},()=> this.getAllComments())
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.setData({
      pageNo: this.data.pageNo + 1
    }, () => this.getAllComments())
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getAllComments() {
    getApp().globalData.request({
      url: 'comments/get',
      data: {
        pageNo: this.data.pageNo,
        pageSize: 15,
      },
      success: (res) => {
        if (this.data.pageNo === 1) {
          this.setData({
            list: res.data.data.list,
            total: res.data.data.totalPage
          })
        } else {
          this.setData({
            list: [...this.data.list, ...res.data.data.list],
            total: res.data.data.totalPage
          })
        }
      }
    })
  },
  deleteComment(e){
    console.log(e);
    let id = e.target.dataset.id
    let index = e.target.dataset.index
    getApp().globalData.request({
      method: 'delete',
      url: 'comments/delete',
      data:{
        id
      },
      success:(res)=>{
        if(res.data.code === 200){
          this.setData({
            pageNo: 1
          },()=>this.getAllComments())
        
        }
      }
    })
  }
})