const app = getApp()

Page({
  data: {
    contacts: [] // 常用联系人列表
  },

  onLoad() {
    // 页面加载时从云数据库中获取常用联系人列表
    this.getContacts()
  },
  //回调刷新
  onShow(){
    if(app.globalData.back){
      this.onLoad()
      app.globalData.back=0
    }
  },

  getContacts() {
    wx.cloud.callFunction({
      name: 'linkway',
      data: {
        action: 'getContacts',
        env: app.globalData.env // 使用小程序全局变量中保存的云环境 ID
      },
      success: res => {
        console.log('获取常用联系人列表成功', res)
        this.setData({
          contacts: res.result.data
        })
      },
      fail: err => {
        console.error('获取常用联系人列表失败', err)
      }
    })
  },
  // 新增联系人
  addContact() {
    
    wx.navigateTo({
      url: '/pages/edit-contact/edit-contact'
    })
  },
  // 编辑联系人
  editContact(e) {
    console.log(e)
    // const contactId = e.currentTarget.dataset.contactid;
    wx.navigateTo({
      url: '/pages/edit-contact/edit-contact',
      success: function(res) {
                // 通过eventChannel向被打开页面传送数据
      res.eventChannel.emit('acceptDataFromOpenerPage', { data:e.currentTarget.dataset.obj})}
    });
  },
  // 删除联系人
  deleteContact(e) {
    const _id = e.currentTarget.dataset.id
    wx.showModal({
      title: '确认删除',
      content: '确定要删除该联系人吗？',
      success: res => {
        if (res.confirm) {
          wx.cloud.callFunction({
            name: 'linkway',
            data: {
              action: 'deleteContact',
              _id: _id, // 将参数名改为 _id
              env: app.globalData.env
            },
            success: res => {
              console.log('删除联系人成功', res)
              // 删除成功后刷新列表
              this.getContacts()
            },
            fail: err => {
              console.error('删除联系人失败', err)
            }
          })
        }
      }
    })
  },

  // 页面下拉刷新事件
  onPullDownRefresh() {
    this.getContacts()
  }
})