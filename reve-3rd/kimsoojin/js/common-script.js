$(function () {
    var $win = $(window);
    var $btnMenu = $('.btn-menu');
    var $menu = $('.menu-wrap');
    var $menu1 = $('.menu-wrap > menu1');
    var $menu2 = $('.menu-wrap > menu2');
    var $menu3 = $('.menu-wrap > menu3');

    var $gnb1 = $('.gnb a');

    var isActive = false;


    // 햄버거 메뉴 동작

    $btnMenu.on('click', function (e) {
        e.preventDefault();

        if (isActive == false) {
            $menu.stop().animate({
                top: 0
            }, 300);
            $btnMenu.addClass('active');
            isActive = true;
        } else {
            $menu.stop().animate({
                top: '-120%'
            }, 300);
            $btnMenu.removeClass('active');
            isActive = false;
        }
    });


});