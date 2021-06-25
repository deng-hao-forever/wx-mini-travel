// pages/guanyuwe/GuanYuWe.js
Page({
  kefu:function(){
    wx.makePhoneCall({
      phoneNumber: '123456789' //仅为示例，并非真实的电话号码
    })
  }
})