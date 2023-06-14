function redirectTo(url) {
  return new Promise(function(resolve, reject) {
    wx.navigateTo({
      url: url,
      success: function() {
        resolve();
      },
      fail: function() {
        reject();
      }
    })
  })
}