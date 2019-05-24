// pages/menu/read/read.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ispx: 0,
    bookList: [],
    default_img: "../../../images/default.png",
    arr: [],
    arrHeight: [],
    itemHight: 164,
    loadModal: true
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        var ispx = 0;

        //console.log(res)

        if (res.model.substring(0, 8) == "iPhone X") {
          ispx = 20;
        }
        // 高度,宽度 单位为px
        that.setData({
          ispx: ispx
        })
      }
    })
    //调用云函数
    wx.cloud.callFunction({
      name: 'tinyanbook',
      data: { url: "book" },
      success: res => {
        var bookList = JSON.parse(res.result);
        console.log(bookList)
        this.setData({
          bookList: bookList.book_list,
          loadModal: false
        })

        //加载符合屏幕高度的图片
        for (var i = 0; i < 4 * 3; i++) {
          this.data.arr[i] = true;
        }
        //加载默认图片
        for (var i = 4 * 3; i < bookList.book_list.length; i++) {
          this.data.arr[i] = false;
        }
        this.setData({
          arr: this.data.arr
        })
        //保存图片到屏幕顶部的高度
        for (var i = 0; i < bookList.book_list.length; i++) {
          this.data.arrHeight[i] = Math.floor(i / 3) * this.data.itemHight + 89 + 50
        }
      },
      fail: err => {
        console.log(err)
      }
    })
  },

  viewScroll: function(e) {
    for(var i = 0; i < this.data.arrHeight.length; i++){
      //图片到屏幕顶部的高度 小于 滚动条 + scroll-view 的高度时
      if (this.data.arrHeight[i] < e.detail.scrollTop + 700)
      {
        if(this.data.arr[i] === false){
          //显示图片
          this.data.arr[i] = true;
        }
      }
    }
    this.setData({
      arr: this.data.arr
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // setTimeout(() => {
    //   this.getRect();
    // }, 1000)
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
})