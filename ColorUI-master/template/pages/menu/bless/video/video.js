// pages/menu/bless/video/video.js
//获取应用实例
const app = getApp()
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    playUrl: "http://220.168.145.2/upos-sz-mirrorks32u.acgvideo.com/upgcxcode/11/99/8629911/8629911-1-16.mp4?e=ig8euxZM2rNcNbh3hwdVhoMznwdVhwdEto8g5X10ugNcXBB_&deadline=1566466987&gen=playurl&nbs=1&oi=1902190910&os=ks3u&platform=html5&trid=eefb0733a7234e1a97845bcd34bc0d4e&uipk=5&upsig=4743e4c353b38b1b2bd545a2eaeb5b59&uparams=e,deadline,gen,nbs,oi,os,platform,trid,uipk&mid=0",
    modalName: "",
    apprecolor: "gray",
    comment:[],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    if (options.playUrl){
      this.setData({
        playUrl: options.playUrl
      })
    }
    if(options.comment){
      this.setData({
        modalName: "bottomModal"
      })
    }
  },

  appreciate(){
    if (this.data.apprecolor == 'gray'){
      this.setData({
        apprecolor: "red"
      })
    } else {
      this.setData({
        apprecolor: "gray"
      })
    }
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