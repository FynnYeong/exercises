$(document).ready(function () {
  function addmap() {
      // 百度地图API功能
      var map = new BMap.Map("aboutmap");    // 创建Map实例
      var point = new BMap.Point(119.302572, 26.086075);
      map.centerAndZoom(point, 15);// 初始化地图,设置中心点坐标和地图级别
      var marker = new BMap.Marker(point);  // 创建标注
      map.addOverlay(marker);               // 将标注添加到地图中 
      //添加地图类型控件
      map.addControl(new BMap.MapTypeControl({
          mapTypes: [
              BMAP_NORMAL_MAP,
              BMAP_HYBRID_MAP
          ]
      }));
      map.setCurrentCity("福州");          // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
      var top_left_control = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_TOP_LEFT });// 左上角，添加比例尺
      var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
      var top_right_navigation = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL }); //右上角，仅包含平移和缩放按钮
      /*缩放控件type有四种类型:
      BMAP_NAVIGATION_CONTROL_SMALL：仅包含平移和缩放按钮；BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮*/

      //添加控件和比例尺
      map.addControl(top_left_control);
      map.addControl(top_left_navigation);
      map.addControl(top_right_navigation);
  }
  addmap();
});

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