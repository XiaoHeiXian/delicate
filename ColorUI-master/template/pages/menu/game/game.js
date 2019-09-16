// pages/menu/game/game.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    color: app.globalData.color,
    list: [
      {
        name: '2048',
        title: '2048',
        color: 'blue'
      }, 
      {
        name: "jh",
        title: "饥荒攻略",
        color: 'cyan'
      },
      {
        name: 'yys',
        title: "阴阳师活动提醒",
        color: 'green'
      },
      {
        name: 'qmm',
        title: "圈猫猫",
        color: 'olive'
      }, 
      //{
      //   name: 'wx-charts',
      //   color: 'yellow'
      // },
      // {
      //   name: '和...',
      //   color: 'orange'
      // },
      // {
      //   name: '搬运工',
      //   color: 'red'
      // },
      // {
      //   name: '构成',
      //   color: 'pink'
      // }
    ],
    toggleDelay: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      color: app.globalData.color
    })
    var that = this;
    that.setData({
      toggleDelay: true
    })
    setTimeout(function () {
      that.setData({
        toggleDelay: false
      })
    }, 2000)
  },
  toggleDelay() {
    var that = this;
    that.setData({
      toggleDelay: true
    })
    setTimeout(function () {
      that.setData({
        toggleDelay: false
      })
    }, 2000)
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

  },

  go2game(e) {
    wx.navigateTo({
      url: '/pages/menu/game/' + e.currentTarget.id + '/' + e.currentTarget.id,
    })
  }
})