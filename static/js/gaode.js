AMapLoader.load({
    key: "0d18532b945e6f0b48c8cc079cf9fe83", //申请好的Web端开发者 Key，调用 load 时必填
    version: "2.0", //指定要加载的 JS API 的版本，缺省时默认为 1.4.15
  })
    .then((AMap) => {
      const map = new AMap.Map("map",{
        resizeEnable: true,
        viewMode: "2D",
        zoom: 16,
        center: [114.182395, 30.492186],
        // labelzIndex: -1,
        features: ['bg', 'road', 'building', 'point'],
        showLabel: true,
      }
      );
      const marker = new AMap.Marker({
      position: [114.182395, 30.492186], //位置
    //   icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/marker-red.png"
 
    });
    map.add(marker); //添加到地图
    })
    .catch((e) => {
      console.error(e); //加载错误提示
    });