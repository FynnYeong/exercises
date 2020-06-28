var query = window.location.search.substring(1);
var q=Number(query.substring(3))
console.log(q)
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