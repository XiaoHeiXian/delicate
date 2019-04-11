// pages/menu/timeline/statistics.js
import wxCharts from '../../../utils/wxcharts-min.js'
const app = getApp();
const colors = ['#0081ff', '#1cbbb4', '#39b54a', '#8dc63f', '#fbbd08', '#f37b1d', '#e54d42'];
var dateChart;
var weekChart;
var monthChart;
var yearChart;
var allChart;
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    scrollLeft: 0,
    type: ["按日", "按周", "按月", "按年", "全部"],
    picker: ['工作', '学习', '阅读', '游戏', '下厨', '健身'],
    color: ["blue", "cyan", "green", "olive", "yellow", "orange"],
    dateLog: [],
    weekLog: [],
    monthLog: [],
    yearLog: [],
    allLog: [],
    height: 436,
    date:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    // var h = now.getHours(); 
    // var m = now.getMinutes(); 
    // var s = now.getSeconds(); 
    var formatDate = year + '-' + month + '-' + day;

    console.log(formatDate)

    var that = this
    db.collection('timelog').where({
      date: formatDate
    }).get({
      success: res => {
        var dateLog = [];
        var mins = [];
        var all = 0;
        for (var i = 0; i < res.data.length; i++) {
          var min1 = parseInt(res.data[i].start.substr(0, 2)) * 60 + parseInt(res.data[i].start.substr(3, 2));
          var min2 = parseInt(res.data[i].end.substr(0, 2)) * 60 + parseInt(res.data[i].end.substr(3, 2)); 
          var min = min2 - min1;
          mins.push(min);
          all += min;
        }
        for(var i = 0; i < 6; i++){
          var object = {};
          object.name = this.data.picker[i];
          object.data = 0;
          object.stroke = false;
          object.color = colors[i];
          object.colorName = this.data.color[i];
          for (var j = 0; j < mins.length; j++) {
            if (res.data[j].typeColor == this.data.color[i]){
              object.data += mins[j];
            }
          }
          object.rate = (object.data * 100 / all).toFixed(2);
          if (mins.length == 0){
            object.rate = 0;
            object.data = 0;
            object.color = "#fff";
          }
          dateLog.push(object);
        }

        if (mins.length == 0) {
          all = "0分钟";
        }
       
        this.setData({
          dateLog: dateLog,
          date: formatDate
        })

        dateChart = new wxCharts({
          animation: true,
          canvasId: 'ringCanvas1',
          type: 'ring',
          extra: {
            ringWidth: 25,
            pie: {
              offsetAngle: -45
            }
          },
          title: {
            name: all,
            color: '#7cb5ec',
            fontSize: 25
          },
          subtitle: {
            name: '总分钟数',
            color: '#666666',
            fontSize: 15
          },
          series: dateLog,
          disablePieStroke: true,
          width: 200,
          height: 200,
          dataLabel: false,
          legend: false,
          padding: 0
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

    let chart2 = new wxCharts({
      animation: true,
      canvasId: 'ringCanvas2',
      type: 'ring',
      extra: {
        ringWidth: 25,
        pie: {
          offsetAngle: -45
        }
      },
      title: {
        name: '70%',
        color: '#7cb5ec',
        fontSize: 25
      },
      subtitle: {
        name: '开发进度',
        color: '#666666',
        fontSize: 15
      },
      series: [{
        name: '成交量1',
        data: 15,
        stroke: false,
        color: colors[0],

      }, {
        name: '成交量2',
        data: 35,
        stroke: false,
        color: colors[1]
      }, {
        name: '成交量3',
        data: 78,
        stroke: false,
        color: colors[2]
      }, {
        name: '成交量4',
        data: 63,
        stroke: false,
        color: colors[3]
      }, {
        name: '成交量5',
        data: 63,
        stroke: false,
        color: colors[4]
      }, {
        name: '成交量6',
        data: 63,
        stroke: false,
        color: colors[5]
      }, {
        name: '成交量7',
        data: 78,
        stroke: false,
        color: colors[6]
      }, {
        name: '成交量8',
        data: 63,
        stroke: false,
        color: colors[7]
      }, {
        name: '成交量9',
        data: 63,
        stroke: false,
        color: colors[8]
      }, {
        name: '成交量10',
        data: 63,
        stroke: false,
        color: colors[9]
      }],
      disablePieStroke: true,
      width: 200,
      height: 200,
      dataLabel: false,
      legend: false,
      padding: 0
    })
    let chart3 = new wxCharts({
      animation: true,
      canvasId: 'ringCanvas3',
      type: 'ring',
      extra: {
        ringWidth: 25,
        pie: {
          offsetAngle: -45
        }
      },
      title: {
        name: '70%',
        color: '#7cb5ec',
        fontSize: 25
      },
      subtitle: {
        name: '开发进度',
        color: '#666666',
        fontSize: 15
      },
      series: [{
        name: '成交量1',
        data: 15,
        stroke: false,
        color: colors[0],

      }, {
        name: '成交量2',
        data: 35,
        stroke: false,
        color: colors[1]
      }, {
        name: '成交量3',
        data: 78,
        stroke: false,
        color: colors[2]
      }, {
        name: '成交量4',
        data: 63,
        stroke: false,
        color: colors[3]
      }, {
        name: '成交量5',
        data: 63,
        stroke: false,
        color: colors[4]
      }, {
        name: '成交量6',
        data: 63,
        stroke: false,
        color: colors[5]
      }, {
        name: '成交量7',
        data: 78,
        stroke: false,
        color: colors[6]
      }, {
        name: '成交量8',
        data: 63,
        stroke: false,
        color: colors[7]
      }, {
        name: '成交量9',
        data: 63,
        stroke: false,
        color: colors[8]
      }, {
        name: '成交量10',
        data: 63,
        stroke: false,
        color: colors[9]
      }],
      disablePieStroke: true,
      width: 200,
      height: 200,
      dataLabel: false,
      legend: false,
      padding: 0
    })
    let chart4 = new wxCharts({
      animation: true,
      canvasId: 'ringCanvas4',
      type: 'ring',
      extra: {
        ringWidth: 25,
        pie: {
          offsetAngle: -45
        }
      },
      title: {
        name: '70%',
        color: '#7cb5ec',
        fontSize: 25
      },
      subtitle: {
        name: '开发进度',
        color: '#666666',
        fontSize: 15
      },
      series: [{
        name: '成交量1',
        data: 15,
        stroke: false,
        color: colors[0],

      }, {
        name: '成交量2',
        data: 35,
        stroke: false,
        color: colors[1]
      }, {
        name: '成交量3',
        data: 78,
        stroke: false,
        color: colors[2]
      }, {
        name: '成交量4',
        data: 63,
        stroke: false,
        color: colors[3]
      }, {
        name: '成交量5',
        data: 63,
        stroke: false,
        color: colors[4]
      }, {
        name: '成交量6',
        data: 63,
        stroke: false,
        color: colors[5]
      }, {
        name: '成交量7',
        data: 78,
        stroke: false,
        color: colors[6]
      }, {
        name: '成交量8',
        data: 63,
        stroke: false,
        color: colors[7]
      }, {
        name: '成交量9',
        data: 63,
        stroke: false,
        color: colors[8]
      }, {
        name: '成交量10',
        data: 63,
        stroke: false,
        color: colors[9]
      }],
      disablePieStroke: true,
      width: 200,
      height: 200,
      dataLabel: false,
      legend: false,
      padding: 0
    })
    let chart5 = new wxCharts({
      animation: true,
      canvasId: 'ringCanvas5',
      type: 'ring',
      extra: {
        ringWidth: 25,
        pie: {
          offsetAngle: -45
        }
      },
      title: {
        name: '70%',
        color: '#7cb5ec',
        fontSize: 25
      },
      subtitle: {
        name: '开发进度',
        color: '#666666',
        fontSize: 15
      },
      series: [{
        name: '成交量1',
        data: 15,
        stroke: false,
        color: colors[0],

      }, {
        name: '成交量2',
        data: 35,
        stroke: false,
        color: colors[1]
      }, {
        name: '成交量3',
        data: 78,
        stroke: false,
        color: colors[2]
      }, {
        name: '成交量4',
        data: 63,
        stroke: false,
        color: colors[3]
      }, {
        name: '成交量5',
        data: 63,
        stroke: false,
        color: colors[4]
      }, {
        name: '成交量6',
        data: 63,
        stroke: false,
        color: colors[5]
      }, {
        name: '成交量7',
        data: 78,
        stroke: false,
        color: colors[6]
      }, {
        name: '成交量8',
        data: 63,
        stroke: false,
        color: colors[7]
      }, {
        name: '成交量9',
        data: 63,
        stroke: false,
        color: colors[8]
      }, {
        name: '成交量10',
        data: 63,
        stroke: false,
        color: colors[9]
      }],
      disablePieStroke: true,
      width: 200,
      height: 200,
      dataLabel: false,
      legend: false,
      padding: 0
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
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60,
      cate: ""
    })
    var id = e.currentTarget.dataset.id;
    //console.log(id);

  },
  //swiper切换时会调用
  pagechange: function (e) {
    if ("touch" === e.detail.source) {
      let currentPageIndex = this.data.TabCur
      currentPageIndex = (currentPageIndex + 1) % 2
      this.setData({
        TabCur: currentPageIndex,
        cate: ""
      })
    }
  },
})