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
      
      // { title: '时间管理', name: 'timeline', color: 'orange', icon: 'timefill' },
      // { title: '重要日', name: 'modal', color: 'grey', icon: 'squarecheckfill' },
      // { title: '我的', name: 'avatar', color: 'red', icon: 'myfill' },
    ],
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
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
    
  }
})
