const app = getApp();
const db = wx.cloud.database()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    date: "",
    timelog:[],
    lastColor:"blue",
    content:"学习",
    index: 1,
    picker: ['工作', '学习', '阅读', '游戏', '下厨', '健身'],
    color: ["blue", "cyan", "green", "olive", "yellow", "orange"],
    content: "",
    start: '00:00',
    end: '00:00',
    openid: "",
    modalDate:""
  },
  onLoad: function () {
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
    this.setData({
      date: formatDate,
      subDate: month + '-' + day,
      modalDate: formatDate
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
        db.collection('timelog').where({
          _openid: res.result.openid,
          date: formatDate
        }).get({
          success: res => {
            //console.log('[数据库] [查询记录] 成功', res)
            this.setData({
              timelog: res.data,
              lastColor: res.data[res.data.length-1].typeColor
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
    })
  },
  PickerChange(e) {
    this.setData({
      index: e.detail.value
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
  StartChange(e) {
    this.setData({
      start: e.detail.value
    })
  },
  EndChange(e) {
    this.setData({
      end: e.detail.value
    })
  },
  add(e) {
    if (this.data.content == ""){
      wx.showToast({
        icon: 'none',
        title: '请输入备注'
      })
    } else {

      db.collection('timelog').add({
        data: {
          start: this.data.start,
          end: this.data.end,
          typeColor: this.data.color[this.data.index],
          typeName: this.data.picker[this.data.index],
          content: this.data.content,
          date: this.data.modalDate,
          createdTime: new Date(),
          updateTime: new Date()
        },
        success: res => {
          console.log(res)
          this.setData({
            modalName: null
          })
          wx.showToast({
            icon: 'none',
            title: '添加成功'
          })
          db.collection('timelog').where({
            _openid: this.data.openid
          }).get({
            success: res => {
              this.setData({
                timelog: res.data,
                lastColor: res.data[res.data.length - 1].typeColor
              })
            },
            fail: err => {
              console.error('[数据库] [查询记录] 失败：', err)
            }
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
    }
  },
  formNum: function (e) {
    this.setData({
      content: e.detail.value
    })
  },
});
