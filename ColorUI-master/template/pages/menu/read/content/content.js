// pages/menu/read/content/content.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    book_info: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调用云函数
    wx.cloud.callFunction({
      name: 'tinyanbook',
      data: { url: "book?action=chapter_detail_vue&web_url=http://www.uuxs.net/book/41/41959/&book_id=81&chapter_name=%E7%AC%AC%E4%B8%80%E5%8D%83%E4%BA%94%E7%99%BE%E4%BA%94%E5%8D%81%E4%B9%9D%E7%AB%A0%20%E8%81%AA%E6%98%8E%E7%9A%84%E6%B0%91%E6%97%8F&chapter_url=20145297.html" },
      success: res => {
        var book_info = JSON.parse(res.result);
        //var description = book_info.book_info.description.replace(/<br>/g, "\n");
        console.log(book_info);
        this.setData({
          book_info: book_info
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