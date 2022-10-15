$(function () {

    //manu fixed start
    var map = $('.main_manu').offset().top;


    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > map) {
            $('.main_manu').addClass('menu_fix');
        } else {
            $('.main_manu').removeClass('menu_fix');
        }

    });
    //portfolio part start
    $('.venobox').venobox({
        spinner: 'cube-grid',
        spinColor: '#e23e38'
    });

    //review slider start
    $('.review_rightsite').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        dots: true,
        arrows: false,
        responsive: [{
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true,
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true,
                }
            },
            {
                breakpoint: 575.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true,
                }
            }
        ]
    });
});