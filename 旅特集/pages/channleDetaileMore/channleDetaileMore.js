// pages/detail/detail.js
Page({
    
    /**
     * 页面的初始数据
     */
    data: {
        newsList:{},
        content:'',
        isCollected:false,
        docid:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // const item = options.item
        // console.log(item);
        // 接收到页面传递的数据
        const eventChannel = this.getOpenerEventChannel()
        eventChannel.on('acceptDataFromOpenerPage', data=> {
        // console.log(data.data)
        // 存储数据
         this.setData({
             newsList:data.data
         })
        //  console.log(this.data.newsList);
      })

      //通过url获取内容
      wx.request({
        url: this.data.newsList.url,
        method: 'GET',
        header: {
            'content-type': 'application/json' // 默认值
      },success:res =>{
        //   console.log(res.data);
          const html = res.data; // 将 HTML 代码保存在一个变量中
            // 定义正则表达式，用来匹配<meta>标签
            const metaRegex = /<meta\s+property="og:description"\s+content="(.+?)"/;
            // 使用正则表达式匹配HTML代码中的<meta>标签
            const match = html.match(metaRegex);
            // 如果匹配成功，则提取出其中的content属性值
            if (match) {
            const content =match[1]; // 提取出content属性值
            // console.log(content);
            this.setData({
                content:content
            })
            }
      }
      })
    },

   
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})  