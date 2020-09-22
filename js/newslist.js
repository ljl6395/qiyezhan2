axios.get(`./router/newsinfo-page=1.json`)
  .then(function (res) {
    let item = res.data.news[0]

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