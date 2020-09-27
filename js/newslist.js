const id = window.location.search.split('id=')[1]
axios.get(`https://www.fastmock.site/mock/58474f0cb5a0cdb0857fcb5441102cb4/test/news-list?id=${id}`)
  .then(function (res) {
    let item = res.data.newslist[0]

    $('#titleDivAA').append(`
      <span class="red"></span><p class="newsTitle">${item.title}</p>
      <p class="dateAA">${item.date} &nbsp ${item.date2}</p>
    `)
    $('#infoAA').append(`
      <img src="${item.img}" alt="">
      <p>${item.text}</p>
      <p>${item.text}</p>
    `)
  })