
var app = getApp();
Page({

  data: {
      Image:"../Image/logo.jpg",
      UserName:"笑啥呢", 
      Personalizedsignature:"改变头像支持拍照或者相册选择",
      user: ''
  },
  onLoad(){
    this.getUser()
  },
  onReady:function(){
    var that = this;
    wx.getStorage({
      key: 'userInfo',
      success:function(res){
        console.log(res)
        that.setData({
          UserName:res.data.userNickName
        })
      }
    })
    this.setData({
      
    })
  },
  gotoinfo:()=>{
    if(app.globalData.UserState){
      wx.navigateTo({
        url: '../UserInfo/UserInfo',
      })
    }else{
      wx.redirectTo({
        url: '../userLogin/userLogin',
      })
    }
   
  },
  onShow:function(){
    if(app.globalData.UserState){
      this.setData({
        userName:app.globalData.userNickName,
        Image:app.globalData.userImage
      })
    }else{
      this.setData({
        userName:"未登录",
        Image:"../Image/logo.png"
      })
    }
    
  },
  gotobind:()=>{
    wx.navigateTo({
      url: '../userbindinfo/UserBindInfo',
    })
  },
  gotowe:()=>{
    if(app.globalData.UserState){
      wx.navigateTo({
        url: '../guanyuwe/GuanYuWe',
      })
    }else{
      wx.redirectTo({
        url: '../userLogin/userLogin',
      })
    }
  },
  updata:()=>{
    if(app.globalData.UserState){
      wx.navigateTo({
        url: '../upfile/updata',
      })
    }else{
      wx.redirectTo({
        url: '../userLogin/userLogin',
      })
    }
  },
  clearinfo:()=>{
    wx.setStorageSync('token','')
    wx.setStorageSync('userInfo','')
    wx.redirectTo({
      url: '../userLogin/userLogin',
    })
  },
  getUser(){
    app.globalData.request({
      url:'user/get',
      success:res => {
        this.setData({
          user: res.data.data.userInfo.userInfo
        })
      }
    })
  }
})