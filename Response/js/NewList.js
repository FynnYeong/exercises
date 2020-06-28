function iaioxs() {
  axios.get("../static/newlist.json")
    .then(res => {
      console.log(res)
      var item = res.data.list
      for (var i = 0; i < item.length; i++) {
        $(".aul").append(`
              <li class="row">
                  <div class="a col-12 col-md-6 col-lg-4">
                      <img class="lazyload" data-src="${item[i].img}" alt="">
                  </div>
                  <div class="b col-12 col-md-6 col-lg-8 mt-md-4 mt-lg-5">
                      <a href="./New.html?id=${item[i].id}">
                          <h4>${item[i].title}</h4>
                          <h6>${item[i].time}</h6>
                          <h6>${item[i].synopsis}</h6>
                      </a>
                  </div>
              </li>
          `)
      }
    })
    .catch(err => {
      console.error(err);
      alert("出现未知错误")
    })
}
function aaixos(){
  axios.get("../static/newlist2.json")
    .then(res => {
      console.log(res)
      var item2 = res.data.list
      for (var i = 0; i < item2.length; i++) {
        $(".aul").append(`
              <li>
                  <div class="a col-12 col-md-6 col-lg-4">
                      <img class="lazyload" data-src="${item2[i].img}" alt="">
                  </div>
                  <div class="b col-12 col-md-6 col-lg-8 mt-md-4 mt-lg-5">
                      <a href="./new.html?id=${item2[i].id}">
                          <h4>${item2[i].title}</h4>
                          <h6>${item2[i].time}</h6>
                          <h6>${item2[i].synopsis}</h6>
                      </a>
                  </div>
              </li>
          `)
      }
    })
    .catch(err => {
      console.error(err);
      alert("出现未知错误")
    })
}
iaioxs()
$(".btn1,.btnleft").click(function () {
  $(".aul").empty()
  iaioxs()
  $(".btnright").removeClass("disabled");
  // $(".btnleft").removeClass("btnleft");
  $(".btnleft").addClass("disabled");
  // $(".btnright").addClass("btnright");
}
)

$(".btn2,.btnright").click(function () {
  $(".aul").empty()
  aaixos()
  $(".btnright").addClass("disabled");
  $(".btnleft").removeClass("disabled");
})