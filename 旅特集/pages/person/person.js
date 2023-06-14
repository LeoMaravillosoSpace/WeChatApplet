var app = getApp();

Page({
  data: {
    nickName: '',
    avatarUrl: ''
  },

  onLoad: function () {
    var that = this;
    // 在这里使用用户信息
    // wx.getUserProfile({
    //   desc: '获取用户信息',
    //   success: function (res) {
    //     var userInfo = res.userInfo;
    //     var nickName = userInfo.nickName;
    //     var avatarUrl = userInfo.avatarUrl;
    //     that.setData({
    //       nickName: nickName,
    //       avatarUrl: avatarUrl
    //     });
    //   }
    // });
    this.setData({
      nickName:app.globalData.userInfo.nickName,
      avatarUrl:app.globalData.userInfo.avatarUrl
    })
  },

  // 按钮
  login: function (e) {
    wx.redirectTo({
      url: '../login/login'
    });
  },

  goto: function () {
    wx.navigateTo({
      url: '../myorder/myorder',
    });
  },

  gogo: function () {
    wx.navigateTo({
      url: '../order/order',
    });
  },

  gotoLinkman: function () {
    wx.navigateTo({
      url: '../linkman/linkman',
    });
  }
});
