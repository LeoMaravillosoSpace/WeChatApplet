Page({
  data: {
    // 导航栏
    navbar: ['热门', '搜索', '筛选'],
    currentTab: 0,
    //tab01
    tabTxt: ['品牌', '价格', '销量'],//分类
    tab: [true, true, true],
    pinpaiList: [{ 'id': '1', 'title': '品牌1' }, { 'id': '1', 'title': '品牌1' }],
    pinpai_id: 0,//品牌
    pinpai_txt: '',
    jiage_id: 0,//价格
    jiage_txt: '',
    xiaoliang_id: 0,//销量
    xiaoliang_txt: '',
    
    goodslist: [
      {
          id:"001",
          imgUrl:"cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/item1.jpg",
          name:"海底观光艇",
          goods_xiaoliang:'476',
          price:"315.00"
      },
      {
          id:"002",
          imgUrl:"cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/item5.jpg",
          name:"上海迪士尼度假区学生票",
          goods_xiaoliang:'6370',
          price:"288.00"
      },
      {
          id:"003",
          imgUrl:"cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/feijiguanguang.avif",
          name:"海底瀑布飞行观光",
          goods_xiaoliang: '34',
          price:"2098.00"
      },
      {
          id:"004",
          imgUrl:"cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/jiuzaigou.avif",
          name:"九寨沟黄龙旅游",
          goods_xiaoliang: '300+',
          price:"3588.00"
      },
      {
          id:"005",
          imgUrl:"cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/item5.jpg",
          name:"迪士尼公园",
          goods_xiaoliang: '5700',
          price:"300.00"
      },
      {
          id:"006",
          imgUrl:"cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/diaoyu.jpg",
          name:"岸钓（包含门票）",
          goods_xiaoliang:'113',
          price:"350.00"
      },
      {
        id:"007",
        imgUrl:"cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/tea.webp",
        name:"英德红茶",
        goods_xiaoliang:'1150',
        price:"199.00"
    },
    {
      id:"008",
      imgUrl:"cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/xianhua.jpg",
      name:"云南鲜花饼",
      goods_xiaoliang:'113',
      price:"49.00"
  },

      
  ],
 //tab02
//搜索
inpuVal: "",//input框内值
  
listarr: [],//创建数组

SearchText: '取消',//按钮变动值

keydown_number: 0,//检测input框内是否有内容

input_value: "",//value值

hostarr: [],//热门搜索接收请求存储数组

name_focus: true,//获取焦点

//tab03
iconColor: [
  'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
],
iconStyle: [
  {
    "type":"美食类景区",
    "size":30,
    "color":"#32CD32"
  },
  {
    "type": "探险类景区",
    "size": 30,
    "color": "orange"
  },
  {
    "type": "刺激类景区",
    "size": 30,
    "color": "yellow"
  },
  {
    "type": "游乐园",
    "size": 30,
    "color": "green"
  },
  {
    "type": "电影院",
    "size": 30,
    "color": "rgb(0,255,255)"
  },
  {
    "type": "主题公园",
    "size": 30,
    "color": "blue"
  },
  {
    "type": "旅游度假区",
    "size": 30,
    "color": "purple"
  },
  {
    "type": "购物中心",
    "size": 30,
    "color": "#C4C4C4"
  },
  {
    "type": "表演中心",
    "size": 30,
    "color": "red"
  }
]
  },
  // 导航栏
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  // 加入购物车
  addcart:function(e){
    this.setData({
        toastHidden:false
    });
    // 遍历列表 与 购物车列表
    for (var i in this.data.goodslist){
        // 列表中某一项item的id == 点击事件传递过来的id。则是被点击的项
        if(this.data.goodslist[i].id == e.target.id){
            // 给goodsList数组的当前项添加count元素，值为1，用于记录添加到购物车的数量
            this.data.goodslist[i].count = 1;
            // 获取购物车的缓存数组（没有数据，则赋予一个空数组）
            var arr = wx.getStorageSync('cart') || [];
            // 如果购物车有数据
            if(arr.length>0){
                // 遍历购物车数组
                for(var j in arr){
                    // 判断购物车内的item的id，和事件传递过来的id，是否相等
                    if(arr[j].id == e.target.id){
                        // 相等的话，给count+1（即再次添加入购物车，数量+1）
                        arr[j].count = arr[j].count + 1;
                        // 最后，把购物车数据，存放入缓存（此处不用再给购物车数组push元素进去，因为这个是购物车有的，直接更新当前数组即可）
                        try {
                            wx.setStorageSync('cart', arr)
                        } catch (e) {
                            console.log(e)
                        }
                        // 返回（在if内使用return，跳出循环节约运算，节约性能）
                        return;
                    }
                }
                // 遍历完购物车后，没有对应的item项，把goodslist的当前项放入购物车数组
                arr.push(this.data.goodslist[i]);
            }
            // 购物车没有数据，把item项push放入当前数据（第一次存放时）
            else{
                arr.push(this.data.goodslist[i]);
            }
            // 最后，把购物车数据，存放入缓存
            try {
                wx.setStorageSync('cart', arr)
                // 返回（在if内使用return，跳出循环节约运算，节约性能）
                return;
            } catch (e) {
                console.log(e)
            }
        }
    }
},
goto: function () {
  wx.navigateTo({
    url: '../shopping/shopping',
  })
},
  //查看更多
  more: function (){
    wx.showToast({
   
      title: '没有更多了哦！',
       
      icon: 'none',
       
      duration: 2000
       
      })
    },
  //tab02
   // 搜索
//取值input判断输入框内容修改按钮
  
inputvalue: function (e) {
  this.setData({
  inputVal: e.detail.value
  
  })
  
  if (e.detail.cursor != 0) {
  this.setData({
  SearchText: "搜索",
  
  keydown_number: 1
  
  })
  
  } else {
  this.setData({
  SearchText: "取消",
  
  keydown_number: 0
  
  })
  
  }
  
  },
  
  //搜索方法
  
  search: function () {
  if (this.data.keydown_number == 1) {
  let This = this;
  
  //把获取的input值插入数组里面
  
  let arr = this.data.listarr;
  
  console.log(this.data.inputVal)
  
  console.log(this.data.input_value)
  
  //判断取值是手动输入还是点击赋值
  
  if (this.data.input_value == "") {
  // console.log('进来第er个')
  
  // 判断数组中是否已存在
  
  let arrnum = arr.indexOf(this.data.inputVal);
  
  console.log(arr.indexOf(this.data.inputVal));
  
  if (arrnum != -1) {
  // 删除已存在后重新插入至数组
  
  arr.splice(arrnum, 1)
  
  arr.unshift(this.data.inputVal);
  
   
  
  } else {
  arr.unshift(this.data.inputVal);
  
  }
  
   
  
  } else {
  console.log('进来第一个')
  
  let arr_num = arr.indexOf(this.data.input_value);
  
  console.log(arr.indexOf(this.data.input_value));
  
  if (arr_num != -1) {
  arr.splice(arr_num, 1)
  
  arr.unshift(this.data.input_value);
  
  } else {
  arr.unshift(this.data.input_value);
  
  }
  
   
  
  }
  
  console.log(arr)
  
   
  
  //存储搜索记录
  
  wx.setStorage({
  key: "list_arr",
  
  data: arr
  
  })
  
  
   
  
  //取出搜索记录
  
  wx.getStorage({
  key: 'list_arr',
  
  success: function (res) {
  This.setData({
  listarr: res.data
  
  })
  
  }
  
  })
  
  this.setData({
  input_value: '',
  
  })
  
  } else {
  console.log("取消")
  
  }
  
   
  
  },
  
  //清除搜索记录
  
  delete_list: function () {
  //清除当前数据
  
  this.setData({
  listarr: []
  
  });
  
  //清除缓存数据
  
  wx.removeStorage({
  key: 'list_arr'
  
  })
  
  },
  
  //点击赋值到input框
  
  this_value: function (e) {
  this.setData({
  name_focus: true
  
  })
  
  let value = e.currentTarget.dataset.text;
  
  this.setData({
  input_value: value,
  
  SearchText: "搜索",
  
  keydown_number: 1
  
  })
  
  },
  
  /**
  
  * 生命周期函数--监听页面加载
  
  */
  
  onLoad: function (options) {
  let This = this;
  
  
  
  //读取缓存历史搜索记录
  
  wx.getStorage({
  key: 'list_arr',
  
  success: function (res) {
  This.setData({
  listarr: res.data
  
  })
  
  }
  
  })
  
 
  
  }
   
})