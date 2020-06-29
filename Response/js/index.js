axios.get("./static/index.json")
    .then(res => {
        var hotitem = res.data.hot
        $(".hot1 p").html(hotitem[0].text)
        $(".hot1 .iimg").html(`<img class="lazyload" data-src="${hotitem[0].img}" data-srcset="${hotitem[0].imgs}" alt="1">`)
        $(".hot2 p").html(hotitem[1].text)
        $(".hot2 .iimg").html(`<img class="lazyload" data-src="${hotitem[1].img}" data-srcset="${hotitem[1].imgs}" alt="2">`)
        var row1 = res.data.row1
        for (var i = 0; i < row1.length; i++) {
            $(".row1").append(`
            <li >
                <a href="${row1[i].aimg}">
                    <img  class="lazyload"  data-src="${row1[i].img}"  data-srcset="${row1[i].imgs}"  alt="">
                    <div class="a">${row1[i].text}</div>
                </a>
            </li>
        `)
        }
        var row2 = res.data.row2
        for (var j = 0; j < row2.length; j++) {
            $(".row2").append(`
            <li>
                <a href="${row2[j].aimg}">
                    <img class="lazyload"  data-src="${row2[j].img}"  data-srcset="${row2[j].imgs}" alt="">
                    <div class="a">${row2[j].text}</div>
                </a>
            </li>
        `)
        }
    })
    .catch(err => {
        console.error(err);
        alert("出现了未知错误")
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