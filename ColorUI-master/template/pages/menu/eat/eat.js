// pages/menu/eat/eat.js
const app = getApp()
const db = wx.cloud.database()
const _ = db.command
var timer;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    action: "开始",
    suiji: "什么",
    timer: '',//定时器名字
    countDownNum: '60',//倒计时初始值
    eat:"盖浇饭 砂锅 大排档 米线 满汉全席 西餐 麻辣烫 自助餐 炒面 快餐 水果 西北风 馄饨 火锅 烧烤 泡面 速冻水饺 日本料理 涮羊肉 味千拉面 肯德基 面包 扬州炒饭 自助餐 茶餐厅 海底捞 咖啡 比萨 麦当劳 兰州拉面 沙县小吃 烤鱼 海鲜 铁板烧 韩国料理 粥 快餐 东南亚菜 甜点 农家菜 川菜 粤菜 湘菜 本帮菜 竹笋烤肉",
    modalName: null,
    eatId: ""
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
        db.collection('eat').where({
          _openid: res.result.openid
        }).get({
          success: res => {
            if(res.data.length > 0){
              this.setData({
                eat: res.data[0].food,
                eatId: res.data[0]._id
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

  choose: function () {
    if (this.data.action == "开始" || this.data.action == "不行，换一个") {
      var str = this.data.eat;
      var strs = str.split(" ");
      //console.log(strs);
      this.setData({
        action: "停止"
      })
      let that = this;
      let countDownNum = that.data.countDownNum;
      //如果将定时器设置在外面，那么用户就看不到countDownNum的数值动态变化，所以要把定时器存进data里面
      that.setData({
        timer: setInterval(function () {//这里把setInterval赋值给变量名为timer的变量
          //每隔一秒countDownNum就减一，实现同步
          countDownNum--;
          var random = Math.floor(Math.random() * strs.length);
          //然后把countDownNum存进data，好让用户知道时间在倒计着
          that.setData({
            suiji: strs[random]
          })
          //在倒计时还未到0时，这中间可以做其他的事情，按项目需求来
          if (countDownNum == 0) {
            //这里特别要注意，计时器是始终一直在走的，如果你的时间为0，那么就要关掉定时器！不然相当耗性能
            //因为timer是存在data里面的，所以在关掉时，也要在data里取出后再关闭
            clearInterval(that.data.timer);
            //关闭定时器之后，可作其他处理codes go here
          }
        }, 100)
      })
    } else {
      clearInterval(this.data.timer);
      this.setData({
        action: "不行，换一个"
      })
    }

  },

  bindinput: function (e) {
    this.setData({
      eat: e.detail.value,
    })
  },

  setFood: function () {
    if (this.data.eatId == ""){
      db.collection('eat').add({
        data: {
          food: this.data.eat
        },
        success: res => {
          console.log(res)
          this.setData({
            modalName: null,
            eatId: res._id
          })
          wx.showToast({
            icon: 'none',
            title: '添加成功'
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
    } else {

      db.collection('eat').doc(this.data.eatId).update({
        data: {
          food: this.data.eat
        },
        success: res => {
          this.setData({
            modalName: null,
          })
          wx.showToast({
            icon: 'none',
            title: '更新成功'
          })
        },
        fail: err => {
          this.setData({
            modalName: null,
          })
          wx.showToast({
            icon: 'none',
            title: '更新失败'
          })
        }
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
      modalName: null,
    })
  },
})