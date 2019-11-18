$(function () {
    // 轮播图
    let swiper = function (id, transIndex) {
        let familyImg = $(".swiperList").children()
        let mySwiper = new Swiper("#" + id, {
            loop: true,
            loopedSlides: 5,
            slidesPerView: 'auto',
            autoplay: false,// 自动轮播
            centeredSlides: true,
            initialSlide: 2,
            watchSlidesProgress: true,
            // pagination: {
            //     el: '.banner_page',
            //     clickable: false,
            // },
            on: {
                progress: function (progress) {
                    for (i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i);
                        var slideProgress = this.slides[i].progress;
                        var modify = 1;
                        if (Math.abs(slideProgress) > 1) {
                            modify = (Math.abs(slideProgress) - 1) * 0.1 + 1;
                        }
                        translate = slideProgress * modify * transIndex + 'px';
                        scale = 1 - Math.abs(slideProgress) / 9;
                        zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                        slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                        slide.css('zIndex', zIndex);
                        slide.css('opacity', 1);
                        if (Math.abs(slideProgress) > 4) {
                            slide.css('opacity', 0);
                        }
                    }
                },
                setTransition: function (transition) {
                    for (var i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i)
                        slide.transition(transition);
                    }
                }
            }
        })
        for (let i = 0; i < familyImg.length; i++) {
            // familyImg[i]
        }
    }

    // 表单输入框获取焦点改变底部边框颜色
    $('.get-user-message input').on('focus', function () {
        $(this).parents(".get-user-message").css("border-bottom", "1px solid #2e91bd")
    })
    // 表单输入框失去焦点改变底部边框颜色
    $('.get-user-message input').blur('focus', function () {
        $(this).parents(".get-user-message").css("border-bottom", "1px solid #c2c2c2")
    })
    // 璞思大家庭轮播图 
    swiper('familiarSwiper', 190)
    // 关于我们轮播图
    swiper('certify', 518);
    var selectIndex = true;
    function select() {
        let ul = $('.subject-select')
        if (selectIndex) {
            ul.removeClass('closeUl');
            ul.addClass('openUl')
            ul[0].style.display = 'block';
            selectIndex = false;
        } else {
            ul.removeClass('openUl');
            ul.addClass('closeUl');
            setTimeout(() => {
                ul[0].style.display = 'none';
            }, 100)
            selectIndex = true;
        }

    }
    // 点击弹出下拉框
    $('.openSelect').on('click', function () {
        select()
    })
    // 点击弹出下拉框
    $('.subjectValue').on('click', function () {
        select()
    })
    // 点击选择学科
    $('.subject-select li').on('click', function () {
        $('.subjectValue')[0].innerText = $(this)[0].innerText
        console.log($(this))
        select()
    })
    // 点击咨询右上角的关闭按钮关闭咨询面板
    // $('.linkClose').on('click', () => {
    //     $('.link-up').css({
    //         "transform": 'translateX(100%)',
    //         'transition': 'all,0.5s'
    //     })
    //     setTimeout(() => {
    //         $('.link-up').css({
    //             'display': 'none'
    //         })
    //     }, 500)
    // })
    // 点击咨询左边的标签关闭或展开咨询面板
    var linkIndex = true;
    $('.linkClose').on('click', () => {
        if (linkIndex) {
            $('.link-up').css({
                "transform": 'translateX(100%)',
                'transition': 'all,0.5s'
            })
            $('.linkClose i').css({
                "transform":'rotate(-135deg) translateX(-50%)',
                'transition': 'all,0.5s'
            })
            linkIndex = false;

        }else{
            $('.link-up').css({
                "transform": 'translateX(0)',
                'transition': 'all,0.5s'
            })
            $('.linkClose i').css({
                "transform":'rotate(45deg) translateX(-10%) translateY(3px)',
                'transition': 'all,0.5s'
            })
            linkIndex = true;
        }

    })
})
