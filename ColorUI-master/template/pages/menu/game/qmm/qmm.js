// pages/menu/game/qmm/qmm.js
//获取应用实例
const app = getApp()
const ctx = wx.createCanvasContext('firstCanvas')
const cat = wx.createCanvasContext('secondCanvas')
var circles = [
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
];
var points = [
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
];
const odd = [
  { y: -1, x: -1 },
  { y: 0, x: -1 },
  { y: -1, x: 0 },
  { y: 1, x: 0 },
  { y: -1, x: 1 },
  { y: 0, x: 1 }
];
const even = [
  { y: 1, x: -1 },
  { y: 0, x: -1 },
  { y: -1, x: 0 },
  { y: 1, x: 0 },
  { y: 1, x: 1 },
  { y: 0, x: 1 }
];
var dist = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0],
  [0, 1, 2, 3, 3, 3, 3, 3, 2, 1, 0],
  [0, 1, 2, 3, 4, 4, 4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4, 4, 4, 3, 2, 1, 0],
  [0, 1, 2, 3, 3, 3, 3, 3, 2, 1, 0],
  [0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var cat_x = 5;
var cat_y = 5;
var old_cat_x = 5;
var old_cat_y = 5;
var cat_option = 'bottom_left';
//图片位移
var cat_option_xy = {
  'bottom_left': {
    width: 49,
    height: 70,
    rewidth: 67,
    x: -33,
    y: -35
  },
  'left': {
    width: 76,
    height: 40,
    rewidth: 110,
    x: -56,
    y: -31
  },
  'top_left': {
    width: 46,
    height: 69,
    rewidth: 61,
    x: -32,
    y: -59
  }
}
//创造一个节点
class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
  }
}
//创造多叉树
class MultiwayTree {
  constructor() {
    this._root = null;
  }
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    motto: '点击小圆圈，围住小猫',

    windowHeight: wx.getSystemInfoSync().windowHeight,
    windowWidth: wx.getSystemInfoSync().windowWidth,

  },

  add: function (data, toData, traversal) {
    let node = new Node(data)
    // 第一次添加到根节点
    // 返回值为this，便于链式添加节点
    if (this._root === null) {
      this._root = node;
      return this;
    }
    let parent = null,
      callback = function (node) {
        if (node.data === toData) {
          parent = node;
          return true;
        }
      };
    // 根据遍历方法查找父节点（遍历方法后面会讲到），然后把节点添加到父节点
    // 的children数组里
    // 查找方法contains后面会讲到
    this.contains(callback, traversal);
    if (parent) {
      parent.children.push(node);
      node.parent = parent;
      return this;
    } else {
      throw new Error('Cannot add node to a non-existent parent.');
    }
  },

  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  init: function () {
    circles = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    ];
    dist = [
      [100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0],
      [0, 1, 2, 3, 3, 3, 3, 3, 2, 1, 0],
      [0, 1, 2, 3, 4, 4, 4, 3, 2, 1, 0],
      [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0],
      [0, 1, 2, 3, 4, 4, 4, 3, 2, 1, 0],
      [0, 1, 2, 3, 3, 3, 3, 3, 2, 1, 0],
      [0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    //生成7个随机数
    cat_x = 5;
    cat_y = 5;
    old_cat_x = 5;
    old_cat_y = 5;
    cat_option = 'bottom_left';
    for (var i = 0; i < 6; i++) {
      var first = Math.floor(Math.random() * 11 + 1) - 1;
      var second = Math.floor(Math.random() * 11 + 1) - 1;
      circles[first][second] = 1;
      dist[first][second] = 100;
    }
    circles[5][5] = 2;
    this.draw();
    this.drawCat();
    this.setData({
      motto: '点击小圆圈，围住小猫'
    })
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
          points[j][i].x = x;
          points[j][i].y = y;
        } else {
          ctx.arc(36 + i * 32, 18 + j * 32, 15, 0, 2 * Math.PI)
          var x = 36 + i * 32;
          var y = 18 + j * 32;
          points[j][i].x = x;
          points[j][i].y = y;
        }
        //ctx.setStrokeStyle('#b3d9ff')
        if (circles[j][i] == 0) {
          ctx.setFillStyle('#b3d9ff')
        } else if (circles[j][i] == 1) {
          ctx.setFillStyle('#036')
        } else {
          ctx.setFillStyle('#b3d9ff')
        }
        ctx.fill();
      }
    }

    ctx.draw();
  },

  drawCat: function () {

    var x = points[old_cat_x][old_cat_x].x + cat_option_xy[cat_option].x;
    var y = points[old_cat_x][old_cat_x].y + cat_option_xy[cat_option].y;

    var width = cat_option_xy[cat_option].width;
    var height = cat_option_xy[cat_option].height;

    if (cat_option.indexOf("left") >= 0) {
      
      //左
      cat.drawImage('/images/qmm/' + cat_option + '/1.svg', x, y);
    } else {
      //右
      cat.scale(-1, 1);
      cat.translate(-(x + cat_option_xy[cat_option].rewidth), y);

      cat.drawImage('/images/qmm/' + cat_option + '/1.svg', 0, 0, width, height);
    }

    cat.draw();
  },

  drawMoveCat: function () {
    if (cat_option.indexOf("left") >= 0) {
      var width = cat_option_xy[cat_option].width;
      var height = cat_option_xy[cat_option].height;
      var times = 1;
      var i = setInterval(function () {
        times++;
        if (times > 5) {
          var x = points[cat_x][cat_y].x + cat_option_xy[cat_option].x;
          var y = points[cat_x][cat_y].y + cat_option_xy[cat_option].y;
          // Draw arc
          cat.drawImage('/images/qmm/' + cat_option + '/1.svg', x, y);
          cat.draw();
          clearInterval(i)
        } else {
          var x = points[old_cat_x][old_cat_y].x + cat_option_xy[cat_option].x;
          var y = points[old_cat_x][old_cat_y].y + cat_option_xy[cat_option].y;
          // Draw arc
          cat.drawImage('/images/qmm/' + cat_option + '/' + times + '.svg', x, y);
          cat.draw();
        }
      }, 50);
    } else {
      var new_cat_option = cat_option.replace('right', 'left')
      var width = cat_option_xy[new_cat_option].width;
      var height = cat_option_xy[new_cat_option].height;
      var times = 1;
      var i = setInterval(function () {
        times++;
        if (times > 5) {
          var x = points[cat_x][cat_y].x + cat_option_xy[new_cat_option].x;
          var y = points[cat_x][cat_y].y + cat_option_xy[new_cat_option].y;
          // Draw arc
          cat.scale(-1, 1);
          cat.translate(-(x + cat_option_xy[new_cat_option].rewidth), y);
          cat.drawImage('/images/qmm/' + new_cat_option + '/1.svg', 0, 0, width, height);
          cat.draw();
          clearInterval(i)
        } else {
          var x = points[old_cat_x][old_cat_y].x + cat_option_xy[new_cat_option].x;
          var y = points[old_cat_x][old_cat_y].y + cat_option_xy[new_cat_option].y;
          // Draw arc
          cat.scale(-1, 1);
          cat.translate(-(x + cat_option_xy[new_cat_option].rewidth), y);
          cat.drawImage('/images/qmm/' + new_cat_option + '/' + times + '.svg', 0, 0, width, height);
          cat.draw();
        }
      }, 50);
    }
  },

  drawLeaveCat: function () {
    console.log("start: ")
    console.log(points[cat_x][cat_y]);
    var lr = old_cat_y - cat_y;
    var tb = old_cat_x - cat_x;
    points[cat_x][cat_y].x = points[cat_x][cat_y].x - 54 * lr;
    points[cat_x][cat_y].y = points[cat_x][cat_y].y - 54 * tb;
    console.log("end: ")
    console.log(points[cat_x][cat_y]);
    if (cat_option.indexOf("left") >= 0) {
      var width = cat_option_xy[cat_option].width;
      var height = cat_option_xy[cat_option].height;
      var times = 1;
      var i = setInterval(function () {
        times++;
        if (times > 5) {
          var x = points[cat_x][cat_y].x + cat_option_xy[cat_option].x;
          var y = points[cat_x][cat_y].y + cat_option_xy[cat_option].y;
          // Draw arc
          cat.drawImage('/images/qmm/' + cat_option + '/1.svg', x, y);
          cat.draw();
          clearInterval(i)
        } else {
          var x = points[old_cat_x][old_cat_y].x + cat_option_xy[cat_option].x;
          var y = points[old_cat_x][old_cat_y].y + cat_option_xy[cat_option].y;
          // Draw arc
          cat.drawImage('/images/qmm/' + cat_option + '/' + times + '.svg', x, y);
          cat.draw();
        }
      }, 50);
    } else {
      var new_cat_option = cat_option.replace('right', 'left')
      var width = cat_option_xy[new_cat_option].width;
      var height = cat_option_xy[new_cat_option].height;
      var times = 1;
      var i = setInterval(function () {
        times++;
        if (times > 5) {
          var x = points[cat_x][cat_y].x + cat_option_xy[new_cat_option].x;
          var y = points[cat_x][cat_y].y + cat_option_xy[new_cat_option].y;
          // Draw arc
          cat.scale(-1, 1);
          cat.translate(-(x + cat_option_xy[new_cat_option].rewidth), y);
          cat.drawImage('/images/qmm/' + new_cat_option + '/1.svg', 0, 0, width, height);
          cat.draw();
          clearInterval(i)
        } else {
          var x = points[old_cat_x][old_cat_y].x + cat_option_xy[new_cat_option].x;
          var y = points[old_cat_x][old_cat_y].y + cat_option_xy[new_cat_option].y;
          // Draw arc
          cat.scale(-1, 1);
          cat.translate(-(x + cat_option_xy[new_cat_option].rewidth), y);
          cat.drawImage('/images/qmm/' + new_cat_option + '/' + times + '.svg', 0, 0, width, height);
          cat.draw();
        }
      }, 50);
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.init()
  },

  //随机乱走
  catmove: function () {
    var index = parseInt(Math.random() * 6);
    console.log("cat_x: " + cat_x);
    console.log("cat_y: " + cat_y);
    console.log("index: " + index);
    var catchCat = 0;
    console.log(cat_x + odd[index].x);
    while ((((cat_x + odd[index].x < 0) ||
      (cat_y + odd[index].y < 0) ||
      (cat_x + even[index].x < 0) ||
      (cat_y + even[index].y < 0))
      || (cat_x % 2 == 0 ? circles[cat_x + odd[index].x][cat_y + odd[index].y] != 0
        : circles[cat_x + even[index].x][cat_y + even[index].y] != 0)) && catchCat == 0
    ) {
      index = parseInt(Math.random() * 6);
      var isCatch = 1;
      if (cat_x % 2 == 0) {
        for (var i = 0; i < 6; i++) {
          if (circles[cat_x + odd[i].x][cat_y + odd[i].y] == 0) {
            isCatch = 0;
            break;
          }
        }
      } else {
        for (var i = 0; i < 6; i++) {
          if (circles[cat_x + even[i].x][cat_y + even[i].y] == 0) {
            isCatch = 0;
            break;
          }
        }
      }
      if (isCatch == 1) {
        catchCat = 1;
      }
    }
    if (catchCat == 0) {
      circles[cat_x][cat_y] = 0;
      if (cat_x % 2 == 0) {
        circles[cat_x + odd[index].x][cat_y + odd[index].y] = 2;
        cat_x += odd[index].x;
        cat_y += odd[index].y;
        console.log("odd[index].x: " + odd[index].x);
        console.log("odd[index].y: " + odd[index].y);
      } else {
        circles[cat_x + even[index].x][cat_y + even[index].y] = 2;
        cat_x += even[index].x;
        cat_y += even[index].y;
        console.log("even[index].x: " + even[index].x);
        console.log("even[index].y: " + even[index].y);
      }
    } else {
      this.setData({
        motto: '抓住啦'
      })
    }

  },

  //最短路径
  catmove1: function () {

    var min = 100;
    var to_x = cat_x;
    var to_y = cat_y;
    if (cat_x % 2 == 0) {
      for (var i = 0; i < 6; i++) {
        if (dist[cat_x + odd[i].x][cat_y + odd[i].y] < min) {
          min = dist[cat_x + odd[i].x][cat_y + odd[i].y];
          to_x = cat_x + odd[i].x;
          to_y = cat_y + odd[i].y;
        }
      }
    } else {
      for (var i = 0; i < 6; i++) {
        if (dist[cat_x + even[i].x][cat_y + even[i].y] < min) {
          min = dist[cat_x + even[i].x][cat_y + even[i].y];
          to_x = cat_x + even[i].x;
          to_y = cat_y + even[i].y;
        }
      }
    }
    if (min == 0) {
      circles[cat_x][cat_y] = 0;
      circles[to_x][to_y] = 2;
      old_cat_x = cat_x;
      old_cat_y = cat_y;
      cat_x = to_x;
      cat_y = to_y;
      this.getCatOption();
      this.setData({
        motto: '跑掉啦笨'
      })
    } else if (min == 100) {
      this.setData({
        motto: '抓住啦'
      })
    } else {
      circles[cat_x][cat_y] = 0;
      dist[cat_x][cat_y] += 5;
      circles[to_x][to_y] = 2;
      old_cat_x = cat_x;
      old_cat_y = cat_y;
      cat_x = to_x;
      cat_y = to_y;
      this.getCatOption();
    }
  },

  getCatOption: function () {
    var first = '';
    if (cat_x - old_cat_x == -1) {
      first = 'top'
    } else if (cat_x - old_cat_x == 1) {
      first = 'bottom'
    }
    var second = '';
    if (cat_y - old_cat_y == -1) {
      second = 'left'
    } else if (cat_y - old_cat_y == 1) {
      second = 'right'
    } else {
      if(old_cat_x % 2 == 0){
        second = 'right'
      } else {
        second = 'left'
      }
    }
    if(first != '' && second != ''){
      cat_option = first + "_" + second;
    } else {
      cat_option = first + second;
    }
  },

  click: function (e) {
    if (this.data.motto == '抓住啦' || this.data.motto == '跑掉啦笨') {
      this.init();
    } else {
      //点击的点
      var p1 = e.changedTouches[0];
      var breaked = false;
      var move = false;
      for (var j = 0; j < 11; j++) {
        for (var i = 0; i < 11; i++) {
          //圆心
          var p2 = points[j][i];
          //求两点间的距离
          var dx = Math.abs(p2.x - p1.x);
          var dy = Math.abs(p2.y - p1.y);
          var dis = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
          if (dis < 15) {
            if (circles[j][i] == 1) {
              this.setData({
                motto: '已经是墙啦'
              })
              breaked = true;
              break;
            } else if (circles[j][i] == 2) {
              this.setData({
                motto: '本游戏名叫圈猫猫，不是点猫猫哦'
              })
              breaked = true;
              break;
            } else {
              this.setData({
                motto: '您点击了 （' + j + '，' + i + '）'
              })
              circles[j][i] = 1;
              dist[j][i] = 100;
              this.catmove1();
              move = true;
              breaked = true;
              break;
            }
          }
        }
        if (breaked) {
          break;
        }
      }
    }
    if(move){
      this.draw();
      if (this.data.motto == '跑掉啦笨') {
        this.drawLeaveCat();
      } else {
        this.drawMoveCat();
      }
    }
    
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