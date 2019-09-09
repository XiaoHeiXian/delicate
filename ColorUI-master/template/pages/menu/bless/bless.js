// pages/menu/bless/bless.js
//获取应用实例
const app = getApp();
var page = 1;
var tag = 'yingshi';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    scrollLeft: 0,
    videoList: [],
    tagList: [],
    playUrl: "",

    comment: [],
    message: "",
    userInfo: {},
    choose: false,
    modalName: "",
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  comment: function (e) {
    wx.navigateTo({
      url: '../bless/video/video?playUrl=' + e.currentTarget.dataset.Url + "&comment=1"
    });
  },

  // viewScroll: function (e) {
  //   // for (var i = 0; i < this.data.arrHeight.length; i++) {
  //   //   //图片到屏幕顶部的高度 小于 滚动条 + scroll-view 的高度时
  //   //   if (this.data.arrHeight[i] < e.detail.scrollTop + 700) {
  //   //     if (this.data.arr[i] === false) {
  //   //       //显示图片
  //   //       this.data.arr[i] = true;
  //   //     }
  //   //   }
  //   // }
  //   // this.setData({
  //   //   arr: this.data.arr
  //   // })
  //   console.log(1);
  // },

  /**
   * 页面上拉触底事件的处理函数
   */
  scrollHandler: function () {
    var that = this;
    // 页数+1
    page = page + 1;
    console.log(page);
    //调用云函数
    wx.cloud.callFunction({
      name: 'huaijiu',
      data: { url: "api/video/list?tag=" + tag + "&page=" + page },
      success: res => {
        var videoList = JSON.parse(res.result);
        console.log(videoList)
        const oldData = that.data.videoList;
        this.setData({
          videoList: oldData.concat(videoList.data.pageData)
        })
      }
    })
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60,
    })
    tag = e.currentTarget.dataset.tag;
    page = 1;
    //调用云函数
    wx.cloud.callFunction({
      name: 'huaijiu',
      data: { url: "api/video/list?tag=" + tag + "&page=" + page },
      success: res => {
        var videoList = JSON.parse(res.result);
        console.log(videoList)
        this.setData({
          videoList: videoList.data.pageData
        })
      }
    })
  },

  toVideo(e) {
    var playUrl = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: '../bless/video/video?playUrl=' + playUrl
    });
  },

  toCreate() {
    wx.navigateTo({
      url: '../bless/create/create',
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (options.playUrl) {
      setTimeout(function () {
        wx.navigateTo({
          url: '../bless/video/video?playUrl=' + options.playUrl
        });
      }, 800)
    }
    //调用云函数
    wx.cloud.callFunction({
      name: 'huaijiu',
      data: { url: "api/video/list?tag=" + tag + "&page=" + page },
      success: res => {
        var videoList = JSON.parse(res.result);
        console.log(videoList)
        this.setData({
          videoList: videoList.data.pageData
        })
      }
    })
    //调用云函数
    wx.cloud.callFunction({
      name: 'huaijiu',
      data: { url: "api/video/tag/list" },
      success: res => {
        var tagList = JSON.parse(res.result);
        console.log(tagList)
        this.setData({
          tagList: tagList.data.ops
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
  onShareAppMessage: function (e) {
    var id = e.target.dataset.id;
    var videoList = this.data.videoList;
    return {
      title: videoList[id].title,
      path: 'pages/menu/bless/bless?playUrl=' + videoList[id].playUrl,
      imageUrl: videoList[id].cover//自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4。
    }
  }
})