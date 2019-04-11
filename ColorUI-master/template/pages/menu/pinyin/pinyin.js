// pages/menu/pinyin/pinyin.js
//获取应用实例
const app = getApp()
var pinyin = require('../../../utils/pinyin.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    pinyinText: '',
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
  // 事件处理函数
  onInput: function (e) {
    console.log(e)
    var char = e.detail.value;
    console.log('--', char);
    char = char && char.trim();
    if (char.length == 1) {
      if (pinyin.hasOwnProperty(char)) {
        console.log(pinyin[char].join(', '))
        this.setData({
          pinyinText: pinyin[char].join(', ')
        });
      }
      else {
        this.setData({
          pinyinText: '找不到，^_^'
        });
      }
    }
    else {
      this.setData({
        pinyinText: ''
      });
    }
  },
})