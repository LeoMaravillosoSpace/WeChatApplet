Page({
  data: {
    phone: '',
    password: '',
    defaultPhone: '13045675213',
    defaultPassword: '1234567'
  },

  // 获取输入账号
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  // 获取输入密码
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  login: function() {
    var phone = this.data.phone;
    var password = this.data.password;
    // 校验用户输入
    if (!/^1[3-9]\d{9}$/.test(phone)) {
      wx.showToast({
        title: '手机号码格式不正确',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    if (password.length < 6) {
      wx.showToast({
        title: '密码长度不能少于6位',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    
    // 模拟用户登录
      if (phone === this.data.defaultPhone && password === this.data.defaultPassword) {
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000
      })
       wx.switchTab({
      url: '../index/index'
      })
    } else {
      wx.showToast({
        title: '用户名或密码错误',
        icon: 'none',
        duration: 2000
      })
    }
  },
  // 微信小程序
  onGetUserInfo: function (e) {
    // console.log(e)
    if (e.detail.errMsg === 'getUserInfo:ok') {
      var userInfo = e.detail.userInfo;
      var nickName = userInfo.nickName;
      var avatarUrl = userInfo.avatarUrl;
      // console.log(userInfo);
      // 将用户信息保存到本地或发送到服务器
      // 将用户信息保存到全局数据中
      getApp().globalData.userInfo = userInfo;

      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 3000,
        success: function () {
          wx.switchTab({
            url: '../index/index'
          })
        }
      })
    } else {
      wx.showToast({
        title: '登录失败',
        icon: 'none',
        duration: 2000
      })
    }
  }
})

// Page({
//   data: {
//     phone: '',
//     password: '',
//     defaultPhone: '13076604017',
//     defaultPassword: '123456'
//   },

//   // 获取输入账号
//   phoneInput: function (e) {
//     this.setData({
//       phone: e.detail.value
//     })
//   },

//   // 获取输入密码
//   passwordInput: function (e) {
//     this.setData({
//       password: e.detail.value
//     })
//   },

//   // 校验用户输入
//   validateInput: function () {
//     var phone = this.data.phone;
//     var password = this.data.password;

//     if (!phone) {
//       wx.showToast({
//         title: '请输入手机号码',
//         icon: 'none',
//         duration: 2000
//       });
//       return false;
//     }

//     if (!/^1[3-9]\d{9}$/.test(phone)) {
//       wx.showToast({
//         title: '手机号码格式不正确',
//         icon: 'none',
//         duration: 2000
//       });
//       return false;
//     }

//     if (!password) {
//       wx.showToast({
//         title: '请输入密码',
//         icon: 'none',
//         duration: 2000
//       });
//       return false;
//     }

//     if (password.length < 6) {
//       wx.showToast({
//         title: '密码长度不能少于6位',
//         icon: 'none',
//         duration: 2000
//       });
//       return false;
//     }

//     return true;
//   },

//   // 模拟用户登录
//   login: function() {
//     if (!this.validateInput()) {
//       return;
//     }

//     wx.showLoading({
//       title: '登录中',
//       mask: true
//     });

//     setTimeout(function () {
//       var phone = this.data.phone;
//       var password = this.data.password;

//       // TODO: 使用加密方式验证用户密码

//       if (phone === this.data.defaultPhone && password === this.data.defaultPassword) {
//         wx.setStorageSync('isLogin', true); // 将登录状态保存到本地
//         wx.hideLoading();
//         wx.showToast({
//           title: '登录成功',
//           icon: 'success',
//           duration: 2000,
//           success: function () {
//             wx.switchTab({
//               url: '../index/index'
//             });
//           }
//         });
//       } else {
//         wx.hideLoading();
//         wx.showToast({
//           title: '用户名或密码错误',
//           icon: 'none',
//           duration: 2000
//         });
//       }
//     }.bind(this), 1000);
//   },

//   // 获取用户信息
//   getUserInfo: function (e) {
//     if (e.detail.errMsg !== 'getUserInfo:ok') {
//       wx.showToast({
//         title: '获取用户信息失败',
//         icon: 'none',
//         duration: 2000
//       });
//       return;
//     }

//     var userInfo = e.detail.userInfo;
//     var nickName = userInfo.nickName;
//     var avatarUrl = userInfo.avatarUrl;

//     // 将用户信息保存到全局数据中
//     getApp().globalData.userInfo = userInfo;

//     wx.showToast({
//       title: '登录成功',
//       icon: 'success',
//       duration: 2000,
//       success: function () {
//         wx.switchTab({
//           url: '../index/index'
//         });
//       }
//     });
//   }
// });