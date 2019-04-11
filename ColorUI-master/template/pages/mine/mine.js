// pages/mine/mine.js
const app = getApp()
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    comment: [],
    message: "",
    userInfo: {},
    choose: false,
    modalName: "",
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo
          })
        }
      })
    }
    //调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        this.setData({
          openid: res.result.openid
        })
        if (res.result.openid == 'ovRnj5I6pzs2YajCSvfPN_X6ILrQ'){
          db.collection("comment").orderBy('createdTime', 'desc').get({
            success: res => {
              //console.log(res)
              this.setData({
                comment: res.data
              })
            },
            fail: err => {
              wx.showToast({
                icon: 'none',
                title: '查询记录失败'
              })
              console.error('[数据库] [查询记录] 失败：', err)
            }
          })
        } else {
          db.collection("comment").orderBy('createdTime', 'desc').where({
            _openid: res.result.openid
          }).get({
            success: res => {
              //console.log(res)
              this.setData({
                comment: res.data
              })
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

  },

  messageInput: function (e) {
    this.setData({
      message: e.detail.value
    })
  },

  getUserInfo: function (e) {
    if (!this.logged && e.detail.userInfo != null) {
      app.globalData.userInfo = e.detail.userInfo;
      this.setData({
        userInfo: e.detail.userInfo
      })
    }
  },

  send: function () {

    if (app.globalData.userInfo == null) {

    } else {
      if (this.data.message == "") {
        wx.showToast({
          icon: 'none',
          title: '请输入留言内容'
        })
      } else {
        var timestamp = Date.parse(new Date());
        var date = new Date(timestamp);
        //获取年份  
        var Y = date.getFullYear();
        //获取月份  
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
        //获取当日日期 
        var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        //获取时  
        var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours());
        //获取分  
        var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes());
        //获取秒
        var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        var time = Y + '年' + M + '月' + D + '日 ' + h + ':' + m + ':' + s;

        db.collection('comment').add({
          data: {
            message: this.data.message,
            name: this.data.userInfo.nickName,
            avatar: this.data.userInfo.avatarUrl,
            time: time,
            createdTime: new Date()
          },
          success: res => {
            this.setData({
              modalName: null,
            })
            wx.showToast({
              icon: 'none',
              title: '添加成功'
            })
            db.collection("comment").orderBy('createdTime', 'desc').get({
              success: res => {
                //console.log(res)
                this.setData({
                  comment: res.data
                })
              },
              fail: err => {
                wx.showToast({
                  icon: 'none',
                  title: '查询记录失败'
                })
                console.error('[数据库] [查询记录] 失败：', err)
              }
            })
          },
          fail: err => {
            this.setData({
              modalName: null,
            })
            wx.showToast({
              icon: 'none',
              title: '添加失败'
            })
          }
        })

        this.setData({
          message: ""
        })
      }
    }


  }

})