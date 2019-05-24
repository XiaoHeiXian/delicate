// pages/about/about.js

const app = getApp();
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    color: "green",
    openid: "",
    id: "",
    changeColor: [
      {
        title: '魅红',
        name: 'red',
        color: '#f43f3b - #ec008c'
      },
      {
        title: '鎏金',
        name: 'orange',
        color: '#ff9700 - #ed1c24'
      },
      {
        title: '翠柳',
        name: 'green',
        color: '#39b54a - #8dc63f'
      },
      {
        title: '靛青',
        name: 'blue',
        color: '#0081ff - #1cbbb4'
      },
      {
        title: '惑紫',
        name: 'purple',
        color: '#9000ff - #5e00ff'
      },
      {
        title: '霞彩',
        name: 'pink',
        color: '#ec008c - #6739b6'
      },
      {
        title: '柠檬',
        name: 'yellow',
        color: '#808000 - #FFFF00'
      },
      {
        title: '摸黑',
        name: 'black',
        color: '#696969 - #333333'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        this.setData({
          openid: res.result.openid
        })
        db.collection('setting').where({
          _openid: res.result.openid
        }).get({
          success: res => {
            if (res.data.length == 0) {
              this.setData({
                color: "green"
              })
            } else {
              this.setData({
                color: res.data[0].color,
                id: res.data[0]._id
              })
            }

          },
          fail: err => {
            wx.showToast({
              icon: 'none',
              title: '查询记录失败'
            })
            console.error('[数据库] [查询记录] 失败：', err)
          }
        })
      }
    })
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

  SetColor(e) {
    if (this.data.id == "") {
      db.collection('setting').add({
        data: {
          color: e.currentTarget.dataset.color
        },
        success: res => {
          this.setData({
            id: res._id,
            color: e.currentTarget.dataset.color,
            modalName: null
          })
          app.globalData.setData({
            color: e.currentTarget.dataset.color
          })
        },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: '更换颜色失败'
          })
          console.error('[数据库] [更新记录] 失败：', err)
        }
      })
    } else {
      db.collection('setting').doc(this.data.id).update({
        data: {
          color: e.currentTarget.dataset.color
        },
        success: res => {
          this.setData({
            color: e.currentTarget.dataset.color,
            modalName: null
          })
          app.globalData.setData({
            color: e.currentTarget.dataset.color
          })
        },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: '更换颜色失败'
          })
          console.error('[数据库] [更新记录] 失败：', err)
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