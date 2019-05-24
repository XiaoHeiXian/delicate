//index.js
//获取应用实例
const app = getApp()
const db = wx.cloud.database({});
const table = db.collection('account');
const _ = db.command;

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    color: app.globalData.color,
    //motto: 'Hi 开发者！',
    motto: 'Hi 体验者！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    openid:'',
    resdata: ''
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    //调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        //console.log('[云函数] [login] user openid：', res.result.openid)
        this.setData({
          openid: res.result.openid
        })
        db.collection('setting').where({
          _openid: res.result.openid
        }).get({
          success: res => {
            if (res.data.length == 0) {

            } else {
              this.setData({
                color: res.data[0].color
              })
              app.globalData.color = res.data[0].color;
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
        table.where({
          _openid: res.result.openid
        }).get({
          success: res => {
            //console.log('[数据库] [查询记录] 成功: ', res)
            this.setData({
              resdata: JSON.stringify(res.data)
            })
            if (this.data.resdata == '[]') {
              table.add({
                data: {
                  money_num: 0,
                  weixin_num: 0,
                  alipay_num: 0,
                  card_num: 0,
                },
                success: res => {
                  //console.log("[数据库] [添加记录] 成功: ", res)
                }
              });
            }
          }
        })
      }
    })
    if (this.data.openid != ''){
      
    } else {
      console.log("openid为空")
    }
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  }
})
