// pages/menu/laji/laji.js
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  searchThing(e) {

    let key = e.detail.value;

    if (key != "") {
      //console.log(encodeURIComponent(key))
      //调用云函数
      wx.cloud.callFunction({
        name: 'lajifenlei',
        data: { url: encodeURIComponent(key) },
        success: res => {
          var type = res.result.split(';">&nbsp;属于&nbsp;</span><span style="color:#')[1].split("<")[0].split(">")[1];
          console.log(type)
        },
        fail: err => {
          console.log(err)
        }
      })
    }

  },
})