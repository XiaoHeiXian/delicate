// pages/menu/game/yys/yys.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    indexColor: app.globalData.color,
    date: "",
    timelog: [],
    lastColor: "green",
    name: "",
    desc: "",
    done: "",
    index: 2,
    picker: ['日常', '活动', '阅读', '游戏', '下厨', '健身'],
    color: ["blue", "cyan", "green", "olive", "yellow", "orange"],
    content: "",
    start: '00:00',
    end: '00:00',
    openid: "",
    modalDate: "",
    planList:[],
    endDate: "",
    time:""
  },
  pageBack() {
    wx.navigateBack({
      delta: 1
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      indexColor: app.globalData.color 
    })
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    if (month < 10) {
      month = '0' + month;
    };
    if (day < 10) {
      day = '0' + day;
    };
    // 如果需要时分秒 
    var h = now.getHours(); 
    var m = now.getMinutes();
    if (h < 10) {
      h = '0' + h;
    };
    if (m < 10) {
      m = '0' + m;
    };
    //var s = now.getSeconds(); 
    var formatDate = year + '-' + month + '-' + day;
    var d2 = new Date(now);
    d2.setDate(now.getDate() + 7);
    var year2 = d2.getFullYear();
    var month2 = d2.getMonth() + 1;
    var day2 = d2.getDate();
    if (month2 < 10) {
      month2 = '0' + month2;
    };
    if (day2 < 10) {
      day2 = '0' + day2;
    };
    var formatDate2 = year2 + '-' + month2 + '-' + day2;
    this.setData({
      date: formatDate,
      subDate: month + '-' + day,
      modalDate: formatDate,
      time: h + ":" + m,
      endDate: formatDate2
    })
    //调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        //console.log('[云函数] [login] user openid：', res.result.openid)
        //console.log(res.result.openid);
        //console.log(this.data.today);
        this.setData({
          openid: res.result.openid
        })
        //调用云函数
        wx.cloud.callFunction({
          name: 'plan',
          data: { url: "task/listByDate?date=" + this.data.date + "&openId=" + res.result.openid},
          success: res => {
            //console.log('[云函数] [login] user openid：', res.result.openid)
            var planList = JSON.parse(res.result);
            console.log(planList);
            this.setData({
              planList: planList
            })
          },
          error: err => {
            console.log(err);
          }
        })
      }
    })
    
  },

  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },

  EndChange(e) {
    this.setData({
      end: e.detail.value
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

  add(e) {
    console.log("http://www.wannengde.cn:8080/plan/task/save?date=" + this.data.date
      + "&openId=" + this.data.openid
      + "&formid=" + e.detail.formId
      + "&time=" + this.data.end + ":00"
      + "&name=" + encodeURIComponent(this.data.name)
      + "&desc=" + encodeURIComponent(this.data.desc))
    if (this.data.name == "") {
      wx.showToast({
        icon: 'none',
        title: '请输入活动名称'
      })
    } else if (this.data.desc == ""){
      wx.showToast({
        icon: 'none',
        title: '请输入目标描述'
      })
    } else {
      //调用云函数
      wx.cloud.callFunction({
        name: 'plan',
        data: {
          url: "task/save?date=" + this.data.date 
            + "&openId=" + this.data.openid 
            + "&formid=" + e.detail.formId
            + "&time=" + this.data.end + ":00" 
            + "&name=" + encodeURIComponent(this.data.name)
            + "&desc=" + encodeURIComponent(this.data.desc)},
        success: res => {
          if (res.result == "0"){
            this.setData({
              modalName: null
            })
            wx.showToast({
              icon: 'none',
              title: '提交成功'
            })
            //调用云函数
            wx.cloud.callFunction({
              name: 'plan',
              data: { url: "task/listByDate?date=" + this.data.date + "&openId=" + this.data.openid },
              success: res => {
                //console.log('[云函数] [login] user openid：', res.result.openid)
                var planList = JSON.parse(res.result);
                console.log(planList);
                this.setData({
                  planList: planList
                })
              },
              error: err => {
                console.log(err);
              }
            })
          } else {
            console.log(res);
            wx.showToast({
              icon: 'none',
              title: '提交失败'
            })
          }
        },
        error: err => {
          console.log(err);
        }
      })
    }
  },

  formName: function (e) {
    this.setData({
      name: e.detail.value
    })
  },

  formDesc: function (e) {
    this.setData({
      desc: e.detail.value
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