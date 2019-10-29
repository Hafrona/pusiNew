$(function () {
    // 顶部导航栏
    $('.btn').on('click', function () {
        $(this).addClass("headNavActive");
    })
    console.log(window.location)
    // let url = window.location.href.substring(42)
    // console.log(url)
    // 地图
    var pusiLocation = function () {
        var map = new BMap.Map("map");
        // 初始化地图
        var point = new BMap.Point(118.97549, 25.40753);
        // 是否开启鼠标滚轮缩放
        map.enableScrollWheelZoom(true);
        // 点击加减缩放控件
        let opts = { type: BMAP_NAVIGATION_CONTROL_ZOOM }
        map.addControl(new BMap.NavigationControl(opts));
        map.centerAndZoom(point, 15);
        // 在地图上定位到某点
        var marker = new BMap.Marker(point)//创建标注
        map.addOverlay(marker);// 将标注添加到地图中
        map.panTo(point);// 转到该点位置

        let myLabel = new BMap.Label("璞思学校", { //未label填写内容
            offset: new BMap.Size(15, -25),       // label的偏移量，为了让label的中心显示在点上
            position: point                       // label的位置
        });
        myLabel.setTitle("我是文本标注label");    // 为label添加鼠标提示
        map.addOverlay(myLabel)
        myLabel.setStyle({                                   //给label设置样式，任意的CSS都是可以的
            fontSize: "14px",               //字号
            borderWidth: '1px',                    //边
            borderStyle: "solid",
            borderColor: "#000"
        });
    }
    // 置顶
    var topPage = function () {
        $('.go-top').on('click', () => {
            $("html,body").animate({ scrollTop: 0 }, 700);
        })
    }
    topPage()
    pusiLocation()
})