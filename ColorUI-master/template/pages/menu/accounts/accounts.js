// pages/menu/accounts/accounts.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    date: '2018-12-25',
    screenNum: 0,
    screenStr: 0,
    is_num: 1,
    TabCur: 0,
    scrollLeft: 0,
    type: ["支出","收入","转账","预购"],
    icon: [{
      name: 'appreciate',
      isShow: true
    }, {
      name: 'check',
      isShow: true
    }, {
      name: 'close',
      isShow: true
    }, {
      name: 'edit',
      isShow: true
    }, {
      name: 'emoji',
      isShow: true
    }, {
      name: 'favorfill',
      isShow: true
    }, {
      name: 'favor',
      isShow: true
    }, {
      name: 'loading',
      isShow: true
    }, {
      name: 'locationfill',
      isShow: true
    }, {
      name: 'location',
      isShow: true
    }, {
      name: 'phone',
      isShow: true
    }, {
      name: 'roundcheckfill',
      isShow: true
    }, {
      name: 'roundcheck',
      isShow: true
    }, {
      name: 'roundclosefill',
      isShow: true
    }, {
      name: 'roundclose',
      isShow: true
    }, {
      name: 'roundrightfill',
      isShow: true
    }, {
      name: 'roundright',
      isShow: true
    }, {
      name: 'search',
      isShow: true
    }, {
      name: 'taxi',
      isShow: true
    }, {
      name: 'timefill',
      isShow: true
    }, {
      name: 'time',
      isShow: true
    }, {
      name: 'unfold',
      isShow: true
    }, {
      name: 'warnfill',
      isShow: true
    }, {
      name: 'warn',
      isShow: true
    }, {
      name: 'camerafill',
      isShow: true
    }, {
      name: 'camera',
      isShow: true
    }, {
      name: 'commentfill',
      isShow: true
    }, {
      name: 'comment',
      isShow: true
    }, {
      name: 'likefill',
      isShow: true
    }, {
      name: 'like',
      isShow: true
    }, {
      name: 'notificationfill',
      isShow: true
    }, {
      name: 'notification',
      isShow: true
    }, {
      name: 'order',
      isShow: true
    }, {
      name: 'samefill',
      isShow: true
    }, {
      name: 'same',
      isShow: true
    }, {
      name: 'deliver',
      isShow: true
    }, {
      name: 'evaluate',
      isShow: true
    }, {
      name: 'pay',
      isShow: true
    }, {
      name: 'send',
      isShow: true
    }, {
      name: 'shop',
      isShow: true
    }, {
      name: 'ticket',
      isShow: true
    }, {
      name: 'back',
      isShow: true
    }, {
      name: 'cascades',
      isShow: true
    }, {
      name: 'discover',
      isShow: true
    }, {
      name: 'list',
      isShow: true
    }, {
      name: 'more',
      isShow: true
    }, {
      name: 'scan',
      isShow: true
    }, {
      name: 'settings',
      isShow: true
    }, {
      name: 'questionfill',
      isShow: true
    }, {
      name: 'question',
      isShow: true
    }, {
      name: 'shopfill',
      isShow: true
    }, {
      name: 'form',
      isShow: true
    }, {
      name: 'pic',
      isShow: true
    }, {
      name: 'filter',
      isShow: true
    }, {
      name: 'footprint',
      isShow: true
    }, {
      name: 'top',
      isShow: true
    }, {
      name: 'pulldown',
      isShow: true
    }, {
      name: 'pullup',
      isShow: true
    }, {
      name: 'right',
      isShow: true
    }, {
      name: 'refresh',
      isShow: true
    }, {
      name: 'moreandroid',
      isShow: true
    }, {
      name: 'deletefill',
      isShow: true
    }, {
      name: 'refund',
      isShow: true
    }, {
      name: 'cart',
      isShow: true
    }, {
      name: 'qrcode',
      isShow: true
    }, {
      name: 'remind',
      isShow: true
    }, {
      name: 'delete',
      isShow: true
    }, {
      name: 'profile',
      isShow: true
    }, {
      name: 'home',
      isShow: true
    }, {
      name: 'cartfill',
      isShow: true
    }, {
      name: 'discoverfill',
      isShow: true
    }, {
      name: 'homefill',
      isShow: true
    }, {
      name: 'message',
      isShow: true
    }, {
      name: 'addressbook',
      isShow: true
    }, {
      name: 'link',
      isShow: true
    }, {
      name: 'lock',
      isShow: true
    }, {
      name: 'unlock',
      isShow: true
    }, {
      name: 'vip',
      isShow: true
    }, {
      name: 'weibo',
      isShow: true
    }, {
      name: 'activity',
      isShow: true
    }, {
      name: 'friendaddfill',
      isShow: true
    }, {
      name: 'friendadd',
      isShow: true
    }, {
      name: 'friendfamous',
      isShow: true
    }, {
      name: 'friend',
      isShow: true
    }, {
      name: 'goods',
      isShow: true
    }, {
      name: 'selection',
      isShow: true
    }, {
      name: 'explore',
      isShow: true
    }, {
      name: 'present',
      isShow: true
    }, {
      name: 'squarecheckfill',
      isShow: true
    }, {
      name: 'square',
      isShow: true
    }, {
      name: 'squarecheck',
      isShow: true
    }, {
      name: 'round',
      isShow: true
    }, {
      name: 'roundaddfill',
      isShow: true
    }, {
      name: 'roundadd',
      isShow: true
    }, {
      name: 'add',
      isShow: true
    }, {
      name: 'notificationforbidfill',
      isShow: true
    }, {
      name: 'explorefill',
      isShow: true
    }, {
      name: 'fold',
      isShow: true
    }, {
      name: 'game',
      isShow: true
    }, {
      name: 'redpacket',
      isShow: true
    }, {
      name: 'selectionfill',
      isShow: true
    }, {
      name: 'similar',
      isShow: true
    }, {
      name: 'appreciatefill',
      isShow: true
    }, {
      name: 'infofill',
      isShow: true
    }, {
      name: 'info',
      isShow: true
    }, {
      name: 'forwardfill',
      isShow: true
    }, {
      name: 'forward',
      isShow: true
    }, {
      name: 'rechargefill',
      isShow: true
    }, {
      name: 'recharge',
      isShow: true
    }, {
      name: 'vipcard',
      isShow: true
    }, {
      name: 'voice',
      isShow: true
    }, {
      name: 'voicefill',
      isShow: true
    }, {
      name: 'friendfavor',
      isShow: true
    }, {
      name: 'wifi',
      isShow: true
    }, {
      name: 'share',
      isShow: true
    }, {
      name: 'wefill',
      isShow: true
    }, {
      name: 'we',
      isShow: true
    }, {
      name: 'lightauto',
      isShow: true
    }, {
      name: 'lightforbid',
      isShow: true
    }, {
      name: 'lightfill',
      isShow: true
    }, {
      name: 'camerarotate',
      isShow: true
    }, {
      name: 'light',
      isShow: true
    }, {
      name: 'barcode',
      isShow: true
    }, {
      name: 'flashlightclose',
      isShow: true
    }, {
      name: 'flashlightopen',
      isShow: true
    }, {
      name: 'searchlist',
      isShow: true
    }, {
      name: 'service',
      isShow: true
    }, {
      name: 'sort',
      isShow: true
    }, {
      name: 'down',
      isShow: true
    }, {
      name: 'mobile',
      isShow: true
    }, {
      name: 'mobilefill',
      isShow: true
    }, {
      name: 'copy',
      isShow: true
    }, {
      name: 'countdownfill',
      isShow: true
    }, {
      name: 'countdown',
      isShow: true
    }, {
      name: 'noticefill',
      isShow: true
    }, {
      name: 'notice',
      isShow: true
    }, {
      name: 'upstagefill',
      isShow: true
    }, {
      name: 'upstage',
      isShow: true
    }, {
      name: 'babyfill',
      isShow: true
    }, {
      name: 'baby',
      isShow: true
    }, {
      name: 'brandfill',
      isShow: true
    }, {
      name: 'brand',
      isShow: true
    }, {
      name: 'choicenessfill',
      isShow: true
    }, {
      name: 'choiceness',
      isShow: true
    }, {
      name: 'clothesfill',
      isShow: true
    }, {
      name: 'clothes',
      isShow: true
    }, {
      name: 'creativefill',
      isShow: true
    }, {
      name: 'creative',
      isShow: true
    }, {
      name: 'female',
      isShow: true
    }, {
      name: 'keyboard',
      isShow: true
    }, {
      name: 'male',
      isShow: true
    }, {
      name: 'newfill',
      isShow: true
    }, {
      name: 'new',
      isShow: true
    }, {
      name: 'pullleft',
      isShow: true
    }, {
      name: 'pullright',
      isShow: true
    }, {
      name: 'rankfill',
      isShow: true
    }, {
      name: 'rank',
      isShow: true
    }, {
      name: 'bad',
      isShow: true
    }, {
      name: 'cameraadd',
      isShow: true
    }, {
      name: 'focus',
      isShow: true
    }, {
      name: 'friendfill',
      isShow: true
    }, {
      name: 'cameraaddfill',
      isShow: true
    }, {
      name: 'apps',
      isShow: true
    }, {
      name: 'paintfill',
      isShow: true
    }, {
      name: 'paint',
      isShow: true
    }, {
      name: 'picfill',
      isShow: true
    }, {
      name: 'refresharrow',
      isShow: true
    }, {
      name: 'colorlens',
      isShow: true
    }, {
      name: 'markfill',
      isShow: true
    }, {
      name: 'mark',
      isShow: true
    }, {
      name: 'presentfill',
      isShow: true
    }, {
      name: 'repeal',
      isShow: true
    }, {
      name: 'album',
      isShow: true
    }, {
      name: 'peoplefill',
      isShow: true
    }, {
      name: 'people',
      isShow: true
    }, {
      name: 'servicefill',
      isShow: true
    }, {
      name: 'repair',
      isShow: true
    }, {
      name: 'file',
      isShow: true
    }, {
      name: 'repairfill',
      isShow: true
    }, {
      name: 'taoxiaopu',
      isShow: true
    }, {
      name: 'weixin',
      isShow: true
    }, {
      name: 'attentionfill',
      isShow: true
    }, {
      name: 'attention',
      isShow: true
    }, {
      name: 'commandfill',
      isShow: true
    }, {
      name: 'command',
      isShow: true
    }, {
      name: 'communityfill',
      isShow: true
    }, {
      name: 'community',
      isShow: true
    }, {
      name: 'read',
      isShow: true
    }, {
      name: 'calendar',
      isShow: true
    }, {
      name: 'cut',
      isShow: true
    }, {
      name: 'magic',
      isShow: true
    }, {
      name: 'backwardfill',
      isShow: true
    }, {
      name: 'playfill',
      isShow: true
    }, {
      name: 'stop',
      isShow: true
    }, {
      name: 'tagfill',
      isShow: true
    }, {
      name: 'tag',
      isShow: true
    }, {
      name: 'group',
      isShow: true
    }, {
      name: 'all',
      isShow: true
    }, {
      name: 'backdelete',
      isShow: true
    }, {
      name: 'hotfill',
      isShow: true
    }, {
      name: 'hot',
      isShow: true
    }, {
      name: 'post',
      isShow: true
    }, {
      name: 'radiobox',
      isShow: true
    }, {
      name: 'rounddown',
      isShow: true
    }, {
      name: 'upload',
      isShow: true
    }, {
      name: 'writefill',
      isShow: true
    }, {
      name: 'write',
      isShow: true
    }, {
      name: 'radioboxfill',
      isShow: true
    }, {
      name: 'punch',
      isShow: true
    }, {
      name: 'shake',
      isShow: true
    }, {
      name: 'move',
      isShow: true
    }, {
      name: 'safe',
      isShow: true
    }, {
      name: 'activityfill',
      isShow: true
    }, {
      name: 'crownfill',
      isShow: true
    }, {
      name: 'crown',
      isShow: true
    }, {
      name: 'goodsfill',
      isShow: true
    }, {
      name: 'messagefill',
      isShow: true
    }, {
      name: 'profilefill',
      isShow: true
    }, {
      name: 'sound',
      isShow: true
    }, {
      name: 'sponsorfill',
      isShow: true
    }, {
      name: 'sponsor',
      isShow: true
    }, {
      name: 'upblock',
      isShow: true
    }, {
      name: 'weblock',
      isShow: true
    }, {
      name: 'weunblock',
      isShow: true
    }, {
      name: 'my',
      isShow: true
    }, {
      name: 'myfill',
      isShow: true
    }, {
      name: 'emojifill',
      isShow: true
    }, {
      name: 'emojiflashfill',
      isShow: true
    }, {
      name: 'flashbuyfill',
      isShow: true
    }, {
      name: 'text',
      isShow: true
    }, {
      name: 'goodsfavor',
      isShow: true
    }, {
      name: 'musicfill',
      isShow: true
    }, {
      name: 'musicforbidfill',
      isShow: true
    }, {
      name: 'card',
      isShow: true
    }, {
      name: 'triangledownfill',
      isShow: true
    }, {
      name: 'triangleupfill',
      isShow: true
    }, {
      name: 'roundleftfill-copy',
      isShow: true
    }, {
      name: 'font',
      isShow: true
    }, {
      name: 'title',
      isShow: true
    }, {
      name: 'recordfill',
      isShow: true
    }, {
      name: 'record',
      isShow: true
    }, {
      name: 'cardboardfill',
      isShow: true
    }, {
      name: 'cardboard',
      isShow: true
    }, {
      name: 'formfill',
      isShow: true
    }, {
      name: 'coin',
      isShow: true
    }, {
      name: 'cardboardforbid',
      isShow: true
    }, {
      name: 'circlefill',
      isShow: true
    }, {
      name: 'circle',
      isShow: true
    }, {
      name: 'attentionforbid',
      isShow: true
    }, {
      name: 'attentionforbidfill',
      isShow: true
    }, {
      name: 'attentionfavorfill',
      isShow: true
    }, {
      name: 'attentionfavor',
      isShow: true
    }, {
      name: 'titles',
      isShow: true
    }, {
      name: 'icloading',
      isShow: true
    }, {
      name: 'full',
      isShow: true
    }, {
      name: 'mail',
      isShow: true
    }, {
      name: 'peoplelist',
      isShow: true
    }, {
      name: 'goodsnewfill',
      isShow: true
    }, {
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
    }, {
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
      name: 'exit',
      isShow: true
    }, {
      name: 'skinfill',
      isShow: true
    }, {
      name: 'skin',
      isShow: true
    }, {
      name: 'moneybagfill',
      isShow: true
    }, {
      name: 'usefullfill',
      isShow: true
    }, {
      name: 'usefull',
      isShow: true
    }, {
      name: 'moneybag',
      isShow: true
    }, {
      name: 'redpacket_fill',
      isShow: true
    }, {
      name: 'subscription',
      isShow: true
    }, {
      name: 'loading1',
      isShow: true
    }, {
      name: 'github',
      isShow: true
    }, {
      name: 'global',
      isShow: true
    }, {
      name: 'settingsfill',
      isShow: true
    }, {
      name: 'back_android',
      isShow: true
    }, {
      name: 'expressman',
      isShow: true
    }, {
      name: 'evaluate_fill',
      isShow: true
    }, {
      name: 'group_fill',
      isShow: true
    }, {
      name: 'play_forward_fill',
      isShow: true
    }, {
      name: 'deliver_fill',
      isShow: true
    }, {
      name: 'notice_forbid_fill',
      isShow: true
    }, {
      name: 'fork',
      isShow: true
    }, {
      name: 'pick',
      isShow: true
    }, {
      name: 'wenzi',
      isShow: true
    }, {
      name: 'ellipse',
      isShow: true
    }, {
      name: 'qr_code',
      isShow: true
    }, {
      name: 'dianhua',
      isShow: true
    }, {
      name: 'icon',
      isShow: true
    }, {
      name: 'loading2',
      isShow: true
    }, {
      name: 'btn',
      isShow: true
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    //console.log('你按得键是'+event.target.id);
    //console.log('上一次' + this.data.is_num);
    var op = '';
    var data = 0;
    var last_is_num = this.data.is_num;
    //这次输入的是什么
    if (event.target.id == '9' || event.target.id == '8' || event.target.id == '7' || event.target.id == '6' || event.target.id == '5' || event.target.id == '4' || event.target.id == '3' || event.target.id == '2' || event.target.id == '1' || event.target.id == '0') {
      data = event.target.id;
      this.setData({ is_num: 1 });
    }
    if (event.target.id == '+' || event.target.id == '-' || event.target.id == '*' || event.target.id == '/') {
      op = event.target.id;
      this.setData({ is_num: 0 });
    }
    if (last_is_num == 1) {
      //如果上一次是数字
      if (op == '') {
        //这一次是数字
        if (this.data.screenNum != 0) {
          this.setData({ screenNum: this.data.screenNum + data });
          this.setData({ screenStr: this.data.screenStr + data });
        } else {
          this.setData({ screenNum: data });
          this.setData({ screenStr: data });
        }
      } else {
        this.setData({ screenNum: this.data.screenNum + op });
        this.setData({ screenStr: this.data.screenStr + ',' + op + ',' });
      }
    } else {
      //上次不是数字
      if (data != 0) {
        //这一次是数字
        this.setData({ screenNum: this.data.screenNum + data });
        this.setData({ screenStr: this.data.screenStr + data });
      } else {
        return;
      }
    }
    //console.log(op+'aaaaa'+data);
    //console.log('现在是'+this.data.is_num);
    //console.log('screenNum' + this.data.screenNum);
    //console.log(this.data.screenStr);
  },
  btnJs: function () {
    console.log(this.data.screenNum);
    console.log(this.data.screenStr);
    var result = 0;
    var strs = new Array(); //定义一数组 
    strs = this.data.screenStr.split(","); //字符分割
    for (var i = 0; i < strs.length; i++) {
      //console.log(strs[i] + i); //分割后的字符输出
      if (strs[i] == '+') {
        result = parseInt(strs[i - 1]) + parseInt(strs[i + 1]);
      }
      if (strs[i] == '-') {
        result = strs[i - 1] - strs[i + 1];
      }
      if (strs[i] == '*') {
        result = strs[i - 1] * strs[i + 1];
      }
      if (strs[i] == '/') {
        result = strs[i - 1] / strs[i + 1];
      }
    }
    console.log('result:' + result);
    this.setData({ screenNum: result });
    this.setData({ screenStr: result });
  },
  btnClear: function () {
    //把标记恢复成默认状态
    this.setData({ screenNum: 0 });
    this.setData({ screenStr: 0 });
    this.setData({ is_num: 1 });
  },
  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  }
})