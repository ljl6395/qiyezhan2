$(document).ready(function () {
  // 获取团队信息
  axios.get('./router/team-info.json')
  .then(function (res) {
    res.data.team.forEach(function (item) {
      $('#team > ul').append(`
        <li>
          <div class="contentImg"><img src="${item.img}" alt=""></div>
          <div class="contentBox">
            <h2>${item.title}</h2>
            <p class="text">${item.text}</p>
            <hr />
            <p class="attr">能 &nbsp 力: ${item.attr}</p>
          </div>
        </li>
      `)
    })
  })

  // 获取新闻信息
  axios.get('./router/news.json')
  .then(function (res) {
    res.data.news.forEach(function (item) {
      $('#news > ul').append(`
        <li>
          <a href="./news.html"><img src="${item.img}" alt=""></a>
          <p class="newsTitle">${item.title}</p>
          <hr>
          <p class="newsText">${item.text}</p>
        </li> 
      `)
    })
  })

  $(window).resize(function() {
  var imgHeight = $('.carousel .panels > a').height()
  $('.carousel .panels').height(imgHeight)
  })
})
