Page({
  data: {
  footerText: '© 2023 HappyTravel Inc.',
  imgUrls: [
    {
      url:  '/images/i_view1.jpg',
      desc: 'Cali is the coolest沙漠小屋'
    },
    {
      url: '/images/i_view2.webp',
      desc: 'Birdbox雪地小屋'
    },
    {
      url: '/images/i_view3.webp',
      desc: 'Aura House生态竹屋'
    },
    {
      url: '/images/i_view4.jpeg',
      desc: 'Cottage Sataplia萨普小屋'
    },
  ],
  portalItems : [
    [
      {
        url: 'cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/1-1-1.png',
        text: '景区'
      },
      {
        url: 'cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/1-2-1.png',
        text: '住宿'
      },
      {
        url: 'cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/1-3-1.png',
        text: '快车'
      },
      {
        url: 'cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/1-4-1.png',
        text: '美食'
      },
    ],
    [
      {
        url: 'cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/2-1-1.png',
        text: '导游'
      },
      {
        url: 'cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/2-2-1.png',
        text: '特产'
      },
      {
        url: 'cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/2-3-1.png',
        text: '旅游'
      },
      {
        url: 'cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/2-4-2.png',
        text: '套餐'
      },
    ]
  ],
  
  "items": [
    {
      "id": "1",
      "imageUrl": "cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/picture1.avif",
      "content": "泰山"
    },
    {
      "id": "2",
      "imageUrl": "cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/picture2.avif",
      "content": "桂林山水"
    },
    {
      "id": "3",
      "imageUrl": "cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/picture3.avif",
      "content": "长城"
    },
    {
      "id": "4",
      "imageUrl": "cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/picture4.jpg",
      "content": "浪漫三亚"
    }
  ],
  //酒店推荐
  dataList:[
     {
      goods_id: 1,
      goods_title: 'Florence',
      goods_img: 'cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/hotel11.webp',
      goods_xiaoliang: '俯瞰膝山溪（Kneehill Creek）',
      goods_price: '4792'
      // https://www.airbnb.cn/rooms/43423090?adults=1&category_tag=Tag%3A8115&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-05-22&check_out=2023-05-27&federated_search_id=793d5ba1-5bb7-4dd8-9aef-4ee7e575689d&source_impression_id=p3_1684293602_pZXyvnWMkhvja1wX
    }, {
      goods_id: 1,
      goods_title: 'Conde Nast Traveller',
      goods_img: 'cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/hotel2.jpg',
      goods_xiaoliang: '位于岩石上的旅宿',
      goods_price: '6798'
      // https://www.airbnb.cn/rooms/43475678?adults=1&category_tag=Tag%3A8099&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-06-25&check_out=2023-06-30&federated_search_id=19234bf8-7f7c-4363-85af-04446ab66bc1&source_impression_id=p3_1684293808_ZdolmVjZy%2F0Q%2FDuq
    }, {
      goods_id: 1,
      goods_title: '湄宝别墅（ Chao Pao Villa ）',
      goods_img: 'cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/hotel3.jpg',
      goods_xiaoliang: '波西米亚时尚，壮丽的海景',
      goods_price: '8135'
      // https://www.airbnb.cn/rooms/37924490?adults=1&category_tag=Tag%3A5348&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-06-12&check_out=2023-06-17&federated_search_id=f47352b9-5269-466d-914b-d6957c844906&source_impression_id=p3_1684293948_VF%2Bqvz4rimw5MjrH
    },
  ]
  },
  //查看更多
  more: function (){
    wx.showToast({
   
      title: '没有更多了哦！',
       
      icon: 'none',
       
      duration: 2000
       
      })
    },
      //功能按钮跳转
ToChannel:function(event) {
    const channal = event.currentTarget.dataset.channal
  wx.setStorageSync('channal', channal)
  console.log(wx.getStorageSync('channal'));
  wx.navigateTo({
      url: '../channleDetaile/channleDetail?channal='+channal,
  })
},
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  goto: function () {
    wx.navigateTo({
      url: '../shopping/shopping',
    })
  },
 })