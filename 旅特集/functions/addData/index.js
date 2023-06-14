const cloud = require('wx-server-sdk');
cloud.init();

const db = cloud.database();
const collection = db.collection('shopping');

exports.main = async (event, context) => {
  try {
    const data = [
      {
        imageUrl: 'cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/ziboshaokao.webp',
        title: '淄博烧烤',
        content: '淄博烧烤以烤全羊著称，种类繁多，最负盛名。全羊让肉质嫩而不腻，多种调料令串烧味香浓而不油腻。沿袭称霸蒸馏多时的烤肉经验和口味。',
      },
      {
        imageUrl: 'cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/item1.jpg',
        title: '海底世界潜艇',
        content: '每个舱位可以乘坐6名乘客，配置有空调设施，出于安全考虑不可以开窗。整个潜艇是由一个坚固的混凝土箱和巨大的亚克力窗户造成，它就像是一个快要沉没的潜水镜，一般沉浮在水下面。',
      },
      {
        imageUrl: 'cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/item5.jpg',
        title: '上海迪士尼乐园',
        content: '是一个特别为中国游客设计和打造的世界级家庭娱乐目的地。整个度假区于2016年6月开幕，包括上海迪士尼乐园，由六大主题园区组成，包括：“米奇大街”、“奇想花园”、“探险岛”及拥有“奇幻童话城堡”的“梦幻世界”。',
      },
      {
        imageUrl: 'cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/diaoyu.jpg',
        title: '海钓',
        content: '大凡海钓者岸钓都是抛底、打浮，甩竿后就挂上铃铛在那死守。这些钓法的特点是轻松自在，愿者上钩，比较适合老年人。',
      },
      {
        imageUrl: 'cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/item3.jpg',
        title: '动物园探险',
        content: '这不仅是一次神秘的探索之旅，也将是一次难得的与动物近距离接触互动的机会，培养孩子的观察能力和动手能力。通过孩子与动物的亲密互动，培养孩子的观察和动手能力；同时也能让孩子与自然亲密，了解动物的生态习性，感受大自然的美好。',
      },
      {
        imageUrl: 'cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/item4.jpg',
        title: '美食之旅',
        content: '在南山旅游区，可以品尝到海鲜、川菜、湘菜、粤菜等各地美食。其中，以海鲜最为著名，新鲜美味。如果你喜欢辣的味道，那么川菜和湘菜也是不错的选择。',
      },
      {
        imageUrl: 'cloud://cloud1-9gdlbrz28af5b0cb.636c-cloud1-9gdlbrz28af5b0cb-1317411326/images/picture1.avif',
        title: '泰山',
        content: '泰山是中国五岳之首，古名岱山，又称岱宗、天孙，位于山东省中部，泰安市境内，矗立在鲁中群山间。',
      },
    ];

    // 使用循环将数据批量添加到 "shopping" 集合中
    const promises = data.map(item => {
      return collection.add({
        data: {
          title: item.title,
          content: item.content,
          imageUrl: item.imageUrl,
        },
      });
    });

    // 等待所有添加操作完成
    const result = await Promise.all(promises);

    console.log(result); // 打印执行结果

    return {
      success: true,
      data: result,
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: err,
    };
  }
};
