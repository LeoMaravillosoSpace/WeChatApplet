// pages/shopping/shopping.js
const app = getApp()
const db = wx.cloud.database()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    shoppingData: [], // 用于存储从云数据库获取的数据
  },

  onLoad: function (options) {
    // 页面加载时从云数据库中获取数据
    this.getDataFromDatabase()
    // 添加数据
    // this.addData();
  },

  // 添加数据
  addData() {
    const collection = db.collection('shopping');
    wx.cloud.callFunction({
      name: 'addData',
      success: (res) => {
        console.log(res.result) // 打印云函数执行结果
        const newData = res.result; // 获取云函数返回的新数据
        const { shoppingData } = this.data; // 获取已有的数据

        // 检查是否已存在相同的数据
        const isDuplicate = shoppingData.some(item => item.id === newData.id); // 假设数据有唯一的 id 字段
        if (isDuplicate) {
          console.log('数据已存在，不进行添加操作');
          return;
        }

        const updatedData = shoppingData.concat(newData); // 将新数据与已有数据合并
        this.setData({
          shoppingData: updatedData, // 更新 shoppingData 字段中的数据
        });
      },
      fail: function(err) {
        console.error(err) // 打印调用失败的错误信息
      }
    });
  },

  // 获取信息
  getDataFromDatabase() {
    const collection = db.collection('shopping');
    collection.get().then(res => {
      console.log(res);
      if (res.data && res.data.length > 0) {
        this.setData({
          shoppingData: res.data,
        });
      }
    }).catch(err => {
      console.error(err);
    });
  },

  // 查看更多
  more: function () {
    wx.showToast({
      title: '没有更多了哦！',
      icon: 'none',
      duration: 2000
    });
  },
})
