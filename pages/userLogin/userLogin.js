// pages/userLogin/userLogin.js
var app = getApp();
Page({
  data: {
    showOneButtonDialog: false,
    oneButton: [{
      text: '确定'
    }],
    content: 1
  },

  login: function (e) {
    console.log(e);
    var loginUrl = app.appUrl + '/login/createUser'
    wx.login({
      //设置超时，防止等待过久
      timeout: 1500,
      success: function (login) {
        wx.getUserInfo({
          withCredentials: true,
          success: res => {
            if (login.code) {
              wx.request({
                url: loginUrl,
                method: "POST",
                data: {
                  phone: '',
                  psw: '',
                  code: login.code,
                  userInfo: res
                },
                success: (re) => {
                  wx.setStorageSync('token', re.data.data.token)
                  wx.setStorageSync('userInfo', re.data.data.userInfo)
                  wx.reLaunch({
                    url: '../index/index',
                  })
                },
                fail: function () {
                  console.log("登录失败");
                  wx.showToast({
                    title: '登录失败',
                    icon: 'error',
                    duration: 1000
                  })
                  wx.reLaunch({
                    url: '../index/index',
                  })
                }
              })
            } else {
              console.log("获取用户的登录态失败！" + res.errMsg);
            }
          }
        })

      },
      fail: function () {
        wx.showToast({
          title: '微信自动登录失败请使用账号登录！',
          icon: 'none',
          duration: 1000
        })
        console.log("微信自动登录失败请重新登录！");
      },
      complete: function () {
        console.log("调用了wx.login()");
      }
    })
  },
  changeContent: function () {
    if (this.data.content == 1) {
      this.setData({
        content: 2
      })
    } else {
      this.setData({
        content: 1
      })
    }

  },
  /**
   * 获取账号
   */
  userNameInput: function (e) {
    this.setData({
      userAccount: e.detail.value
    })
  },
  /**
   * 获取密码
   */
  userPasswordInput: function (e) {
    this.setData({
      userPassword: e.detail.value
    })
  },
  /**
   * 登录事件
   */
  loginBtnClick() {
    console.log("用户名：" + this.data.userAccount + " 密码：" + this.data.userPassword);
    app.globalData.request({
      url: 'login/createUser',
      data: {
        "psw": this.data.userAccount,
        "phone": this.data.userPassword
      },
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      /**
       * 登陆成功
       */
      success:  (res)=> {
        wx.setStorageSync('token', res.data.data.token)
        wx.setStorageSync('userInfo', res.data.data.userInfo)
        wx.reLaunch({
          url: '../admin/index',
        })

      }
    })

  },

})