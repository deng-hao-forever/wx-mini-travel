// pages/SmartTour/SmartTour.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{
      title:"歪头崮",
      immageUrl:"../Image/banner2.jpg",
      info:"歪头崮崮身侧倾，突兀险绝，三面皆下临深壑，唯有花枝台一侧可以攀登。一路有天然石佛、八戒石、风动石、天柱石等奇石景观，救苦观音、“人世蓬莱”、“夫沂山”摩崖石刻、碧霞祠、福神庙、长春亭等人文景观，其中碧霞祠是泰山老母碧霞元君的行宫。另外在歪头崮上还分布着江北最大的野生鹅耳枥种群。"
     },
     isshow:false,
    longitud: 118.71065,
    latitude: 36.2027,
    markers: [{
      iconPath: "../Image/red.png",
      id: 0,
      title: "天下第一镇山",
      latitude: 36.20268736812238,
      longitude: 118.71067213534889,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 1,
      title: "人世蓬莱",
      latitude: 36.20223697524002,
      longitude: 118.70755131067797,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 2,
      title: "东镇湖",
      latitude: 36.199297592057846,
      longitude: 118.69924140537978,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 3,
      title: "东镇碑林",
      latitude: 36.19734454423183,
      longitude: 118.67174556747,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 4,
      title: "东镇庙",
      latitude: 36.19768769923731,
      longitude: 118.67011006705809,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 5,
      title: "影壁",
      latitude: 36.202334227791055,
      longitude: 118.70631264814745,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 6,
      title: "百丈瀑布石刻",
      latitude: 36.19102101996399,
      longitude: 118.64818268858119,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 7,
      title: "包体遗迹",
      latitude: 36.192726747165935,
      longitude: 118.64733705859851,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 8,
      title: "海岳石刻",
      latitude: 36.19363503957377,
      longitude: 118.64731909806121,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 9,
      title: "中字石刻",
      latitude: 36.19461755738483,
      longitude: 118.64617547024909,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 10,
      title: "吕祖洞",
      latitude: 36.19513823591256,
      longitude: 118.64478874485849,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 11,
      title: "仙客亭",
      latitude: 36.19601826299642,
      longitude: 118.64568738452294,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 12,
      title: "百丈崖瀑布",
      latitude: 36.19341632096126,
      longitude: 118.6431439459792,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 13,
      title: "日月石",
      latitude: 36.19712414400013,
      longitude: 118.64039012892704,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 14,
      title: "试剑石",
      latitude: 36.199476623212645,
      longitude: 118.63873116312592,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 15,
      title: "法云寺",
      latitude: 36.19806768701195,
      longitude: 118.6339673758066,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 16,
      title: "仙话窟檐",
      latitude: 36.19692450364018,
      longitude: 118.6248318001242,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 17,
      title: "齐天大圣石",

      latitude: 36.19539923340443,
      longitude: 118.62534726850834,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 18,
      title: "狮子崮",
      latitude: 36.203427479473326,
      longitude: 118.62052436167596,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 19,
      title: "歪头崮",
      latitude: 36.201482737155374,
      longitude: 118.61557124979868,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 20,
      title: "救苦观音",
      latitude: 36.203711913804,
      longitude: 118.61495136581243,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 21,
      title: "长春亭",
      latitude: 36.20424405230676,
      longitude: 118.61535226905175,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 22,
      title: "扁崮",
      latitude: 36.20628813455659,
      longitude: 118.62295161490226,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 23,
      title: "翠云澜",
      latitude: 36.191258851065565,
      longitude: 118.62662961861281,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 24,
      title: "天阙",
      latitude: 36.194129972082744,
      longitude: 118.62683313776677,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 25,
      title: "南天门",
      latitude: 36.19176126881044,
      longitude: 118.62827262870564,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 26,
      title: "峡谷栈道",
      latitude: 36.18927098852937,
      longitude: 118.62766319057937,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 27,
      title: "龙涎泉",
      latitude: 36.18736566331135,
      longitude: 118.62744434321166,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 28,
      title: "三清岩",
      latitude: 36.1866443621094,
      longitude: 118.62812912381839,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 29,
      title: "高山湿地",
      latitude: 36.185869348356526,
      longitude: 118.62865067836822,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 30,
      title: "神龙潭",
      latitude: 36.18275329680355,
      longitude: 118.62989196601263,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 31,
      title: "捉蟹潭",
      latitude: 36.181609917610245,
      longitude: 118.63163860211773,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 32,
      title: "神龙大峡谷石刻",
      latitude: 36.180470103411146,
      longitude: 118.63366432852604,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 33,
      title: "牌坊",
      latitude: 36.180292048665564,
      longitude: 118.6361050403375,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 34,
      title: "御神殿",
      latitude: 36.196514256542336,
      longitude: 118.62529767981232,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 35,
      title: "玉皇阁",

      latitude: 36.19626065906447,
      longitude: 118.62525355054106,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 36,
      title: "探海石",
      latitude: 36.19606479166273,
      longitude: 118.62560382600623,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 37,
      title: "太清洞",

      latitude: 36.19589607469334,
      longitude: 118.62523231377611,
      width: 10,
      height: 12
    },
    {
      iconPath: "../Image/red.png",
      id: 38,
      title: "揽月轩",
      latitude: 36.195364257276395,
      longitude: 118.62595023094298,
      width: 10,
      height: 12
    }
  ],
  },
  onReady: function () {
    wx.request({
      url: 'url',
    })
    var that = this
    var getUrl=app.appUrl+'/attractions/getAttractionsByName';
    var appToken = app.globalData.UserToken;
    setInterval(function(){
      wx.getLocation({
        altitude: 'true',
        isHighAccuracy:"true",
        success:function(res){
        // console.log(res)
        var i = 0;
        var flag = true;
        for(i; i<39;i++){
          // console.log(i)
          if(res.latitude<that.data.markers[i].latitude+0.0001&res.latitude>that.data.markers[i].latitude-0.0001&res.longitude<that.data.markers[i].longitude+0.0001&res.longitude>that.data.markers[i].longitude-0.0001){
            console.log(that.data.markers[i].title)
            console.log(that.data.isshow)
            wx.request({
              url: getUrl,
              header:{
                Token:appToken
              },
              data:{
                title:that.data.markers[i].title
              },
              success:function(res){
                console.log(res);
                var image = app.appUrl+ res.data.imageUrl;
                res.data.imageUrl = image;
                that.setData({
                  info:res.data
                })
              }
            })
            that.setData({
              isshow:true
            })
            flag=false;
          }
        }
        if(flag){
            that.setData({
              isshow:false
            })
        }
        }
      })
    },5000)
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
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})