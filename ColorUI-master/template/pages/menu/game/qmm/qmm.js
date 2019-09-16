// pages/menu/game/qmm/qmm.js
//获取应用实例
const app = getApp()
const ctx = wx.createCanvasContext('firstCanvas')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    motto: '点击小圆圈，围住小猫',
    circles: [
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    windowHeight: wx.getSystemInfoSync().windowHeight,
    windowWidth: wx.getSystemInfoSync().windowWidth,
    points: [
      [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }],
      [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }],
      [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }],
      [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }],
      [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }],
      [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }],
      [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }],
      [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }],
      [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }],
      [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }],
      [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }],
    ],
    odd: [{ x: -1, y: -1 }, { x: 0, y: -1 }, { x: -1, y: 0 }, { x: 1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 }],
    even: [{ x: 1, y: -1 }, { x: 0, y: -1 }, { x: -1, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }],
    x: 5,
    y: 5,
  },

  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  draw: function () {
    // Draw arc
    for (var j = 0; j < 11; j++) {

      for (var i = 0; i < 11; i++) {
        ctx.beginPath()
        if (j % 2 == 0) {
          ctx.arc(20 + i * 32, 18 + j * 32, 15, 0, 2 * Math.PI)
          var x = 20 + i * 32;
          var y = 18 + j * 32;
          this.data.points[j][i].x = x;
          this.data.points[j][i].y = y;
        } else {
          ctx.arc(36 + i * 32, 18 + j * 32, 15, 0, 2 * Math.PI)
          var x = 36 + i * 32;
          var y = 18 + j * 32;
          this.data.points[j][i].x = x;
          this.data.points[j][i].y = y;
        }
        //ctx.setStrokeStyle('#b3d9ff')
        if (this.data.circles[j][i] == 0) {
          ctx.setFillStyle('#b3d9ff')
        } else if (this.data.circles[j][i] == 1) {
          ctx.setFillStyle('#036')
        } else {
          ctx.setFillStyle('#000000')
        }
        ctx.fill();
      }
    }

    ctx.draw();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    console.log(this.data.windowHeight);
    console.log(this.data.windowWidth);

    this.draw();
  },

  catmove: function (j) {
    var index = parseInt(Math.random() * 6);
    console.log(index);
    while ((this.data.x + this.data.odd[index].x < 0) || 
      (this.data.y + this.data.odd[index].y < 0) ||
      (this.data.x + this.data.even[index].x < 0) || 
      (this.data.y + this.data.even[index].y < 0))
    {
      index = parseInt(Math.random() * 6);
      console.log(index);
    }
    this.data.circles[this.data.x][this.data.y] = 0;
    if (j % 2 == 0) {
      this.data.circles[this.data.x + this.data.odd[index].x][this.data.y + this.data.odd[index].y] = 2;
    } else {
      this.data.circles[this.data.x + this.data.even[index].x][this.data.y + this.data.even[index].y] = 2;
    }
    
  },

  click: function (e) {
    //点击的点
    var p1 = e.changedTouches[0];
    for (var j = 0; j < 11; j++) {
      for (var i = 0; i < 11; i++) {
        //圆心
        var p2 = this.data.points[j][i];
        //求两点间的距离
        var dx = Math.abs(p2.x - p1.x);
        var dy = Math.abs(p2.y - p1.y);
        var dis = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        if (dis < 15) {
          this.catmove(j);
          this.data.circles[j][i] = 1;
          this.setData({
            motto : '您点击了 （' + j + '，' + i + '）'
          })
          break;
        }
      }
    }
    this.draw();
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