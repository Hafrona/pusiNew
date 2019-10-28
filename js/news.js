$(function(){
    let newsNav = $('.title-nav')
    newsNav.on('click',function(e){
        let arrs = []
        for(let i = 0; i < newsNav.length;i++){
            newsNav[i].index = i
            arrs.push(newsNav[i])
        }
        newsNav.removeClass("newsNavActive")
        $(this).addClass("newsNavActive")
    })
})