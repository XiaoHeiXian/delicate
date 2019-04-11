import wxCharts from '../../../../utils/wxcharts-min.js'
// pages/menu/accounts/charts/charts.js
const app = getApp()
//连接数据库
const db = wx.cloud.database()
const colors = ['#e54d42', '#f37b1d', '#fbbd08', '#8dc63f', '#39b54a', '#1cbbb4', '#0081ff', '#6739b6', '#9c26b0', '#e03997'];
var chart;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList,
    TabCur: 0,
    scrollLeft: 0,
    type: ["类别", "标签"],
    date: "2019-03",
    charge: [],
    height: 256
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this
    db.collection('charge').where({
      //使用正则查询，实现对搜索的模糊查询
      charge_time: db.RegExp({
        regexp: that.data.date,
        //从搜索栏中获取的value作为规则进行匹配。
        options: 'i',
        //大小写不区分
      })
    }).get({
      success: res => {
        var all = 0;
        var charge = [];
        var charge_cate = [];
        for (var i = 0; i < res.data.length; i++) {
          all += res.data[i].charge_num;
          var status = 0;
          for (var j = 0; j < charge_cate.length; j++) {
            if (res.data[i].cate_name == charge_cate[j]) {
              status = 1;
              break;
            }
          }
          if (status == 0) {
            charge_cate.push(res.data[i].cate_name)
          }
        }
        var height = 0;
        for (var i = 0; i < charge_cate.length; i++) {
          var object = {};
          object.name = charge_cate[i];
          object.data = 0;
          object.stroke = false;
          object.color = colors[i];
          object.colorName = this.data.ColorList[i].name;
          height += 30;
          for (var j = 0; j < res.data.length; j++) {
            if (res.data[j].cate_name == charge_cate[i]) {
              object.data += res.data[j].charge_num;
            }
          }
          object.rate = (object.data * 100 / all).toFixed(2);
          object.name = object.name;
          charge.push(object);
        }

        this.setData({
          charge: charge,
          height: this.data.height + height
        })

        chart = new wxCharts({
          animation: true,
          canvasId: 'ringCanvas',
          type: 'ring',
          extra: {
            ringWidth: 25,
            pie: {
              offsetAngle: -45
            }
          },
          title: {
            name: all.toFixed(2),
            color: '#7cb5ec',
            fontSize: 25
          },
          subtitle: {
            name: '本月支出',
            color: '#666666',
            fontSize: 15
          },
          series: charge,
          disablePieStroke: true,
          width: 200,
          height: 200,
          dataLabel: false,
          legend: false,
          padding: 0
        })
        let chart1 = new wxCharts({
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
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
    var that = this
    db.collection('charge').where({
      //使用正则查询，实现对搜索的模糊查询
      charge_time: db.RegExp({
        regexp: that.data.date,
        //从搜索栏中获取的value作为规则进行匹配。
        options: 'i',
        //大小写不区分
      })
    }).get({
      success: res => {
        var all = 0;
        var charge = [];
        var charge_cate = [];
        for (var i = 0; i < res.data.length; i++) {
          all += res.data[i].charge_num;
          var status = 0;
          for (var j = 0; j < charge_cate.length; j++) {
            if (res.data[i].cate_name == charge_cate[j]) {
              status = 1;
              break;
            }
          }
          if (status == 0) {
            charge_cate.push(res.data[i].cate_name)
          }
        }
        var height = 0;
        for (var i = 0; i < charge_cate.length; i++) {
          var object = {};
          object.name = charge_cate[i];
          object.data = 0;
          object.stroke = false;
          object.color = colors[i];
          object.colorName = this.data.ColorList[i].name;
          height += 30;
          for (var j = 0; j < res.data.length; j++) {
            if (res.data[j].cate_name == charge_cate[i]) {
              object.data += res.data[j].charge_num;
            }
          }
          object.rate = (object.data * 100 / all).toFixed(2);
          object.name = object.name;
          charge.push(object);
        }

        this.setData({
          charge: charge,
          height: this.data.height + height
        })

        if (charge.length == 0) {

          var object = {};
          object.name = "支出";
          object.data = 0;
          object.stroke = false;
          object.color = "#0081ff";
          object.colorName = colors[6];

          charge.push(object);
          charge.push(object);


          console.log(charge);

          chart.updateData({
            series: charge,
            title: {
              name: "0.00",
              color: '#7cb5ec',
              fontSize: 25
            },
            subtitle: {
              name: '本月支出',
              color: '#666666',
              fontSize: 15
            }
          })

        } else {
          chart.updateData({
            series: charge
          })
        }

      }
    })
  },
  DateLast(e) {

    var y = parseInt(this.data.date.split('-')[0]);

    var m = parseInt(this.data.date.split('-')[1]) - 1;

    if (m == 0) {
      y = y - 1;
      m = 12;
    }

    if (m < 10) {
      this.setData({
        date: y + '-0' + m
      })
    } else {
      this.setData({
        date: y + '-' + m
      })
    }

    var that = this
    db.collection('charge').where({
      //使用正则查询，实现对搜索的模糊查询
      charge_time: db.RegExp({
        regexp: that.data.date,
        //从搜索栏中获取的value作为规则进行匹配。
        options: 'i',
        //大小写不区分
      })
    }).get({
      success: res => {
        var all = 0;
        var charge = [];
        var charge_cate = [];
        for (var i = 0; i < res.data.length; i++) {
          all += res.data[i].charge_num;
          var status = 0;
          for (var j = 0; j < charge_cate.length; j++) {
            if (res.data[i].cate_name == charge_cate[j]) {
              status = 1;
              break;
            }
          }
          if (status == 0) {
            charge_cate.push(res.data[i].cate_name)
          }
        }
        var height = 0;
        for (var i = 0; i < charge_cate.length; i++) {
          var object = {};
          object.name = charge_cate[i];
          object.data = 0;
          object.stroke = false;
          object.color = colors[i];
          object.colorName = this.data.ColorList[i].name;
          height += 30;
          for (var j = 0; j < res.data.length; j++) {
            if (res.data[j].cate_name == charge_cate[i]) {
              object.data += res.data[j].charge_num;
            }
          }
          object.rate = (object.data * 100 / all).toFixed(2);
          object.name = object.name;
          charge.push(object);
        }

        this.setData({
          charge: charge,
          height: this.data.height + height
        })

        if (charge.length == 0) {

          var object = {};
          object.name = "支出";
          object.data = 0;
          object.stroke = false;
          object.color = "#0081ff";
          object.colorName = colors[6];

          charge.push(object);
          charge.push(object);


          console.log(charge);

          chart.updateData({
            series: charge,
            title: {
              name: "0.00",
              color: '#7cb5ec',
              fontSize: 25
            },
            subtitle: {
              name: '本月支出',
              color: '#666666',
              fontSize: 15
            }
          })

        } else {
          chart.updateData({
            series: charge
          })
        }
      }
    })
  },
  DateNext(e) {

    var y = parseInt(this.data.date.split('-')[0]);

    var m = parseInt(this.data.date.split('-')[1]) + 1;

    if (m == 13) {
      y = y + 1;
      m = 1;
    }

    if (m < 10) {
      this.setData({
        date: y + '-0' + m
      })
    } else {
      this.setData({
        date: y + '-' + m
      })
    }

    var that = this
    db.collection('charge').where({
      //使用正则查询，实现对搜索的模糊查询
      charge_time: db.RegExp({
        regexp: that.data.date,
        //从搜索栏中获取的value作为规则进行匹配。
        options: 'i',
        //大小写不区分
      })
    }).get({
      success: res => {
        var all = 0;
        var charge = [];
        var charge_cate = [];
        for (var i = 0; i < res.data.length; i++) {
          all += res.data[i].charge_num;
          var status = 0;
          for (var j = 0; j < charge_cate.length; j++) {
            if (res.data[i].cate_name == charge_cate[j]) {
              status = 1;
              break;
            }
          }
          if (status == 0) {
            charge_cate.push(res.data[i].cate_name)
          }
        }
        var height = 0;
        for (var i = 0; i < charge_cate.length; i++) {
          var object = {};
          object.name = charge_cate[i];
          object.data = 0;
          object.stroke = false;
          object.color = colors[i];
          object.colorName = this.data.ColorList[i].name;
          height += 30;
          for (var j = 0; j < res.data.length; j++) {
            if (res.data[j].cate_name == charge_cate[i]) {
              object.data += res.data[j].charge_num;
            }
          }
          object.rate = (object.data * 100 / all).toFixed(2);
          object.name = object.name;
          charge.push(object);
        }

        this.setData({
          charge: charge,
          height: this.data.height + height
        })

        if (charge.length == 0) {

          var object = {};
          object.name = "支出";
          object.data = 0;
          object.stroke = false;
          object.color = "#0081ff";
          object.colorName = colors[6];

          charge.push(object);
          charge.push(object);


          console.log(charge);

          chart.updateData({
            series: charge,
            title: {
              name: "0.00",
              color: '#7cb5ec',
              fontSize: 25
            },
            subtitle: {
              name: '本月支出',
              color: '#666666',
              fontSize: 15
            }
          })

        } else {
          chart.updateData({
            series: charge
          })
        }

      }
    })
  },
})