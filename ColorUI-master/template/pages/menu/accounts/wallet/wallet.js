// pages/menu/accounts/wallet/wallet.js
const app = getApp()
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    accountid: "",
    openid: "",
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    money: "0.00",
    weixin: "0.00",
    alipay: "0.00",
    card: "0.00",
    type: "",
    typeName: "",
    typeColor: "",
    num: ""
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
        db.collection('account').where({
          _openid: res.result.openid
        }).get({
          success: res => {
            this.setData({
              accountid: res.data[0]._id,
              money: res.data[0].money_num,
              weixin: res.data[0].weixin_num,
              alipay: res.data[0].alipay_num,
              card: res.data[0].card_num,
            })
          },
          fail: err => {
            console.error('[数据库] [查询记录] 失败：', err)
          }
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
  onShareAppMessage: function () {

  },
  showModal(e) {
    var type = e.currentTarget.dataset.id;
    this.setData({
      type: type,
      modalName: e.currentTarget.dataset.target
    })

    if (type == "money") {
      this.setData({
        typeName: "现金",
        typeColor: "orange"
      })
    }

    if (type == "weixin") {
      this.setData({
        typeName: "微信",
        typeColor: "olive"
      })
    }

    if (type == "alipay") {
      this.setData({
        typeName: "支付宝",
        typeColor: "blue"
      })
    }

    if (type == "card") {
      this.setData({
        typeName: "银行卡",
        typeColor: "grey"
      })
    }

  },
  hideModal(e) {
    this.setData({
      modalName: null,
    })
  },
  add(e) {

    if (this.data.type == "money" && this.data.num != "") {
      db.collection('account').doc(this.data.accountid).update({
        data: {
          money_num: this.data.num
        },
        success: res => {
          console.log("[数据库] [添加记录] 成功: ", res)
          this.setData({
            modalName: null,
            money: this.data.num,
            num: ""
          })
        }
      });

    }

    if (this.data.type == "weixin" && this.data.num != "") {
      db.collection('account').doc(this.data.accountid).update({
        data: {
          weixin_num: this.data.num
        },
        success: res => {
          console.log("[数据库] [添加记录] 成功: ", res)
          this.setData({
            modalName: null,
            weixin: this.data.num,
            num: ""
          })
        }
      });
    }

    if (this.data.type == "alipay" && this.data.num != "") {
      db.collection('account').doc(this.data.accountid).update({
        data: {
          alipay_num: this.data.num
        },
        success: res => {
          console.log("[数据库] [添加记录] 成功: ", res)
          this.setData({
            modalName: null,
            alipay: this.data.num,
            num: ""
          })
        }
      });
    }

    if (this.data.type == "card" && this.data.num != "") {
      db.collection('account').doc(this.data.accountid).update({
        data: {
          card_num: this.data.num
        },
        success: res => {
          console.log("[数据库] [添加记录] 成功: ", res)
          this.setData({
            modalName: null,
            card: this.data.num,
            num: ""
          })
        }
      });
    }
  },
  formNum: function (e) {
    this.setData({
      num: e.detail.value
    })
  },
})