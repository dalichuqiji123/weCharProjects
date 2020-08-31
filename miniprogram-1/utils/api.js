var baseurl='/api/jd/goods'
//封装fetch的Promise函数
function fetch (data,url,method){
    return new Promise((resolve,reject)=>{
        wx.request({
            url:baseurl+url,
            data,
            method,
            // 用于获取缓存的token
            headers: {
                Authorization: wx.getStorageSync('token')  
            },
            success:(res)=>{
                resolve(res.data.data)
            },
            reject:(err)=>{
                reject(err)
            }
        })
    })
}
function getgoodslist(data){
   return  fetch(
        data,
       "/goods",
        'GET'
    )
}
module.exports = {
    getgoodslist
}

let api=require('../../utils/api')
api.getgoodslist().then(res=>{
    this.lsit=res
})
    

