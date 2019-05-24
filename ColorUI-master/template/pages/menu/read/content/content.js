// pages/menu/read/content/content.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    book_info: {},
    content: "",
    options: {},
    loadModal: true,
    fontSize: 40
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调用云函数
    wx.cloud.callFunction({
      name: 'tinyanbook',
      data: { url: "book?action=chapter_detail_vue&web_url=" + options.web_url + "&book_id=" + options.book_id + "&chapter_name=" + encodeURIComponent(options.chapter_name) + "&chapter_url=" + options.chapter_url },
      success: res => {
        var book_info = JSON.parse(res.result);
        var content = book_info.content.replace(/<br\/>/g, "\n");
        content = content.substring(19, content.length - 6);
        this.setData({
          book_info: book_info,
          content: content,
          options: options,
          loadModal: false
        })
      },
      fail: err => {
        console.log(err)
      }
    })
  },

  lastChapter: function () {

    this.setData({
      loadModal: true
    })
    
    var options = this.options;

    //调用云函数
    wx.cloud.callFunction({
      name: 'tinyanbook',
      data: { url: "book?action=chapter_detail_vue&web_url=" + options.web_url + "&book_id=" + options.book_id + "&chapter_name=" + encodeURIComponent(options.chapter_name) + "&chapter_url=" + options.chapter_url + "&type=1" },
      success: res => {
        var book_info = JSON.parse(res.result);
        var content = book_info.content.replace(/<br\/>/g, "\n");
        content = content.substring(19, content.length - 6);
        options.book_id = book_info.book_id;
        options.web_url = book_info.web_url;
        options.chapter_name = book_info.chapter_name;
        options.chapter_url = book_info.chapter_url;
        this.setData({
          book_info: book_info,
          content: content,
          options: options,
          loadModal: false
        })
      },
      fail: err => {
        console.log(err)
      }
    })
  },

  nextChapter: function () {

    this.setData({
      loadModal: true
    })

    var options = this.options;

    //调用云函数
    wx.cloud.callFunction({
      name: 'tinyanbook',
      data: { url: "book?action=chapter_detail_vue&web_url=" + options.web_url + "&book_id=" + options.book_id + "&chapter_name=" + encodeURIComponent(options.chapter_name) + "&chapter_url=" + options.chapter_url + "&type=2"},
      success: res => {
        var book_info = JSON.parse(res.result);
        var content = book_info.content.replace(/<br\/>/g, "\n");
        content = content.substring(19, content.length - 6);
        options.book_id = book_info.book_id;
        options.web_url = book_info.web_url;
        options.chapter_name = book_info.chapter_name;
        options.chapter_url = book_info.chapter_url;
        this.setData({
          book_info: book_info,
          content: content,
          options: options,
          loadModal: false
        })
      },
      fail: err => {
        console.log(err)
      }
    })
  },

  subSize() {
    this.setData({
      fontSize: this.data.fontSize - 1
    })
  },

  addSize() {
    this.setData({
      fontSize: this.data.fontSize + 1
    })
  },

  searchThing(e) {

    let key = e.detail.value;

    if (key != "") {
      //console.log(encodeURIComponent(key))
      //调用云函数
      wx.cloud.callFunction({
        name: 'tinyanbook',
        data: { url: "keyword_query?action=search_vue&keywords=" + encodeURIComponent(key) },
        success: res => {
          var bookList = JSON.parse(res.result);
          console.log(bookList)
          this.setData({
            bookList: bookList.book_list
          })
        },
        fail: err => {
          console.log(err)
        }
      })
    }
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