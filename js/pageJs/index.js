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
    //默认参数
    var defaluts = {
        select: "select",
        select_text: "select_text",
        select_ul: "select_ul"
    };
    $.fn.extend({
        "select": function (options) {
            var opts = $.extend({}, defaluts, options);
            return this.each(function () {
                var $this = $(this);
                //模拟下拉列表
                if ($this.data("value") !== undefined && $this.data("value") !== '') {
                    $this.val($this.data("value"));
                }
                var _html = [];
                _html.push("<div class=\"" + $this.attr('class') + "\">");
                _html.push("<div class=\"" + opts.select_text + "\">" + $this.find(":selected").text() + "</div>");
                _html.push("<ul class=\"" + opts.select_ul + "\">");
                $this.children("option").each(function () {
                    var option = $(this);
                    if ($this.data("value") == option.val()) {
                        _html.push("<li class=\"cur\" data-value=\"" + option.val() + "\">" + option.text() + "</li>");
                    } else {
                        _html.push("<li data-value=\"" + option.val() + "\">" + option.text() + "</li>");
                    }
                });
                _html.push("</ul>");
                _html.push("</div>");
                var select = $(_html.join(""));
                var select_text = select.find("." + opts.select_text);
                var select_ul = select.find("." + opts.select_ul);
                $this.after(select);
                $this.hide();
                //下拉列表操作
                select.click(function (event) {
                    $(this).find("." + opts.select_ul).slideToggle().end().siblings("div." + opts.select).find("." + opts.select_ul).slideUp();
                    event.stopPropagation();
                });
                $("body").click(function () {
                    select_ul.slideUp();
                });
                select_ul.on("click", "li", function () {
                    var li = $(this);
                    var val = li.addClass("cur").siblings("li").removeClass("cur").end().data("value").toString();
                    if (val !== $this.val()) {
                        select_text.text(li.text());
                        $this.val(val);
                        $this.attr("data-value", val);
                    }
                });
            });
        }
    });
    $('.select').select();
})
