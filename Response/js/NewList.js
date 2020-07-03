function iaioxs() {
  axios.get("https://mock-api.com/9KOG2JKk.mock/newlist")
    .then(res => {
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
  axios.get("https://mock-api.com/9KOG2JKk.mock/newlist1")
    .then(res => {
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
$(".btn1").click(function () {
  $(".aul").empty()
  iaioxs()
  $(".bii").removeClass("disabled");
  $(".aii").removeClass("btnleft");
  $(".aii").addClass("disabled");
  $(".bii").addClass("btnright");
}
)

$(".aii").click(function () {
  if($(".aii").hasClass("btnleft")){
    $(".aul").empty()
    iaioxs()
    $(".btnright").removeClass("disabled");
    $(".btnleft").removeClass("btnleft");
    $(".btnleft").addClass("disabled");
    $(".btnright").addClass("btnright");
  };
}
)

$(".btn2").click(function () {
  $(".aul").empty()
  aaixos()
  $(".aii").removeClass("disabled");
  $(".bii").removeClass("btnright");
  $(".bii").addClass("disabled");
  $(".aii").addClass("btnleft");
}
)
$(".btnright").click(function () {
  if($(".bii").hasClass("btnright")){
    $(".aul").empty()
    aaixos()
    $(".aii").removeClass("disabled");
    $(".bii").removeClass("btnright");
    $(".bii").addClass("disabled");
    $(".aii").addClass("btnleft");
  };
})


$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) 
  var recipient = button.data('whatever') 
  var modal = $(this)
  modal.find('.modal-title').text('联系我通过 ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

$("body").click(function (e) {
  console.log(document.documentElement.scrollTop);
  addLink(e)
})
var Arr = [];
function addLink(e) {
  var newDiv = document.createElement("div")
  newDiv.classList.add('tag')
  newDiv.innerHTML = `<img src="../img/icon.png" width="50px" alt="">`
  document.body.appendChild(newDiv)
  Arr.push({
      el: newDiv,
      top: document.documentElement.scrollTop+e.clientY - 20,
      left: e.clientX - 10,
      opacity: 1,
      scale: 1,
      color: `rgb(${255 * Math.random()},${255 * Math.random()},${255 * Math.random()})`
  })
  moveLike();
}
function moveLike() {

  for (var i = 0; i < Arr.length; i++) {
      if (Arr[i].opacity <= 0) {
          document.body.removeChild(Arr[i].el);
          Arr.splice(i, 1);
          return;
      }
      Arr[i].top--;
      Arr[i].opacity -= 0.01;
      Arr[i].scale += 0.01;
      Arr[i].el.style.top = `${Arr[i].top}px`
      Arr[i].el.style.left = `${Arr[i].left}px`
      Arr[i].el.style.opacity = `${Arr[i].opacity}`
      Arr[i].el.style.transform = `scale(${Arr[i].scale})`
      Arr[i].el.style.color = `${Arr[i].color}`
  }
  window.requestAnimationFrame(moveLike)
}