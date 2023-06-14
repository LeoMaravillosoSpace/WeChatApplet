Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 收货地址信息
    receiver: '',
    phone: '',
    address: '',
    // 订单信息
    orderId: '', // 订单号
    goodslist: [], // 商品列表
    total: 0, // 总金额
  },

  onLoad: function(options) {
    // 获取订单信息和商品信息
    const orderId = options.orderId;
    const goodslist = JSON.parse(options.goods);
    let total = 0;
    goodslist.forEach(item => {
      total += item.price * item.count;
    });
    console.log('生成订单号：', orderId);
    // 更新页面数据
    this.setData({
      orderId,
      goodslist,
      total: total.toFixed(2)
    });
  },

  // 点击客户（收货信息）时的事件处理函数
  onCustomerAddressTap: function() {
    // 显示弹窗
    wx.showModal({
      title: '收货地址',
      content: '请填写收货地址信息',
      confirmText: '保存',
      modalClass: 'my-modal',
      success: res => {
        if (res.confirm) {
          // 用户点击保存按钮，更新页面数据并保存收货地址信息到云数据库中
          this.setData({
            receiver: res.receiver,
            phone: res.phone,
            address: res.address
          }, () => {
            this.saveAddress();
          });
        }
      }
    });
  },

  // 保存收货地址信息到云数据库的方法
  saveAddress: function() {
    // 获取收货地址信息
    const receiver = this.data.receiver;
    const phone = this.data.phone;
    const address = this.data.address;

    // 检查收货地址信息是否完整
    if (!receiver || !phone || !address) {
      wx.showToast({
        title: '请填写完整的收货地址信息',
        icon: 'none'
      });
      return;
    }

    // 将收货地址信息保存到云数据库中
    const db = wx.cloud.database();
    db.collection('address').add({
      data: {
        receiver,
        phone,
        address
      },
      success: res => {
        wx.showToast({
          title: '保存成功',
          icon: 'success'
        });
      },
      fail: err => {
        wx.showToast({
          title: '保存失败',
          icon: 'none'
        });
      }
    });
  },

  // 收件人输入框的事件处理函数
  onReceiverInput: function(event) {
    this.setData({
      receiver: event.detail.value
    });
  },

  // 手机号输入框的事件处理函数
  onPhoneInput: function(event) {
    this.setData({
      phone: event.detail.value
    });
  },

  // 收货地址输入框的事件处理函数
  onAddressInput: function(event) {
    this.setData({
      address: event.detail.value
    });
  },
  onCustomerAddressTap: function() {
    // 显示弹窗
    wx.showModal({
      title: '收货地址',
      content: '请填写收货地址信息',
      confirmText: '保存',
      modalClass: 'my-modal',
      success: res => {
        if (res.confirm) {
          // 用户点击保存按钮，更新页面数据并保存收货地址信息到云数据库中
          const receiver = this.data.receiver;
          const phone = this.data.phone;
          const address = this.data.address;
          if (!receiver || !phone || !address) {
            wx.showToast({
              title: '请填写完整的收货地址信息',
              icon: 'none'
            });
            return;
          }
          this.saveAddress();
        }
      }
    });
  },
  
 // 微信支付

  // 微信支付
  wxPay(){
  
    wx.requestPayment({
    
    'timeStamp': '',
    
    'nonceStr': '',
    
    'package': '',
    
    'signType': 'MD5',
    
    'paySign': '',
    
    'success':(res)=>{
    
    },
    
    'fail':(res)=>{
    
    }
    
    })
    
    }
});