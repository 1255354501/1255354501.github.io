import fetch from '@system.fetch'
import util from './util'

// 快应用浏览器首次启动加载配置
function initPage(){
  fetch.fetch({
    url: 'http://quickapp.wifiing.net/init.php',
    responseType: 'json',
    success: function(response) {
      console.info(`the status code of the response: ${response.code}`)
      console.info(`the data of the response: ${response.data}`)
      console.info(
        `the headers of the response: ${JSON.stringify(response.headers)}`
      )
    },
    fail: function(data, code) {
      console.info(`handling fail, errMsg = ${data}`)
      console.info(`handling fail, errCode = ${code}`)
    }
  })
}

//浏览器触发URL改变后台请求接口
function changeUrl(){

  fetch.fetch({
    url: 'http://quickapp.wifiing.net/urlchange.php',
    data:{
      t: (new Date).getTime(),
      user: util.androidid
    },
    responseType: 'json',
    success: function(response) {
      console.info(`the status code of the response: ${response.code}`)
      console.info(`the data of the response: ${response.data}`)
      console.info(
        `the headers of the response: ${JSON.stringify(response.headers)}`
      )
    },
    fail: function(data, code) {
      console.info(`handling fail, errMsg = ${data}`)
      console.info(`handling fail, errCode = ${code}`)
    }
  })
}

//收藏夹变化后提交收藏夹列表
function markSync(){

  fetch.fetch({
    url: 'http://quickapp.wifiing.net/updatefavorites.php',
    responseType: 'json',
    success: function(response) {
      console.info(`the status code of the response: ${response.code}`)
      console.info(`the data of the response: ${response.data}`)
      console.info(
        `the headers of the response: ${JSON.stringify(response.headers)}`
      )
    },
    fail: function(data, code) {
      console.info(`handling fail, errMsg = ${data}`)
      console.info(`handling fail, errCode = ${code}`)
    }
  })
}

export default {
  initPage,
  changeUrl,
  markSync
}
