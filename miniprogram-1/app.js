//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res)
        // 如果成功的话那么就发送一个请求到后端设置一个token
        wx.request({
          method:"POST",
          url:"/qf/getlogin",
          data:{
            code:res.code
          },
          success:(res)=>{
            wx.setStorageSync("token",res.token)
          }
        })

      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res)
        if (res.authSetting['scope.userLoaction']) {
          // 已经授权，可以直接调用 userLoaction 获取位置
          wx.getLocation({
            success: res => {
              console.log(res)
            }
          })
        }else{
          console.log(111)
          //没有授权的话那么弹框提示用户授权
          wx.authorize({
            scope: 'scope.userLocation',
            //如果用户授权了那么执行success函数。
            success () {
              wx.getLocation({
                type: 'wgs84',
                success: res => {
                  console.log(res)
                }
              })
            },
            fail(err){
              console.log(err)
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})