const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ColorList: [{
      title: '嫣红',
      name: 'red',
      color: '#e54d42',
      isShow: true
    },
    {
      title: '桔橙',
      name: 'orange',
      color: '#f37b1d',
      isShow: true
    },
    {
      title: '明黄',
      name: 'yellow',
      color: '#fbbd08',
      isShow: true
    },
    {
      title: '橄榄',
      name: 'olive',
      color: '#8dc63f',
      isShow: true
    },
    {
      title: '森绿',
      name: 'green',
      color: '#39b54a',
      isShow: true
    },
    {
      title: '天青',
      name: 'cyan',
      color: '#1cbbb4',
      isShow: true
    },
    {
      title: '海蓝',
      name: 'blue',
      color: '#0081ff',
      isShow: true
    },
    {
      title: '姹紫',
      name: 'purple',
      color: '#6739b6',
      isShow: true
    },
    {
      title: '木槿',
      name: 'mauve',
      color: '#9c26b0',
      isShow: true
    },
    {
      title: '桃粉',
      name: 'pink',
      color: '#e03997',
      isShow: true
    },
    {
      title: '棕褐',
      name: 'brown',
      color: '#a5673f',
      isShow: true
    },
    {
      title: '玄灰',
      name: 'grey',
      color: '#8799a3',
      isShow: true
    },
    {
      title: '草灰',
      name: 'gray',
      color: '#aaaaaa',
      isShow: true
    },
    {
      title: '墨黑',
      name: 'black',
      color: '#333333',
      isShow: true
    },
    {
      title: '雅白',
      name: 'white',
      color: '#ffffff',
      isShow: true
    },
    ],
    time: '12:01',
    date: '2018-12-25',
    index: null,
    picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],

  },
  onLoad: function () { },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },
  TimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  searchThing(e) {

    let key = e.detail.value.toLowerCase();
    let list = this.data.ColorList;
    for (let i = 0; i < list.length; i++) {
      let a = key;
      let b = list[i].name.toLowerCase();
      if (b.search(a) != -1) {
        list[i].isShow = true
      } else {
        list[i].isShow = false
      }
    }
    this.setData({
      ColorList: list
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
})