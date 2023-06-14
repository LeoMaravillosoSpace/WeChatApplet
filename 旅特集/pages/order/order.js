Page({
    data: {
      result: null,
      no: null, // 运单号
      company: ['sf', 'sto', 'yt', 'yd', 'tt'], // 传递给快递查询接口的值
      com: ['顺丰', '申通', '圆通', '韵达', '天天'], // 用于显示在页面中的快递名称
      index: 0, // 用户选择的快递公司的数组索引
      expressInfo: null, // 查询到的物流信息
    },
    search: function() {
      const result = this.data.result;
      wx.showLoading({
        title: '加载中',
      });
      wx.request({
        url: 'https://api.oioweb.cn/api/common/delivery?nu=' + this.data.no,
        method: 'GET',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: res => {
          console.log(res.data);
          if (res.data && res.data.result && res.data.result.data) {
            this.setData({
              expressInfo: res.data,
              result: res.data.result.data,
            });
          } else {
            wx.showToast({
              title: '查询失败，请重新查询',
              icon: 'none'
            });
          }
          wx.hideLoading();
        },
        fail: () => {
          wx.showToast({
            title: '查询失败，请重新查询',
            icon: 'none'
          });
          wx.hideLoading();
        }
      });
    },
    // 获取运单号的值
    noInput: function(e) {
      this.setData({
        no: e.detail.value
      });
    }
  });
  