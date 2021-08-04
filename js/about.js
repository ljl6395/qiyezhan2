// main
axios.get('./router/about.json')
  .then(function (res) {
    $('main > ul').append(`
      <li class="map-show" id="allmap"></li>
    `)

    var map = new BMap.Map("allmap");
    // var point = new BMap.Point(119.247957,26.060076);
    // var marker = new BMap.Marker(point);  // 创建标注
    // map.addOverlay(marker);              // 将标注添加到地图中
    // map.centerAndZoom(point, 20);
    // map.enableScrollWheelZoom(true);
    map.centerAndZoom(new BMap.Point(119.33022111, 26.0471255), 11);
    var local = new BMap.LocalSearch(map, {
      renderOptions: { map: map }
    });
    local.search("福州西湖公园");
    map.addControl(new BMap.MapTypeControl({
      mapTypes: [
        BMAP_NORMAL_MAP,
        BMAP_HYBRID_MAP
      ]
    }));
    map.enableScrollWheelZoom(true);


    res.data.about.forEach(function (item) {
      $('main > ul .aboutText').append(`
        <p>
          <span class="iconfont ${item.icon}"></span>
          <span>${item.text}</span>
        </p>
      `)
    })
  })