$(function () {
    var $header = $('header');
    var $menu = $('.menu_list ul li');
    var $subMenu = $('.sub-menu');
    var duration = 300;

    $subMenu.hide();

    $menu.on('mouseenter', function () {
        $header.addClass('active');
        $subMenu.stop().slideDown(duration);
    });
    $menu.on('mouseleave', function () {
        $header.removeClass('active');
        $subMenu.stop().slideUp(duration);
    });

        $('.slide').slick({
            autoplay: true,
            autoplaySpeed: 1500,
            prevArrow: $('.main_prev'),
            nextArrow: $('.main_next'),
            // fade: true
            // vertical: true
            dots: true,
            pauseOnHover:false
        });
    });