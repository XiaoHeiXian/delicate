// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

var rp = require('request-promise')

// 云函数入口函数
exports.main = async (event, context) => {

  var options = {
    uri: 'https://lajifenleiapp.com/sk/' + event.url,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36'
    }
  };

  var res = rp(options).then(
    html => {
      return html;
    }
  ).catch(err => {
    console.log(err)
  })
  return res;
}