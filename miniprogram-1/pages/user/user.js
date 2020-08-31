// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:""
  },
  //获取用户信息
  getUser(res){
    console.log(res)
    //获取到用户信息后要使用wx.request()这个方法把数据提交到后端去保存
    this.setData({src1:res.detail.userInfo.avatarUrl})
  },
  //获取手机号码
  getnumber(e){
    console.log(e)//这里打印不了 因为没有权限只有企业号才能获取到别人的手机号。
  },
  //打开用户授权信息
  setting(){
    //调用wx.openSetting()这个方法来实现
    wx.openSetting({
      success(res){
        console.log(res)
      }
    })
  },
  //实现照相功能。
  getPhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  //判断是否有给照相机授权
  takePhoto(){
    //先获取用户权限
    wx.getSetting({
      success:res=>{
        //如果授过权那么就直接调用拍照
        if(res.authSetting['scope.camera']){
          this.getPhoto()
          console.log(111)
        }else{
          //不然就要自己设置开启授权
          console.log(222)
          wx.authorize({
            scope: 'scope.camera',
            success:()=>{
              this.takePhoto()
            }
          })
        }
      }
    })
  },
  
  //支付
  // 微信支付的条件，先交钱备案。
  // 第一步掉自己的后端接口
  // 第二步 通过wx.request()这个方法把订单信息发给后端
  //第三步 后端收到订单消息生成package及其相关信息并返回给前端
  buy(){
    wx.requestPayment({
      timeStamp: '',//这些字段都是来自我们自己的后端
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',//加密信息，至少包括下单人的openid，总价等
      success (res) { },//支付成功刷新页面，或者跳转页面。
      fail (res) { }//支付失败
    })
  },
  //动画
  startAnimation1() {
    this.animate('.box', [
      { opacity: 1.0, rotate: 0, backgroundColor: '#FF0000' },
      { opacity: 0.5, rotate: 45, backgroundColor: '#00FF00'},
      { opacity: 0.0, rotate: 90, backgroundColor: '#FF0000' },
    ], 5000, function() {
        this.clearAnimation('.box', { opacity: true, rotate: true }, function () {
          console.log("清除了#container上的opacity和rotate属性")
          // 写业务逻辑
          // 在这里开始第二个动画
        })
    }.bind(this))
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
  }
})