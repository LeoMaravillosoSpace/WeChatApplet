//JS
var app = getApp()
Page({
  data: {
   
    // 默认选中菜单
    currentTab: 0,
    index: 0,
    pick_name: "",
    // list数据
    list: [{
      binahao: "3124356568797697978",
      start: "已发货",
      arry: [{
          name: "海洋动物互动观摩",
          image: "/images/item3.jpg",
          money: "160",
        },
        {
          name: "海底观光艇",
          image: "/images/item1.jpg",
          money: "315",
        },
      ],
      cont_count: "2",
      count_money: "475",
    }, {
      binahao: "3124356568797697978",
      start: "已发货",
      arry: [{
          name: "海底观光艇",
          image: "/images/item1.jpg",
          money: "315",
        },
        {
          name: "迪士尼公园",
          image: "cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/item5.jpg",
          money: "610",
        },
        {
          name: "岸钓（包含门票）",
          image: "cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/diaoyu.jpg",
          money: "350",
        },
      ],
      cont_count: "3",
      count_money: "1275",
    }, {
        binahao: "79346568797697978",
        start: "已发货",
        arry: [{
            name: "英德红茶",
            image: "cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/tea.webp",
            money: "199",
          },
          {
            name: "云南鲜花饼",
            image: "cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/xianhua.jpg",
            money: "49.00",
          },
        ],
        cont_count: "2",
        count_money: "248",
      },
 
    ],
 
  },
 
  // 初始化加载
  onLoad: function() {
    var that = this;
 
  },
 
 
  //顶部tab切换
  navbarTap: function(e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
 
 
 
})