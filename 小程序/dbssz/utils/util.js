const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
//===============================request 封装====================================//
function Requests(url, data) {
  return new Promise((resolv, reject) => {
    wx.request({
      url: url,
      data: data,
      method: "get",
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.data == "服务器异常") {
          wx.hideLoading()
          wx.showModal({
            title: '提示',
            content: '网络错误或服务器繁忙!',
          })
        } else {
          resolv(res.data)
        }
      },
      fail: function (err) {
        console.log(err)
        reject(err)
        wx.hideLoading()
        wx.showModal({
          title: '提示',
          content: '网络错误或服务器繁忙!',
        })
      }
    })
  })
}

function Requests_json(url, data) {
  return new Promise((resolv, reject) => {
    wx.request({
      url: url,
      data: data,
      method: "POST",
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'authorization':'84C0E9E750DBFB8900A6B7F5086CF6D2'
      },
      success: function (res) {
        if (res.data == "服务器异常") {
          wx.hideLoading()
          wx.showModal({
            title: '提示',
            content: '网络错误或服务器繁忙!',
          })
        } else {
          resolv(res)
        }
      },
      fail: function (err) {
        wx.hideLoading()
        console.log(err)
        reject(err)
        wx.showModal({
          title: '提示',
          content: '网络错误或服务器繁忙!',
        })
      }
    })
  })
}
module.exports = {
  Requests,
  Requests_json
}
