// app.js
import {request} from './server/index.js'
App({
  onLaunch() {
    // 展示本地存储能力
    const token = wx.getStorageSync('token')
    if (token) {
      wx.reLaunch({
        url: '/pages/index/index',
      })
    }
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  globalData: {
    userInfo: null,
    UserState: false,
    userAccount: '',
    userNickName: '',
    UserToken: '',
    userImage: 'http://192.168.253.4:8080/banner1.jpg',
	request
  },
  appUrl: 'http://localhost:3099',
})
