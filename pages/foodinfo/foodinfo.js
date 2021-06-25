// pages/foodinfo/foodinfo.js
const app = getApp()
var title = ''
var chapterId = 0
Page({
  data: {
    id: '',
    title: '',
    image: '',
    info: '',
    comments: [],
    error: '',
    comment: {}
  },
  onLoad: function (options) {
    var that = this;
    var that = this;
    var getUrl = app.appUrl + '/Food/getOneById';
    var getCurl = app.appUrl + '/Comment/getChapterComment';
    var appToken = app.globalData.UserToken;
    const eventChannel = this.getOpenerEventChannel()

    eventChannel.on('id', function (params) {
      console.log(params)
      var id1 = params.data
      chapterId = id1
      wx.request({
        url: getUrl,
        header: {
          Token: appToken
        },
        data: {
          id: id1
        },
        success: function (res) {
          console.log(res)
          title = res.data.title
          that.setData({
            id: res.data.id,
            title: res.data.title,
            image: res.data.imageUrl,
            info: res.data.info
          })
        }
      })
      wx.request({
        url: getCurl,
        header: {
          Token: appToken
        },
        data: {
          chapterId: id1
        },
        success: function (res) {
          console.log(res)
          that.setData({
            comments: res.data
          })
        }
      })
    })
  },
  commentNumber: function () {
    console.log("您点击了commentNumber");
  },
  sendpull: function (e) {
    console.log(e);
    var that = this;
    var getUrl = app.appUrl + '/Comment/insertAComnnent';
    var appToken = app.globalData.UserToken;
    var userName = '';
    var date = new Date();
    var datetime = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
    wx.getStorage({
      key: 'userInfo',
      success(res) {
        console.log(res)
        userName = res.data.userNickName;
        wx.request({
          url: getUrl,
          method: "POST",
          header: {
            Token: appToken
          },
          data: {
            "UserNickName": userName,
            "UserImage": app.globalData.userImage,
            "UserCommentContext": e.detail.content,
            "UserCommentTime": datetime,
            "ChapterID": chapterId,
          },
          success: function (res) {
            if (res.data == false) {
              that.setData({
                error: '你的评论包含敏感词，评论失败'
              })
            } else {
              that.setData({
                comment: {
                  userNickName: userName,
                  userImage: app.globalData.userImage,
                  userCommentConetxt: e.detail.content,
                  userCommentTime: datetime
                }
              })
              // if(wx.getStorage("comments") == null){
              //   const comments = []
              //   const comment = {

              //   }

              //   wx.setStorage(comments)
              // }

            }
          },
          fail: function () {
            console.log("评论失败")
          }
        })
      }
    })

  },
  collectClick: function () {
    wx.request({
      url: 'www.baidu.com',
      success: function () {
        console.log();
      },
      fail: function () {
        console.log("点赞失败");
      }
    })
  }
})