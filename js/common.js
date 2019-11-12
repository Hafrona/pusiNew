$(function () {
    // 点击回到顶部
    var topPage = function () {
        $('.go-top').on('click', () => {
            $("html,body").animate({ scrollTop: 0 }, 700);
        })
    }
    let data = JSON.stringify($(window)[0].location.href)
    localStorage.setItem('pageUrl', data)
    // 拿到本地存储的iframe高度，让父窗口自适应
    function iframe() {
        let iframeHeight = localStorage.getItem('iframeHeight');
        $('#content-iframe')[0].height = iframeHeight + 'px'
        $('#content-iframe')[0].style.marginBottom = '26px'
    }
    iframe()
    topPage()
})