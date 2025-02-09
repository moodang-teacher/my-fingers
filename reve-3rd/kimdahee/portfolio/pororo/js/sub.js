$(function () {

    //변수 선언
    var $header = $('#header');
    var $menu = $('.gnb > ul > li');
    var $subMenu = $('.submenu');
    var duration = 400;
    var $btnMenu = $('.btn-menu');
    var $videoWrap = $('.video-wrap');
    var videoHeight = $videoWrap.height();
    var $lang = $('.lang');
    var $langMenu = $('.lang > ul > li');
    var $langBg = $('#lang-bg');
    
    var $btn = $('.btn > a');

    console.log(videoHeight);

    $menu.on('mouseenter', function () {
        $header.addClass('active');
        $(this).addClass('on');
        $subMenu.stop().slideDown(duration);
    });

    $menu.on('mouseleave', function () {
        $header.removeClass('active');
        $menu.removeClass('on');
        $subMenu.stop().slideUp(100);
    });

   $lang.on('click', function (e) {
    e.preventDefault();
    
    $(this).toggleClass('active');
    $langMenu.stop().slideToggle(duration);
});



   



    $(window).on('resize', function () {
        videoHeight = $videoWrap.height();
        // console.log(videoHeight);
    });



}); 