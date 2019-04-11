// pages/menu/read/info/info.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    book_info: {},
    description: "",
    chapter_list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调用云函数
    wx.cloud.callFunction({
      name: 'tinyanbook',
      data: { url: "book?action=book_info_vue&type=1&book_id=81" },
      success: res => {
        var book_info = JSON.parse(res.result);
        var description = book_info.book_info.description.replace(/<br>/g, "\n");
        console.log(book_info);
        this.setData({
          book_info: book_info.book_info,
          description: description,
          chapter_list: book_info.chapter_list
        })
      },
      fail: err => {
        console.log(err)
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