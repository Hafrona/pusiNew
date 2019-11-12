$(function () {
    var pageUrl = JSON.parse(localStorage.getItem('pageUrl'))
    // 顶部导航栏点击跳转改变样式
    let headerNav = $('.header-nav ul li').children()
    headerNav.each(function () {
        $this = $(this);
        if ($this[0].href == pageUrl) {
            $this.addClass("headNavActive");
        }
    })
})