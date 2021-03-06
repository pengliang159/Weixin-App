function request(options) {
  var domain = 'https://testapi.ubike.cn'
  var path = options.path;
  var data = options.data;
  var method = options.method || 'GET';
  var m_domain = options.domain ? options.domain : domain
  var done = options.done || function() {};
  var success = options.success || function() {};
  var error = options.error || function() {};
  var withToken = false
  if (options.header) {
    withToken = true
  }
  if (withToken) {
    wx.request({
      url: m_domain + path, //仅为示例，并非真实的接口地址
      data: data,
      header: options.header,
      method: method,
      success: success,
      fail: error
    })
  } else {
    wx.request({
      url: m_domain + path, //仅为示例，并非真实的接口地址
      data: data,
      method: method,
      header: {
          'content-type': 'application/json'
      },
      success: success,
      fail: error
    })
  }
}

module.exports = {
  request: request
}