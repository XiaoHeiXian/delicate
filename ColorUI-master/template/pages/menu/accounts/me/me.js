// pages/menu/accounts/me/me.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [
      {
        name: '微信开发者工具',
        color: 'blue'
      }, {
        name: 'Color UI',
        color: 'cyan'
      },
      {
        name: '云开发 · 数据库',
        color: 'green'
      },
      {
        name: '云开发 · 云函数',
        color: 'olive'
      }, {
        name: 'wx-charts',
        color: 'yellow'
      },
      {
        name: '和...',
        color: 'orange'
      },
      {
        name: '搬运工',
        color: 'red'
      },
      {
        name: '构成',
        color: 'pink'
      }
    ],
    toggleDelay: false
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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

  }
})