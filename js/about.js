// main
axios.get('./router/about.json')
  .then(function (res) {
    $('main > ul').append(`
      <li class="map-show" id="allmap"></li>
    `)

    var map = new BMap.Map("allmap");
    var point = new BMap.Point(119.247957,26.060076);
    var marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);              // 将标注添加到地图中
    map.centerAndZoom(point, 20);
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