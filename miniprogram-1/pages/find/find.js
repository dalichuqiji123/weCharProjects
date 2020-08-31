// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'1',
    info:'',
    tiaojian:'1',
    idx:'2',
    list:[
      {id:1,title:'韩信'},
      {id:2,title:'李白'},
      {id:3,title:'凯爹'},
      {id:4,title:'玄策'},
      {id:5,title:'曹操'},
    ],
    arr:[
      {id:1,lang:'语文'},
      {id:2,lang:'数学'},
      {id:3,lang:'英语'},
      {id:4,lang:'化学'},
      {id:5,lang:'物理'},
    ]
  },
  colorChange(){
    let a=parseInt(Math.random()*4)
    this.setData({tiaojian:a})
  },
  msgChange(){
    console.log(11)
    this.setData({msg:"lalala"})
  },
  infoChange(e){
    console.log(e)
    this.setData({msg:e.detail.value})
  },
  console(e){
    console.log(e.currentTarget.dataset.index)
    console.log(e.currentTarget.dataset.id)
  },
  langChange(e){
    this.setData({idx:e.currentTarget.dataset.index})
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