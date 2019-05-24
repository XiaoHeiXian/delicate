//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    elements: [
      // { title: '物品', name: 'things', color: 'brown', icon: 'tagfill' },
      { title: '记账', name: 'accounts', color: 'blue', icon: 'vipcard' },
      { title: '吃啥', name: 'eat', color: 'cyan', icon: 'hot' },
      // { title: '技能', name: 'list', color: 'pink', icon: 'list' },
      { title: '时间管理', name: 'timeline', color: 'green', icon: 'timefill' },
      // { title: '重要日', name: 'modal', color: 'grey', icon: 'squarecheckfill' },
      { title: '时钟', name: 'clock', color: 'olive', icon: 'time' },
      { title: '拼音', name: 'pinyin', color: 'purple', icon: 'font' },
      { title: '二维码', name: 'qrcode', color: 'mauve', icon: 'qrcode' },
      { title: '读书', name: 'read', color: 'orange', icon: 'read' },
      { title: '游戏', name: 'game', color: 'red', icon: 'game' },
    ],
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    color: app.globalData.color,
    //motto: 'Hi 开发者！',
    motto: 'Hi！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.setData({
      color: app.globalData.color
    })
    console.log(app.globalData.color)
  }
})
