// pages/menu/game/jh/rw/rw.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    scrollLeft: 0,
    swiperHeight: 671,
    character: [
      {
        title: "Wilson",
        name: "威尔逊"
      },
      {
        title: "Willow",
        name: "薇洛"
      },
      {
        title: "Wolfgang",
        name: "沃尔夫冈"
      },
      {
        title: "Wendy",
        name: "温蒂"
      },
      {
        title: "WX-78",
        name: "WX-78"
      },
      {
        title: "Wickerbottom",
        name: "薇克伯顿"
      },
      {
        title: "Woodie",
        name: "伍迪"
      },
      {
        title: "Wes",
        name: "韦斯"
      },
      {
        title: "Winona",
        name: "薇诺娜"
      },
      {
        title: "Maxwell",
        name: "麦斯威尔"
      },
      {
        title: "Wigfrid",
        name: "薇格弗德"
      },
      {
        title: "Webber",
        name: "韦伯"
      },
      {
        title: "Wortox",
        name: "沃拓克斯"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },

  //swiper切换时会调用
  pagechange: function (e) {
    if ("touch" === e.detail.source) {
      let currentPageIndex = this.data.TabCur
      currentPageIndex = (currentPageIndex + 1) % 2
      this.setData({
        TabCur: currentPageIndex,
        cate: ""
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