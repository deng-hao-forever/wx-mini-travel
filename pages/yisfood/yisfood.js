// pages/yisfood/yisfood.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      foods:[{
        id:"0",
        title:"全羊宴",
        image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.huoche.net%2Fimages%2Ftechan%2F201212201232287280.jpg&refer=http%3A%2F%2Fwww.huoche.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625800257&t=b54c366d7db5c7dc905d11ab369e910e",
        info:"    临朐全羊宴已有百年历史，为“山东名小吃”,2011年被山东省旅游局评为“山东不可不吃的100种美食”，全羊宴”选用三年以上生长的羯黑山羊为主料，根据全羊躯干各部肌肉组织的分布不同，采用不同的烹调方法，做出色、形、味、香各异的菜肴，并冠之以吉祥如意的名称，全羊宴具有软料、清淡、口味适中、脆嫩爽鲜等特点。肉质纤维细长，质地柔软，脂肪含量低，且营驱寒养丰富，并含有人体所需的多种微量元素，具有温脾和中，养肝益肾，更有养胃，强阴壮阳的滋补功能。羊肉性甘、温、归脾、胃、肾经。《名医别录》谓：“羊肉味甘、大热、无毒”。有益气补血，温中去寒，温肾助阴之功效，对气虚血亏之虚劳赢瘦、疲乏无力、产后血虚腹痛、血枯经闭、肾阴虚衰、腰膝疲软、尿频阳痿等都有一定的食疗作用，羊肉中含有大量的左旋肉碱，可促进长链脂肪酸燃烧，能增强酶和激素的活力。对心脏的营养发挥重要作用。脂肪中胆固醇含量低，所以对肺结核、气管炎、贫血、产后和病后气血两虚及一切虚寒证患者更为有益。"
      },
      {
        id:"1",
        title:"全鱼宴",
        image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flvyou.365jia.cn%2Fuploads%2Fnews%2Ffolder_1823741%2Fimages%2F60acee474efc393c10bbc434447c4eea.jpg&refer=http%3A%2F%2Flvyou.365jia.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625800297&t=250ee5d8e7ace91595aa2d5794d6e9c2",
        info:"    主料用的是鲢鱼或鲤鱼，经过烧、烤、烹、煮、煎、炸、炖等多种方式，烹饪而成。鱼主要来自老龙湾和冶源水库，用鱼做成的各种菜摆满一桌，色、香、味俱佳，令人不愿意放下筷子。典型菜有清蒸鱼，其特点是清香扑鼻，口感鲜嫩，味美营养;金猫狮子鱼，色泽金黄，外焦里嫩，酸甜鲜美;酥鱼片(汤菜)、熘鱼片、炒鱼片，这三种原料都是鱼片，看颜色有的如蛋黄色，有的如玉如珀，色泽乳白，吃起来味道鲜美清淡不腻;红烧鱼，烧烹之后鲜嫩可口;凉拌鱼丝，鱼去皮去骨加工而成，鱼丝乳白味道清鲜。"
      },{
        id:"2",
        title:"全蝎宴",
        image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload.ilinyi.net%2Fmaterial%2Fnews%2Fimg%2F640x%2F2014%2F07%2F20140728122103slSX.jpg%3Fl0WC&refer=http%3A%2F%2Fupload.ilinyi.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625800348&t=56f67a2e00caa3512456090ba81c644c",
        info:"    沂山全蝎个大体重，营养丰富，是天然滋补佳品，广为“胆大”食客青睐。据《临朐县志》记载：“全蝎八足、土人并入食品，南山珍之。”《临朐续志》则载：“全蝎出西南山中，谷雨前即出蛰，土人入山翻山捣穴，取贮器内，登市出售，用作药材。邑人常喜烹食之。”清朝初期，许多外省商人大量收购蝎子，《聊斋志异》中“蝎客”的故事也由此而来。沂山全蝎既是良药，有舒筋活血、通络止痛、解读强身的强大功效，同时，它又是山珍佳肴，脆香鲜爽，令食客们驻足流连。全蝎营养丰富，食之有防病治病、无病强身的功能。"
      }]
  },
  onReady:function(){
    var that = this;
    var getUrl=app.appUrl+'/Food/getAllfood';
    var appToken = app.globalData.UserToken;
    wx.request({
      url: getUrl,
      header:{
        Token: appToken
      },
      success:function(res){
        console.log(res)
        that.setData({
          foods:res.data
        })
      }
    })
  },
  gotofoodinfo:function(e){
    console.log(e);
    var id = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../foodinfo/foodinfo',
      success:function(res){
        res.eventChannel.emit('id', { data: id })
      }
    })
  }
})