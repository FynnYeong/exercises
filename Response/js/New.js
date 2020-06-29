var query = window.location.search.substring(1);
var q=Number(query.substring(3))
axios.get("../static/new.json")
.then(res => {
    console.log(res)
    var item=res.data.new
    console.log(item[q].body)
    $(".newbody h2").html(item[q].title)
    $(".newbody h5").html(item[q].time)
    $(".newbody h4").html(item[q].synospsis)
    $(".newbody p").html(`<img class="lazyload" data-src="${item[q].img}" alt="" >`)
    $(".newbody .v").html(item[q].body)
})
.catch(err => {
    console.error(err); 
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