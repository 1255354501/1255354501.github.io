import prompt from '@system.prompt'
import router from '@system.router'
import shortcut from '@system.shortcut'


/**
 * 显示菜单
 */
function showMenu () {
  const appInfo = require('@system.app').getInfo()
  prompt.showContextMenu({
    itemList: ['保存桌面', '关于', '取消'],
    success: function (ret) {
      switch (ret.index) {
      case 0:
        // 保存桌面
        createShortcut()
        break
      case 1:
        // 关于
        router.push({
          uri: '/About',
          params: {
            name: appInfo.name,
            icon: appInfo.icon
          }
        })
        break
      case 2:
        // 取消
        break
      default:
        prompt.showToast({
          message: 'error'
        })
      }
    }
  })
}

//时间戳格式化
function timeNumFormat(_time){
  var t = new Date(_time)
  var mon = (t.getMonth()+1) < 10 ? '0'+(t.getMonth()+1) : (t.getMonth()+1)
  var day = t.getDate() < 10 ? '0'+t.getDate() : t.getDate()
  var hour = t.getHours() < 10 ? '0'+t.getHours() : t.getHours()
  var min = t.getMinutes() < 10 ? '0'+t.getMinutes() : t.getMinutes()
  var sec = t.getSeconds() < 10 ? '0'+t.getSeconds() : t.getSeconds()
  return t.getFullYear() +'-'+ mon +'-'+ day + ' ' + hour+':'+min+':'+sec
}

/**
 * 创建桌面图标
 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
 */
function createShortcut () {
  shortcut.hasInstalled({
    success: function (ret) {
      if (ret) {
        prompt.showToast({
          message: '已创建桌面图标'
        })
      } else {
        shortcut.install({
          success: function () {
            prompt.showToast({
              message: '成功创建桌面图标'
            })
          },
          fail: function (errmsg, errcode) {
            prompt.showToast({
              // message: `${errcode}: ${errmsg}`
            })
          }
        })
      }
    },
    fail: function(){
      prompt.showToast({
        message: '建桌面图标失败'
      })
    }
  })
}

function historyAdd(obj){
  const storage = require('@system.storage')

  storage.get({
    key: 'history',
    success: function(data) {
      var arr
      if(data){
        arr = JSON.parse(data)
      }else{
        arr = []
      }

      arr.push(obj)

      //最多保留200条
      if(arr.length > 200){
        arr.splice(0, arr.length-200)
      }

      storage.set({
        key: 'history',
        value: JSON.stringify(arr)
      })
    }
  })
}

export default {
  showMenu,
  createShortcut,
  historyAdd,
  timeNumFormat
}
