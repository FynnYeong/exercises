axios.get("./static/index.json")
    .then(res => {
        console.log(res)
        var hotitem = res.data.hot
        $(".hot1 p").html(hotitem[0].text)
        $(".hot1 .iimg").html(`<img class="lazyload" data-src="${hotitem[0].img}" alt="1">`)
        $(".hot2 p").html(hotitem[1].text)
        $(".hot2 .iimg").html(`<img class="lazyload" data-src="${hotitem[1].img}" alt="2">`)
        var row1 = res.data.row1
        for (var i = 0; i < row1.length; i++) {
            console.log(i)
            $(".row1").append(`
            <li >
                <a href="${row1[i].aimg}">
                    <img class="lazyload" data-src="${row1[i].img}" alt="">
                    <div class="a">${row1[i].text}</div>
                </a>
            </li>
        `)
        }
        var row2 = res.data.row2
        console.log(row2[1])
        for (var j = 0; j < row2.length; j++) {
            $(".row2").append(`
            <li>
                <a href="${row2[j].aimg}">
                    <img class="lazyload" data-src="${row2[j].img}" alt="">
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