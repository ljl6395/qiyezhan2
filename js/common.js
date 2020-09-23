$(document).ready(function() {
  // footer
  axios.get('./router/about.json')
  .then(function (res) {
    res.data.about.forEach(function (item) {
      $('footer > ul').append(`
        <li>
          <a href="./about.html"><span class="iconfont ${item.icon}"></span></a><br>
          <span>${item.text}</span>
        </li> 
      `)
    })
    $('footer > ul').append(`
      <li>
        <a href="./about.html"><span><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1838781477,1688363439&fm=115&gp=0.jpg" alt="" /></span></a><br/>
        <span>扫一扫 加入复仇者联盟</span>
      </li> 
    `)
  })

  $('#menu').on('click', function() {
    document.querySelector('#nav2').classList.toggle('active')
    if ($('#nav2').hasClass('active')) {
      $('#nav2').animate({ marginTop: '15px', height: '70px' }, 200)
    } else {
      $('#nav2').animate({ height: '0px', marginTop: '0px' }, 200)
    }
  })

  $(window).resize(function() {
    $('#nav2').removeClass('active')
  })
})