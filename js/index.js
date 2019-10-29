$(function () {
    // 轮播图
    let swiper = function (id,transIndex) {
        let mySwiper = new Swiper("#"+id, {
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
    }
    // 表单输入框获取焦点改变底部边框颜色
    $('.get-user-message input').on('focus',function(){
        $(this).parents(".get-user-message").css("border-bottom","1px solid #2e91bd")
    })
    // 表单输入框失去焦点改变底部边框颜色
    $('.get-user-message input').blur('focus',function(){
        $(this).parents(".get-user-message").css("border-bottom","1px solid #c2c2c2")
    })
    // 璞思大家庭轮播图 
    swiper('familiarSwiper',190)
    // 关于我们轮播图
    swiper('certify',518);
})
