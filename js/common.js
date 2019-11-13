$(function () {
    // 点击回到顶部
    var topPage = function () {
        $('.go-top').on('click', () => {
            $("html,body").animate({ scrollTop: 0 }, 700);
        })
    }
    localStorage.setItem('pageUrl',$(window)[0].location.href)
    topPage()
})