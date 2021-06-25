Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  properties: {
    cnNuberm:{
      type:Number,
      value:0
    },
    maxlength: {
      type: Number,
      value: 150,
    },

    placeholder: {
      type: String,
      value: '请输入'
    },

    isCollect: {//是否已收藏
      type: Number,
      value: false
    },

    showCollect: {//是否显示收藏
      type: Boolean,
      value: true
    },
    show: {
      type: Array,
      value: [],
      observer: function (newVal, oldVal) {
        console.log(newVal),
        this.setData({
          comments:newVal
        })
      }
   },
   newComment: {
    type: Object,
    value: {},
    observer: function (newVal, oldVal) {
      console.log(newVal);
      this.setData({
        comments:this.data.comments.push(newVal)
      })
    }
 }
  },

  //

  data: {
    sendComment: true,
    replay: true,
    content: '',//评论内容
    activty: false,
    commentsIsshow:false,
    comments:[{
      userNickName:"大傻逼",
      userImage:"../../Image/info1.jpg",
      userCommentConetxt:"这是一条评论",
      userCommentTime:"2019-2-1"
    }]
  },



  methods: {

    commentClick: function (e) {
      this.setData({
        sendComment: false,
      });
    },
    changReplayinfo: function (e) {
      if (this.data.replay) {
        this.setData({
          replay: false,
        })
      } else {
        this.setData({
          replay: false,
        })
      }

    },
    bindTextAreaBlur: function (e) {
      this.setData({
        sendComment: true,
      });
    },
    bindTextAreaFocus:function(){
        
    },
    bindinput: function (e) {
      this.setData({
        content: e.detail.value,
        activity: e.detail.cursor > 0 ? true : false
      })
    },
    //发送评论
    sendPull: function (e) {
      console.log(this.data.content)
      this.triggerEvent("sendPull", { content: this.data.content, obj: this });
      this.clearContent();
    },
    resendPull: function (e) {
      this.triggerEvent("resendPull", { content: this.data.content, oldID: this.oldId, obj: this });
      this.data.replay = true;
      this.clearContent();
    },
    //清空内容
    clearContent: function (e) {
      this.setData({
        content: '',
      })

    },
    //评论按钮
    commentNuber: function (e) {
      this.triggerEvent("commentNumber");
      this.setData({
        commentsIsshow:!this.data.commentsIsshow
      });
      wx.request({
        url: 'www.baidu.com',
        success:function(){
          console.log("请求成功");

        },fail:function(){
          console.log("请求失败");
        }
      })
    },
    //分享
    shareClick: function (e) {
      this.triggerEvent("shareClick");
    },

    //收藏

    collect: function (e) {
      this.triggerEvent("collectClick");
      console.log("点击了赞");
    },

    //是否收藏，亮灯

    isCollect: function (e) {
      this.setData({
        isCollect: !this.data.isCollect,
      })

    },
    longtap: function () {
      console.log("打印了组件的长按事件");
      this.triggerEvent("longtap");
      this.data.sendComment = false;
    }
  }

});
