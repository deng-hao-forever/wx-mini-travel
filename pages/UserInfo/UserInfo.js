// pages/UserInfo/UserInfo.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    user: ''
  },
  onLoad(){
    this.getUser()
  },
  userHeightChange:function(){
    this.setData({
      userHeightChange:!this.data.userHeightChange
    })
  },
  submitResult:function(re){
    app.globalData.userHeight = re.detail.value;
    console.log(app.globalData)
    this.setData({
      userHeight:re.detail.value
    })
    //提交数据到服务器
    // wx.request({
    //   url: '',
    // })
  },
  userWeightChange:function(){
    this.setData({
      userWeightChange:!this.data.userWeightChange
    })
  },
  submituserWeightChangeResult:function(re){
    app.globalData.userWeight = re.detail.value;
    this.setData({
      userWeight:re.detail.value
    })
    //提交数据到服务器
    // wx.request({
    //   url: '',
    // })
  },
  userNickNameChange:function(){
    this.setData({
      userNickNameChange:!this.data.userNickNameChange
    })
  },
  submituserNickNameChangeResult:function(re){
    app.globalData.userNickName = re.detail.value;
    this.setData({
      userNickName:re.detail.value
    })
    //提交数据到服务器
    // wx.request({
    //   url: '',
    // })
  },
  UserPhoneChange:function(){
    this.setData({
      UserPhoneChange:!this.data.UserPhoneChange
    })
  },
  submitUserPhoneChangeResult:function(re){
    app.globalData.UserPhone = re.detail.value;
    this.setData({
      UserPhone:re.detail.value
    })
    //提交数据到服务器
    // wx.request({
    //   url: '',
    // })
  },
  userAgeChange:function(){
    this.setData({
      userAgeChange:!this.data.userAgeChange
    })
  },
  submituserAgeChangeResult:function(re){
    
    app.globalData.userAge = re.detail.value;
    this.setData({
      userAge:re.detail.value
    })
    //提交数据到服务器
    // wx.request({
    //   url: '',
    // })
  },
  chooseImage:function(){
    wx.chooseImage({
      /**
       * count:可以选择的最大照片数量
       */
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (result) => {
        const tempFilePaths = result.tempFilePaths
        app.globalData.userImage = tempFilePaths[0];
        console.log(app.globalData);
        this.setData({
          image:tempFilePaths[0]
        })
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  },
  onReady:function(){
    this.setData({
      image:app.globalData.userImage,
      userNickName:app.globalData.userNickName,
      UserPhone:app.globalData.UserPhone,
      userHeight:app.globalData.userHeight,
      userWeight:app.globalData.userWeight,
      userAge:app.globalData.userAge,
    })
  },
  getUser(){
    app.globalData.request({
      url:'user/get',
      success:res => {
        console.log(res);
      }
    })
  }
})