export default (params) => {

  uni.showLoading({
    title: '加载中'
  })

  params.url = 'http://192.168.101.13:3000/api' + params.url

  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      },
      complete() {
        uni.hideLoading()
      }
    })
  })
}