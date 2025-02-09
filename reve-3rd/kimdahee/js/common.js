$(function () {

    // 별빛효과
    var $visualGradient = $('.visual-gradient');
    var $footBg = $('.foot-top');


    $footBg.sparkle({
        color:["#FFFFFF","727abc","#B6A4DC","#491B83", "#60A8D8"],
        count: 100,
        overlap: 0,
        speed: 0.1,
        minSize: 4,
        maxSize: 5,
        direction: "both"
    });

    $visualGradient.sparkle({
        color:["#FFFFFF","727abc","#B6A4DC","#491B83", "#60A8D8"],
        count: 300,
        overlap: 0,
        speed: 0.2,
        minSize: 4,
        maxSize: 8,
        direction: "both"
    });

    var timer;
    var timerFoot;

    $visualGradient.off('mouseover.sparkle');
    $visualGradient.off('mouseout.sparkle');
    $visualGradient.trigger('start.sparkle');


    $footBg.off('mouseover.sparkle');
    $footBg.off('mouseout.sparkle');
    $footBg.trigger('start.sparkle');

    $(window).on("resize", function(){
        clearTimeout(timer);
        timer = setTimeout(function(){
            $visualGradient.trigger("resize.sparkle");
        },200);
    });

    $(window).on("resize", function(){
        clearTimeout(timerFoot);
        timerFoot = setTimeout(function(){
            $footBg.trigger("resize.sparkle");
        },200);
    });



    // $('.visual-gradient').on('mousemove', function() {
       

    // });




    // 햄버거 메뉴

    var $menu = $('.menu-wrap');
    var $dim = $('.dim');
    var $btnMenu = $('.btn-menu');
    var $btnClose = $('.btn-close');

    $btnMenu.on('click', function (e) {
        e.preventDefault();

        $dim.fadeIn();
        $menu.stop().animate({
            right: 0
        }, 300);
        $btnClose.fadeIn(300);
    });

    $btnClose.on('click', function () {
        $dim.fadeOut();
        $menu.stop().animate({
            right: '-100%'
        }, 300);

    });

    $dim.on('click', function () {
        $dim.fadeOut();
        $menu.stop().animate({
            right: '-100%'
        }, 300);
    });


    AOS.init();

});