// pages/menu/game/jh/sp/sp.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    scrollLeft: 0,
    swiperHeight: 671,
    character: [
      {
        title: "ll",
        name: "料理",
      },
      {
        title: "rl",
        name: "肉类"
      },
      {
        title: "sc",
        name: "蔬菜"
      },
      {
        title: "sg",
        name: "水果"
      },
      {
        title: "dl",
        name: "蛋类"
      },
      {
        title: "qt",
        name: "其他"
      },
      {
        title: "fsc",
        name: "非食材"
      }
    ],
    sp: [
      {
        img: "00",
        name: "肉汤",
        title: "Meaty Stew",
        hunger: "150",
        heart: "12",
        brain: "5",
        fl: "10"
      },
      {
        img: "01",
        name: "曼德拉汤",
        title: "Mandrake Soup",
        hunger: "150",
        heart: "100",
        brain: "5",
        fl: "6"
      },
      {
        img: "02",
        name: "培根煎蛋",
        title: "Bacon and Eggs",
        hunger: "75",
        heart: "20",
        brain: "5",
        fl: "20"
      },
      {
        img: "03",
        name: "火龙果派",
        title: "Dragonpie",
        hunger: "75",
        heart: "40",
        brain: "5",
        fl: "15"
      },
      {
        img: "04",
        name: "蜂蜜火腿",
        title: "Honey Ham",
        hunger: "75",
        heart: "30",
        brain: "5",
        fl: "15"
      },
      {
        img: "10",
        name: "火鸡大餐",
        title: "Turkey Dinner",
        hunger: "75",
        heart: "20",
        brain: "5",
        fl: "6"
      },
      {
        img: "11",
        name: "肉丸",
        title: "Meatballs",
        hunger: "62.5",
        heart: "3",
        brain: "5",
        fl: "10"
      },
      {
        img: "12",
        name: "黄油松饼",
        title: "Butter Muffin",
        hunger: "37.5",
        heart: "20",
        brain: "5",
        fl: "15"
      },
      {
        img: "13",
        name: "蛙腿三明治",
        title: "Froggle Bunwich",
        hunger: "37.5",
        heart: "20",
        brain: "5",
        fl: "10"
      },
      {
        img: "14",
        name: "炸鱼卷",
        title: "Fish Tacos",
        hunger: "37.5",
        heart: "20",
        brain: "5",
        fl: "6"
      },
      {
        img: "20",
        name: "鱼条",
        title: "Fishsticks",
        hunger: "37.5",
        heart: "40",
        brain: "5",
        fl: "10"
      },
      {
        img: "21",
        name: "果酱",
        title: "Fist Full of Jam",
        hunger: "37.5",
        heart: "3",
        brain: "5",
        fl: "15"
      },
      {
        img: "22",
        name: "蜂蜜肉丁",
        title: "Honey Nuggets",
        hunger: "37.5",
        heart: "20",
        brain: "5",
        fl: "15"
      },
      {
        img: "23",
        name: "肉串",
        title: "Kabobs",
        hunger: "37.5",
        heart: "3",
        brain: "3",
        fl: "15"
      },
      {
        img: "24",
        name: "怪物千层面",
        title: "Monster Lasagna",
        hunger: "37.5",
        heart: "-20",
        brain: "-20",
        fl: "6"
      },
      {
        img: "30",
        name: "饺子",
        title: "Pierogi",
        hunger: "37.5",
        heart: "40",
        brain: "5",
        fl: "20"
      },
      {
        img: "31",
        name: "南瓜饼干",
        title: "Pumpkin Cookies",
        hunger: "37.5",
        heart: "0",
        brain: "15",
        fl: "10"
      },
      {
        img: "32",
        name: "茄盒",
        title: "Stuffed Eggplant",
        hunger: "37.5",
        heart: "3",
        brain: "5",
        fl: "15"
      },
      {
        img: "33",
        name: "华夫饼",
        title: "Waffles",
        hunger: "37.5",
        heart: "60",
        brain: "5",
        fl: "6"
      },
      {
        img: "34",
        name: "地鼠鳄梨酱",
        title: "Guacamole",
        hunger: "37.5",
        heart: "20",
        brain: "0",
        fl: "10"
      },
      {
        img: "40",
        name: "辣椒酱",
        title: "Spicy Chili",
        hunger: "37.5",
        heart: "20",
        brain: "0",
        fl: "10"
      },
      {
        img: "41",
        name: "水果沙拉",
        title: "Fruit Medley",
        hunger: "25",
        heart: "20",
        brain: "5",
        fl: "6"
      },
      {
        img: "42",
        name: "太妃糖",
        title: "Taffy",
        hunger: "25",
        heart: "-3",
        brain: "15",
        fl: "15"
      },
      {
        img: "43",
        name: "蔬菜杂烩",
        title: "Ratatouille",
        hunger: "25",
        heart: "3",
        brain: "5",
        fl: "15"
      },
      {
        img: "44",
        name: "冰淇淋",
        title: "Ice Cream",
        hunger: "25",
        heart: "0",
        brain: "50",
        fl: "3"
      },
      {
        img: "50",
        name: "鳗鱼苔藓团",
        title: "Unagi",
        hunger: "18.75",
        heart: "20",
        brain: "5",
        fl: "10"
      },
      {
        img: "51",
        name: "花朵沙拉",
        title: "Flower Salad",
        hunger: "12.5",
        heart: "40",
        brain: "5",
        fl: "6"
      },
      {
        img: "52",
        name: "冰镇西瓜",
        title: "Melonsicle",
        hunger: "12.5",
        heart: "3",
        brain: "20",
        fl: "3"
      },
      {
        img: "53",
        name: "果味什锦",
        title: "Trail Mix",
        hunger: "12.5",
        heart: "30",
        brain: "5",
        fl: "15"
      },
      {
        img: "54",
        name: "火药蛋糕",
        title: "Powdercake",
        hunger: "0",
        heart: "-3",
        brain: "0",
        fl: "18750"
      },
      {
        img: "63",
        name: "软心糖豆",
        title: "Jellybeans",
        hunger: "0",
        heart: "122",
        brain: "5",
        fl: "无限"
      },
      {
        img: "64",
        name: "潮湿黏糊物",
        title: "Wet Goop",
        hunger: "0",
        heart: "0",
        brain: "0",
        fl: "6"
      }
    ],
    rl: [
      {
        img: "00",
        name: "肉块",
        title: "Meat",
        hunger: "25",
        heart: "1",
        brain: "-10",
        fl: "6"
      },
      {
        img: "01",
        name: "烤肉块",
        title: "Cooked Meat",
        hunger: "25",
        heart: "3",
        brain: "0",
        fl: "10"
      },
      {
        img: "02",
        name: "肉干",
        title: "Jerky",
        hunger: "25",
        heart: "20",
        brain: "15",
        fl: "20"
      },
      {
        img: "03",
        name: "怪物肉",
        title: "Monster Meat",
        hunger: "18.75",
        heart: "-20",
        brain: "-15",
        fl: "6"
      },
      {
        img: "04",
        name: "烤怪物肉",
        title: "Cooked Monster Meat",
        hunger: "18.75",
        heart: "-3",
        brain: "-10",
        fl: "15"
      },
      {
        img: "10",
        name: "怪物肉干",
        title: "Monster Jerky",
        hunger: "18.75",
        heart: "-3",
        brain: "-5",
        fl: "20"
      },
      {
        img: "33",
        name: "鳗鱼",
        title: "Eel",
        hunger: "10",
        heart: "3",
        brain: "0",
        fl: "6"
      },
      {
        img: "11",
        name: "烤鳗鱼",
        title: "Cooked Eel",
        hunger: "13",
        heart: "8",
        brain: "0",
        fl: "10"
      },
      {
        img: "12",
        name: "小肉块",
        title: "Morsel",
        hunger: "12.5",
        heart: "1",
        brain: "-10",
        fl: "6"
      },
      {
        img: "13",
        name: "烤小肉块",
        title: "Cooked Morsel",
        hunger: "12.5",
        heart: "3",
        brain: "0",
        fl: "10"
      },
      {
        img: "14",
        name: "小肉块干",
        title: "Small Jerky",
        hunger: "12.5",
        heart: "8",
        brain: "10",
        fl: "20"
      },
      {
        img: "32",
        name: "鸡腿",
        title: "Drumstick",
        hunger: "12.5",
        heart: "0",
        brain: "-10",
        fl: "6"
      },
      {
        img: "20",
        name: "炸鸡腿",
        title: "Fried Drumstick",
        hunger: "12.5",
        heart: "1",
        brain: "0",
        fl: "10"
      },
      {
        img: "21",
        name: "青蛙腿",
        title: "Frog Legs",
        hunger: "12.5",
        heart: "0",
        brain: "-10",
        fl: "6"
      },
      {
        img: "22",
        name: "烤青蛙腿",
        title: "Cooked Frog Legs",
        hunger: "12.5",
        heart: "1",
        brain: "0",
        fl: "10"
      },
      {
        img: "23",
        name: "鱼",
        title: "Fish",
        hunger: "12.5",
        heart: "1",
        brain: "0",
        fl: "3"
      },
      {
        img: "24",
        name: "烤鱼",
        title: "Cooked Fish",
        hunger: "12.5",
        heart: "1",
        brain: "0",
        fl: "6"
      },
      
      {
        img: "34",
        name: "鼹鼠",
        title: "Moleworm",
        hunger: "0",
        heart: "0",
        brain: "0",
        fl: "2"
      }
    ],
    sc: [
      {
        img: "00",
        name: "曼德拉草",
        title: "Mandrake",
        hunger: "75",
        heart: "60",
        brain: "0",
        fl: "10001"
      },
      {
        img: "01",
        name: "南瓜",
        title: "Pumpkin",
        hunger: "37.5",
        heart: "3",
        brain: "0",
        fl: "10"
      },
      {
        img: "02",
        name: "加热南瓜",
        title: "Hot Pumpkin",
        hunger: "37.5",
        heart: "8",
        brain: "0",
        fl: "6"
      },
      {
        img: "03",
        name: "茄子",
        title: "Eggplant",
        hunger: "25",
        heart: "9",
        brain: "0",
        fl: "10"
      },
      {
        img: "04",
        name: "闷茄子",
        title: "Braised Eggplant",
        hunger: "25",
        heart: "20",
        brain: "0",
        fl: "6"
      },
      {
        img: "10",
        name: "玉米",
        title: "Corn",
        hunger: "25",
        heart: "3",
        brain: "0",
        fl: "10"
      },
      {
        img: "11",
        name: "蓝蘑菇头",
        title: "Blue Cap",
        hunger: "12.5",
        heart: "20",
        brain: "-15",
        fl: "10"
      },
      {
        img: "12",
        name: "绿蘑菇头",
        title: "Green Cap",
        hunger: "12.5",
        heart: "0",
        brain: "-50",
        fl: "10"
      },
      {
        img: "13",
        name: "红蘑菇头",
        title: "Red Cap",
        hunger: "12.5",
        heart: "-20",
        brain: "0",
        fl: "10"
      },
      {
        img: "14",
        name: "胡萝卜",
        title: "Carrot",
        hunger: "12.5",
        heart: "1",
        brain: "0",
        fl: "10"
      },
      {
        img: "20",
        name: "烤胡萝卜",
        title: "Roasted Carrot",
        hunger: "12.5",
        heart: "3",
        brain: "0",
        fl: "6"
      },
      {
        img: "21",
        name: "爆米花",
        title: "Popcorn",
        hunger: "12.5",
        heart: "3",
        brain: "0",
        fl: "15"
      },
      {
        img: "22",
        name: "仙人掌果肉",
        title: "Cactus Flesh",
        hunger: "12.5",
        heart: "-3",
        brain: "-5",
        fl: "10"
      },
      {
        img: "23",
        name: "烤仙人掌果肉",
        title: "Cooked Cactus Flesh",
        hunger: "12.5",
        heart: "1",
        brain: "15",
        fl: "10"
      },
      {
        img: "24",
        name: "仙人掌花",
        title: "Cactus Flower",
        hunger: "12.5",
        heart: "8",
        brain: "5",
        fl: "3"
      },
      {
        img: "31",
        name: "苔藓",
        title: "Lichen",
        hunger: "12",
        heart: "3",
        brain: "-5",
        fl: "2"
      },
      {
        img: "32",
        name: "烤蓝蘑菇",
        title: "Cooked Blue Cap",
        hunger: "0",
        heart: "-3",
        brain: "10",
        fl: "10"
      },
      {
        img: "33",
        name: "烤绿蘑菇",
        title: "Cooked Green Cap",
        hunger: "0",
        heart: "-1",
        brain: "15",
        fl: "10"
      },
      {
        img: "34",
        name: "烤红蘑菇",
        title: "Cooked Red Cap",
        hunger: "0",
        heart: "1",
        brain: "-10",
        fl: "10"
      },
    ],
    sg: [
      {
        img: "00",
        name: "榴莲",
        title: "Durian",
        hunger: "25",
        heart: "3",
        brain: "-5",
        fl: "10"
      },
      {
        img: "01",
        name: "超臭榴莲",
        title: "Extra Smelly Durian",
        hunger: "25",
        heart: "0",
        brain: "-5",
        fl: "6"
      },
      {
        img: "02",
        name: "烤熟的多汁浆果",
        title: "Roasted Juicy Berries",
        hunger: "18.75",
        heart: "3",
        brain: "0",
        fl: "1"
      },
      {
        img: "03",
        name: "多汁浆果",
        title: "Juicy Berries",
        hunger: "12.5",
        heart: "1",
        brain: "0",
        fl: "2"
      },
      {
        img: "04",
        name: "烤浆果",
        title: "Roasted Berries",
        hunger: "12.5",
        heart: "1",
        brain: "0",
        fl: "3"
      },
      {
        img: "10",
        name: "香萑",
        title: "Banana",
        hunger: "12.5",
        heart: "1",
        brain: "0",
        fl: "10"
      },
      {
        img: "11",
        name: "烤香蕉",
        title: "Cooked Banana",
        hunger: "12.5",
        heart: "3",
        brain: "0",
        fl: "6"
      },
      {
        img: "12",
        name: "精致火龙果",
        title: "Prepared Dragon Fruit",
        hunger: "12.5",
        heart: "20",
        brain: "0",
        fl: "3"
      },
      {
        img: "13",
        name: "切片石榴",
        title: "Sliced Pomegranate",
        hunger: "12.5",
        heart: "20",
        brain: "0",
        fl: "3"
      },
      {
        img: "20",
        name: "西瓜",
        title: "Watermelon",
        hunger: "12.5",
        heart: "3",
        brain: "5",
        fl: "8"
      },
      {
        img: "21",
        name: "炙热西瓜",
        title: "Grilled Watermelon",
        hunger: "9.375",
        heart: "1",
        brain: "7.5",
        fl: "3"
      },
      {
        img: "22",
        name: "浆果",
        title: "Berries",
        hunger: "9.375",
        heart: "0",
        brain: "0",
        fl: "6"
      },
      {
        img: "23",
        name: "火龙果",
        title: "Dragon Fruit",
        hunger: "9.375",
        heart: "3",
        brain: "0",
        fl: "6"
      },
      {
        img: "24",
        name: "石榴",
        title: "Pomegranate",
        hunger: "9.375",
        heart: "3",
        brain: "0",
        fl: "6"
      },
    ],
    d: [
      {
        img: "30",
        name: "煎高鸟蛋",
        title: "Fried Tallbird Egg",
        hunger: "37.5",
        heart: "0",
        brain: "0",
        fl: "6"
      },
      {
        img: "31",
        name: "高鸟蛋",
        title: "Tallbird Egg",
        hunger: "25",
        heart: "3",
        brain: "0",
        fl: "10001"
      },
      {
        img: "32",
        name: "煎蛋",
        title: "Cooked Egg",
        hunger: "12.5",
        heart: "0",
        brain: "0",
        fl: "6"
      },
      {
        img: "33",
        name: "蛋",
        title: "Egg",
        hunger: "9.375",
        heart: "0",
        brain: "0",
        fl: "10"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  toDetail(e) {
    var id = e.currentTarget.dataset.id;
    var name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: '../sp/detail?id=' + id + '&name=' + name
    });
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
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