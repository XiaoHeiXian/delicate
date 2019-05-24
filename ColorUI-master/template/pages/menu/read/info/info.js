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
    chapter_save_list: [],
    chapter_list: [],
    scroll_height: 630,
    count: 0,
    chapter_show_list:[],
    arrow_text: "倒序",
    loadModal: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setTimeout(() => {
      this.setData({
        loadModal: false
      })
    }, 20000)
    //调用云函数
    wx.cloud.callFunction({
      name: 'tinyanbook',
      data: { url: "book?action=book_info_vue&type=1&book_id=" + options.book_id },
      success: res => {
        var book_info = JSON.parse(res.result);
        var description = book_info.book_info.description.replace(/<br>/g, "\n");
        this.setData({
          book_info: book_info.book_info,
          description: description,
          chapter_list: book_info.chapter_list,
          chapter_save_list: book_info.chapter_list,
          count: this.data.count + 1,
          chapter_show_list: book_info.chapter_list.slice(0, 16),
          loadModal: false
        })
      },
      fail: err => {
        console.log(err)
      }
    })
  },

  toLowFun() {
    //console.log("触底事件");
    this.setData({
      count: this.data.count + 1,
      chapter_show_list: this.data.chapter_list.slice(0, 16 * this.data.count + 16)
    })
  },

  searchThing(e) {

    let key = e.detail.value;

    if (key != "") {
      //字符串方法indexOf
      var len = this.data.chapter_save_list.length;
      var arr = [];
      for (var i = 0; i < len; i++) {
        //如果字符串中不包含目标字符会返回-1
        if (this.data.chapter_save_list[i].chapter_name.indexOf(key) >= 0) {
          arr.push(this.data.chapter_save_list[i]);
        }
      }
      var show_arr = arr;
      if(arr.length > 16)
      {
        show_arr = arr.slice(0, 16);
      }
      this.setData({
        count: 0,
        chapter_show_list: show_arr,
        chapter_list: arr
      })
    }
  },

  arrow() {

    if (this.data.arrow_text == "倒序"){

      this.setData({
        chapter_save_list: this.data.chapter_save_list.reverse(),
        chapter_list: this.data.chapter_save_list.reverse(),
        chapter_show_list: this.data.chapter_save_list.reverse().slice(0, 16),
        count: 0,
        arrow_text: "正序"
      })

    } else {

      this.setData({
        chapter_save_list: this.data.chapter_save_list.reverse(),
        chapter_list: this.data.chapter_save_list.reverse(),
        chapter_show_list: this.data.chapter_save_list.reverse().slice(0, 16),
        count: 0,
        arrow_text: "倒序"
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