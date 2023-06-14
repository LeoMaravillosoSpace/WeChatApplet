App({
  globalData: {
    userInfo: '',
    back:0
    // env: 'cloud1-9gdlbrz28af5b0cb' // 添加 env 属性并设置云环境 ID
  },

  onLaunch: function () {
    wx.cloud.init({
      env: 'cloud1-9gdlbrz28af5b0cb'
    })
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // 初始化云开发环境
    wx.cloud.init({
      env: 'cloud1-9gdlbrz28af5b0cb',
      traceUser: true
    }).then(() => {
      console.log('云开发初始化成功');
    }).catch(err => {
      console.error('云开发初始化失败', err);
    });
  },

  // getUserInfo: function (cb) {
  //   var that = this;
  //   if (this.globalData.userInfo) {
  //     typeof cb == "function" && cb(this.globalData.userInfo);
  //   } else {
  //     //调用登录接口
  //     wx.login({
  //       success: function () {
  //         wx.getUserInfo({
  //           success: function (res) {
  //             that.globalData.userInfo = res.userInfo;
  //             typeof cb == "function" && cb(that.globalData.userInfo);
  //           }
  //         });
  //       }
  //     });
  //   }
  // }
});