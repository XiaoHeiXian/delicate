// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

var rp = require('request-promise')

// 云函数入口函数
exports.main = async (event, context) => {
  console.log('http://www.tinyan.top/' + event.url);
  var res = rp('http://www.tinyan.top/' + event.url).then(
    html => {
      return html;
    }
  ).catch(err => {
    console.log(err)
  })
  return res;
}