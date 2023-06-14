const app = getApp();

Page({
  data: {
    contact: {} // 当前联系人信息
  },
  onLoad: function(options) {
    // 接收到页面传递的数据
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on('acceptDataFromOpenerPage', data => {
      // 存储数据
      this.setData({
        contact: data.data
      });
    });
  },
  
  // 更新联系人
  updateContact: function() {
    const { _id, name, phone, address } = this.data.contact;
    wx.cloud.callFunction({
      name: 'linkway',
      data: {
        action: 'updateContact',
        data: {
          _id: _id,
          name: name,
          phone: phone,
          address: address
        }
      },
      success: res => {
        wx.showToast({
          title: '更新联系人成功',
          icon: 'success',
          duration: 2000,
          success: () => {
            // 返回上一页并传递数据
            const pages = getCurrentPages();
            const prevPage = pages[pages.length - 2];
            prevPage.setData({
              contact: this.data.contact
            });
            app.globalData.back=1
            wx.navigateBack({
              delta: 1
            });
          }
        });
      },
      fail: err => {
        console.error('更新联系人失败：', err);
        wx.showToast({
          title: '更新联系人失败',
          icon: 'none',
          duration: 2000
        });
      }
    });
  },

  // 保存联系人信息
  saveContact: function() {
    const contact = this.data.contact;
    if (contact._id) {
      this.updateContact(); // 如果有联系人ID，则为更新联系人信息
    } else {
      this.addContact(); // 否则为新增联系人
    }
  },

  // 输入姓名
  inputName: function(e) {
    const name = e.detail.value;
    this.setData({
      'contact.name': name
    });
  },

  // 输入电话
  inputPhone: function(e) {
    const phone = e.detail.value;
    this.setData({
      'contact.phone': phone
    });
  },

  // 输入地址
  inputAddress: function(e) {
    const address = e.detail.value;
    this.setData({
      'contact.address': address
    });
  }
});
