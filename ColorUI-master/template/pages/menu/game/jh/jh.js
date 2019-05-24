// pages/menu/game/jh/jh.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    img_size: 50,
    menuList: [
      {
        title:"rw",
        name:"人物"
      },
      {
        title: "kj",
        name: "科技"
      },
      {
        title: "sp",
        name: "食谱"
      },
      {
        title: "sw",
        name: "生物"
      },
      {
        title: "zr",
        name: "自然"
      },
      {
        title: "jz",
        name: "机制"
      },
      {
        title: "dl",
        name: "地理"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          img_size: (res.screenWidth - 30 * 6) / 5
        })
        
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