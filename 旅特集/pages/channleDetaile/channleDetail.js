Page({
  data: {
    searchList: []
  },

  onLoad(options) {
    const channal = options.channal;

    if(channal=='旅游'){
        wx.request({
        url: 'https://3g.163.com/touch/reconstruct/article/list/BEO4GINLwangning/0-20.html',
        method: 'GET',
        header: {
              'content-type': 'application/json' // 默认值
        },
        success:res =>{
            const dataStr = res.data
            const jsonDataStr = dataStr.slice(dataStr.indexOf('(') + 1, dataStr.lastIndexOf(')'));
            const jsonData = JSON.parse(jsonDataStr);
            
            // console.log(res.data);
            this.setData({
                searchList:jsonData["BEO4GINLwangning"]
            })
        }
      })
    } else {
      let url;
      switch (channal) {
        case '体育':
          url = 'https://3g.163.com/touch/reconstruct/article/list/BA8E6OEOwangning/0-20.html';
          break;
        case '娱乐':
          url = 'https://3g.163.com/touch/reconstruct/article/list/BA10TA81wangning/0-20.html';
          break;
        case '科技':
          url = 'https://3g.163.com/touch/reconstruct/article/list/BA8D4A3Rwangning/0-20.html';
          break;
        case '健康':
          url = 'https://3g.163.com/touch/reconstruct/article/list/BDC4QSV3wangning/0-20.html';
          break;
        case '游戏':
          url = 'https://3g.163.com/touch/reconstruct/article/list/BAI6RHDKwangning/0-20.html';
          break;
        case '教育':
          url = 'https://3g.163.com/touch/reconstruct/article/list/BA8FF5PRwangning/0-20.html';
          break;
      }

      wx.request({
        url: url,
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success: res => {
          const dataStr = res.data;
          const jsonDataStr = dataStr.slice(dataStr.indexOf('(') + 1, dataStr.lastIndexOf(')'));
          const jsonData = JSON.parse(jsonDataStr);
          this.setData({
            searchList: jsonData[channal]
          });
        },
        fail: err => {
          console.error(err);
        }
      });
    }
  },

  gotoDetail(e) {
    const obj = e.currentTarget.dataset.obj;
    wx.navigateTo({
      url: '/pages/channleDetaileMore/channleDetaileMore',
      success: function (res) {
        res.eventChannel.emit('acceptDataFromOpenerPage', {
          data: obj
        });
      }
    });
  }
});