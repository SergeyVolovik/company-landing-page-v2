$(function () {
    $(".container__services, .container__industries, .container__portfolio, .container__blog").slick({
        dots: !0,
        infinite: !0,
        slidesToShow: 3,
        arrows: !1,
        centerMode: !0,
        initialSlide: 0,
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: !1,
                speed: 600,
                slidesToShow: 1,
                variableWidth: !0,
                initialSlide: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: !1,
                slidesToShow: 1,
                adaptiveHeight: !0,
                draggable: !0,
                mobileFirst: !0,
                initialSlide: 0
            }
        }]
    });
    let i = $("#reviews__slider");
    i.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        dots: !0
    });

});