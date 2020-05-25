function iaioxs() {
    axios.get("./static/newlist.json")
        .then(res => {
            console.log(res)
            var item = res.data.list
            for (var i = 0; i < item.length; i++) {
                $(".aul").append(`
                <li>
                    <div class="a">
                        <img src="${item[i].img}" alt="">
                    </div>
                    <div class="b">
                        <a href="./new.html?id=${item[i].id}">
                            <h2>${item[i].title}</h2>
                            <h4>${item[i].time}</h4>
                            <h4>${item[i].synopsis}</h4>
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
}
)
$(".btn2").click(function () {
    $(".aul").empty()
    axios.get("./static/newlist2.json")
        .then(res => {
            console.log(res)
            var item2 = res.data.list
            for (var i = 0; i < item2.length; i++) {
                $(".aul").append(`
                <li>
                    <div class="a">
                        <img src="${item2[i].img}" alt="">
                    </div>
                    <div class="b">
                        <a href="./new.html?id=${item2[i].id}">
                            <h2>${item2[i].title}</h2>
                            <h4>${item2[i].time}</h4>
                            <h4>${item2[i].synopsis}</h4>
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
})