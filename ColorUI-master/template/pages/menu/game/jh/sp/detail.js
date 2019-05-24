// pages/menu/game/jh/sp/detail.js
//获取应用实例
const app = getApp()
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    name: "食谱",
    swiperHeight: 671,
    detail: {},
    margin_type: '0 30%',
    middle_line: 60,
    must:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.id)
    that.setData({
      name: options.name,
    })
    db.collection('food').where({
      id: options.id
    }).get({
      success: res => {
        var list = [];
        var must = res.data[0].must.split(";");
        //var object1 = {}
        for(var i = 0; i < must.length; i++){
          var strlist = [];
          if (must[i].indexOf(',') > 0){
            var strs = must[i].split(",");
            for (var j = 0; j < strs.length; j++) {
              var object = {};
              console.log(strs[j])
              var str1 = strs[j].split(":")[0];
              var str2 = strs[j].split(":")[1];
              if(j != strs.length - 1){
                var str2 = str2 + " 或";
              }
              object.img = str1;
              object.num = str2;
              strlist.push(object)
            }
          } else {
            var object = {};
            var str1 = must[i].split(":")[0];
            var str2 = must[i].split(":")[1];
            object.img = str1;
            object.num = str2;
            strlist.push(object)
          }
          //object1.list = strlist;
          list.push(strlist);
        }
        that.setData({
          detail: res.data[0],
          must: list,
          margin_type: must.length == 1 ? '0 30%' : '0 0 0 20%',
          middle_line: must.length == 1 ? 60 : 80
        })
        console.log(this.data.must);
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
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