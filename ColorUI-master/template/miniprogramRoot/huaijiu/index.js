// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

var rp = require('request-promise')

// 云函数入口函数
exports.main = async (event, context) => {
  var res = rp('http://huaijiu.tinyan.top/' + event.url).then(
    html => {
      return html;
    }
  ).catch(err => {
    console.log(err)
  })
  return res;
}