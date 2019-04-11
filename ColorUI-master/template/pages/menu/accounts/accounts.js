// pages/menu/accounts/accounts.js
//获取应用实例
const app = getApp()
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addDate: "",
    accountid: "",
    money: 0,
    weixin: 0,
    alipay: 0,
    card: 0,
    allcharge: "0.00",
    charge: [],
    openid: "",
    cate: "",
    cateIcon: "",
    ispx: 0,
    viewHeight: 100,
    swiperHeight: 200,
    tagViewHeight: 34,
    windowHeight: '',
    buttonHeight: '',
    iconHeight: '',
    iconTitleHeight: '',
    fontSize: '',
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    today: '',
    index: 0,
    picker: ['现金', '银行卡', '支付宝', '微信'],
    modalDate: '今天',
    date: '1970-01-01',
    screenNum: 0,
    screenStr: 0,
    is_num: 1,
    TabCur: 0,
    scrollLeft: 0,
    type: ["支出", "收入"],
    icon: [{
      name: 'cutlery',
      title: '餐饮',
      isShow: true
    }, {
      name: 'bus',
      title: '交通',
      isShow: true
    }, {
      name: 'mars',
      title: '健身',
      isShow: true
    }, {
      name: 'venus',
      title: '美容',
      isShow: true
    }, {
      name: 'home',
      title: '房租',
      isShow: true
    }, {
      name: 'medkit',
      title: '医疗',
      isShow: true
    }, {
      name: 'shopping-cart',
      title: '购物',
      isShow: true
    }, {
      name: 'book',
      title: '学习',
      isShow: true
    }],
    icon1: [{
      name: 'cutlery',
      title: '餐饮',
      isShow: true
    }, {
      name: 'bus',
      title: '交通',
      isShow: true
    }, {
      name: 'mars',
      title: '健身',
      isShow: true
    }, {
      name: 'venus',
      title: '美容',
      isShow: true
    }, {
      name: 'home',
      title: '房租',
      isShow: true
    }, {
      name: 'medkit',
      title: '医疗',
      isShow: true
    }, {
      name: 'shopping-cart',
      title: '购物',
      isShow: true
    }, {
      name: 'book',
      title: '学习',
      isShow: true
    }, {
      name: 'phone',
      title: '通讯',
      isShow: true
    }, {
      name: 'beer',
      title: '聚餐',
      isShow: true
    }],
    icon2: [{
      name: 'money',
      title: '工资',
      isShow: true
    }],
    icon3: [{
      name: 'goodsnew',
      isShow: true
    }, {
      name: 'medalfill',
      isShow: true
    }, {
      name: 'medal',
      isShow: true
    }, {
      name: 'newsfill',
      isShow: true
    }, {
      name: 'newshotfill',
      isShow: true
    }],
    icon4: [{
      name: 'newshot',
      isShow: true
    }, {
      name: 'news',
      isShow: true
    }, {
      name: 'videofill',
      isShow: true
    }, {
      name: 'video',
      isShow: true
    }, {
      name: 'loading1',
      isShow: true
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        //console.log(res);
        // 屏幕宽度、高度
        //console.log('height=' + res.windowHeight);
        //console.log('width=' + res.windowWidth);
        var viewHeight = res.windowHeight - (0.30 + 0.042 + 0.22 + 0.055 + 0.063) * res.windowHeight - that.data.CustomBar - 30;
        //console.log('viewHeight=' + viewHeight);
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
        var ispx = 0;

        if (res.model.substring(0, 8) == "iPhone X") {
          ispx = 20;
        }

        // 高度,宽度 单位为px
        that.setData({
          windowHeight: res.windowHeight,
          viewHeight: viewHeight,
          tagViewHeight: 0.042 * res.windowHeight,
          swiperHeight: 0.22 * res.windowHeight,
          fontSize: 0.032 * res.windowHeight,
          buttonHeight: 0.03 * res.windowHeight,
          iconHeight: 0.02 * res.windowHeight,
          iconTitleHeight: 0.014 * res.windowHeight,
          windowWidth: res.windowWidth,
          today: formatDate,
          ispx: ispx
        })

      }
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
        // 查询当前用户当天的 charge
        // 今天 this.data.today
        db.collection('charge').where({
          _openid: res.result.openid,
          charge_time: this.data.today
        }).get({
          success: res => {
            var all = 0;
            for (var i = 0; i < res.data.length; i++) {
              all += res.data[i].charge_num;
            }
            this.setData({
              date: this.data.today,
              addDate: this.data.today,
              charge: res.data,
              allcharge: all == 0 ? "0.00" : all
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
    this.setData({
      modalName: e.currentTarget.dataset.target
    })

  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  btnClick: function (event) {
    console.log('你按得键是' + event.target.id);
    console.log('上一次' + this.data.is_num);
    var op = '';
    var data = 0;
    var last_is_num = this.data.is_num;
    //这次输入的是什么
    if (event.target.id == '9' || event.target.id == '8' || event.target.id == '7' || event.target.id == '6' || event.target.id == '5' || event.target.id == '4' || event.target.id == '3' || event.target.id == '2' || event.target.id == '1' || event.target.id == '0') {
      data = event.target.id;
      this.setData({
        is_num: 1
      });
    }
    if (event.target.id == '+' || event.target.id == '-' || event.target.id == '.') {
      op = event.target.id;
      this.setData({
        is_num: 0
      });
    }
    if (last_is_num == 1) {
      //如果上一次是数字
      if (op == '') {
        //这一次是数字
        if (this.data.screenNum != 0) {
          this.setData({
            screenNum: this.data.screenNum + data
          });
          this.setData({
            screenStr: this.data.screenStr + data
          });
        } else {
          this.setData({
            screenNum: data
          });
          this.setData({
            screenStr: data
          });
        }
      } else {
        this.setData({
          screenNum: this.data.screenNum + op
        });
        this.setData({
          screenStr: this.data.screenStr + ',' + op + ','
        });
      }
    } else {
      //上次不是数字
      if (data != 0) {

        //这一次是数字
        this.setData({
          screenNum: this.data.screenNum + data
        });
        this.setData({
          screenStr: this.data.screenStr + data
        });
      } else {
        return;
      }
    }
    //console.log(op+'aaaaa'+data);
    //console.log('现在是'+this.data.is_num);
    //console.log('screenNum' + this.data.screenNum);
    //console.log(this.data.screenStr);
  },
  btnClose: function (event) {
    // console.log(this.data.modalDate);
    // console.log(this.data.screenNum);
    // console.log(this.data.cate);
    // console.log(this.data.cateIcon);


    if (this.data.screenNum == 0) {
      console.log("请输入金额");
    }
    else if (this.data.cate == "") {
      console.log("请选择分类");
    } else {
      var type = "";
      var index = this.data.index;
      if (index == 0) {
        type = "money";
      }
      if (index == 1) {
        type = "card";
      }
      if (index == 2) {
        type = "alipay";
      }
      if (index == 3) {
        type = "weixin";
      }
      db.collection('charge').add({
        data: {
          cate_icon: this.data.cateIcon,
          charge_num: parseFloat(this.data.screenNum),
          charge_time: this.data.addDate,
          cate_name: this.data.cate,
          charge_type: type
        },
        success: res => {
          //console.log("[数据库] [添加记录] 成功: ", res)
          if (index == 0) {
            db.collection('account').doc(this.data.accountid).update({
              data: {
                money_num: this.data.money - parseFloat(this.data.screenNum)
              },
              success: res => {
                //console.log("[数据库] [更改记录] 成功: ", res)
              },
              fail: err => {
                //console.log("[数据库] [更改记录] 失败: ", err)
              }
            });
          }
          if (index == 1) {
            db.collection('account').doc(this.data.accountid).update({
              data: {
                card_num: this.data.card - parseFloat(this.data.screenNum)
              },
              success: res => {
                //console.log("[数据库] [添加记录] 成功: ", res)
              }
            });
          }
          if (index == 2) {
            db.collection('account').doc(this.data.accountid).update({
              data: {
                alipay_num: this.data.alipay - parseFloat(this.data.screenNum)
              },
              success: res => {
                //console.log("[数据库] [添加记录] 成功: ", res)
              }
            });
          }
          if (index == 3) {
            db.collection('account').doc(this.data.accountid).update({
              data: {
                weixin_num: this.data.weixin - parseFloat(this.data.screenNum)
              },
              success: res => {
                //console.log("[数据库] [添加记录] 成功: ", res)
              }
            });
          }
          // 查询当前用户当天的 charge
          // 今天 this.data.today
          db.collection('charge').where({
            _openid: this.data.openid,
            charge_time: this.data.date
          }).get({
            success: res => {
              var all = 0;
              for (var i = 0; i < res.data.length; i++) {
                all += res.data[i].charge_num;
              }
              this.setData({
                charge: res.data,
                allcharge: all == 0 ? "0.00" : all
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
        }
      });
    }

    this.setData({
      modalName: null
    })
  },
  btnJs: function () {
    // console.log(this.data.screenNum);
    // console.log(this.data.screenStr);
    // var result = 0;
    // var strs = new Array(); //定义一数组 
    // strs = this.data.screenStr.split(","); //字符分割
    // for (var i = 0; i < strs.length; i++) {
    //   //console.log(strs[i] + i); //分割后的字符输出
    //   if (strs[i] == '+') {
    //     result = parseInt(strs[i - 1]) + parseInt(strs[i + 1]);
    //   }
    //   if (strs[i] == '-') {
    //     result = strs[i - 1] - strs[i + 1];
    //   }
    //   if (strs[i] == '*') {
    //     result = strs[i - 1] * strs[i + 1];
    //   }
    //   if (strs[i] == '/') {
    //     result = strs[i - 1] / strs[i + 1];
    //   }
    // }
    // console.log('result:' + result);
    // this.setData({
    //   screenNum: result
    // });
    // this.setData({
    //   screenStr: result
    // });

  },
  btnClear: function () {
    //把标记恢复成默认状态
    this.setData({
      screenNum: 0
    });
    this.setData({
      screenStr: 0
    });
    this.setData({
      is_num: 1
    });
  },
  btnBack: function () {
    var num = this.data.screenNum.toString();
    this.setData({
      screenNum: num.length == 1 ? 0 : parseFloat(num.substring(0, num.length - 1))
    });
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
    db.collection('charge').where({
      _openid: this.data.openid,
      charge_time: this.data.date

    }).get({
      success: res => {
        var all = 0;
        for (var i = 0; i < res.data.length; i++) {
          all += res.data[i].charge_num;
        }
        this.setData({
          charge: res.data,
          allcharge: all == 0 ? "0.00" : all
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
  },
  DateLast(e) {

    //减一天
    var timestamp = Date.parse(new Date(this.data.date));
    timestamp = timestamp / 1000;
    timestamp -= 86400;//减一天
    var newTime = new Date(timestamp * 1000);
    var y = newTime.getFullYear();
    var m = newTime.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = newTime.getDate();
    d = d < 10 ? ('0' + d) : d;

    this.setData({
      date: y + '-' + m + '-' + d
    })
    // 今天 this.data.today
    db.collection('charge').where({
      _openid: this.data.openid,
      charge_time: this.data.date

    }).get({
      success: res => {
        var all = 0;
        for (var i = 0; i < res.data.length; i++) {
          all += res.data[i].charge_num;
        }
        this.setData({
          charge: res.data,
          allcharge: all == 0 ? "0.00" : all
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
  },
  DateNext(e) {

    //加一天
    var timestamp = Date.parse(new Date(this.data.date));
    timestamp = timestamp / 1000;
    timestamp += 86400;//加一天
    var newTime = new Date(timestamp * 1000);
    var y = newTime.getFullYear();
    var m = newTime.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = newTime.getDate();
    d = d < 10 ? ('0' + d) : d;

    this.setData({
      date: y + '-' + m + '-' + d
    })

    // 今天 this.data.today
    db.collection('charge').where({
      _openid: this.data.openid,
      charge_time: this.data.date

    }).get({
      success: res => {
        var all = 0;
        for (var i = 0; i < res.data.length; i++) {
          all += res.data[i].charge_num;
        }
        this.setData({
          charge: res.data,
          allcharge: all == 0 ? "0.00" : all
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
  },
  DateModalChange(e) {
    if (e.detail.value == this.data.today) {
      this.setData({
        modalDate: '今天',
        addDate: e.detail.value
      })
    } else if (parseInt(e.detail.value.split('-')[2]) == parseInt(this.data.today.split('-')[2]) - 1) {
      this.setData({
        modalDate: '昨天',
        addDate: e.detail.value
      })
    } else {
      this.setData({
        modalDate: e.detail.value,
        addDate: e.detail.value
      })
    }
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },
  cateClick(e) {
    this.setData({
      cate: this.data.icon1[e.currentTarget.dataset.id].title,
      cateIcon: this.data.icon1[e.currentTarget.dataset.id].name
    })
  }
})