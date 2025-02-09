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


    $btn.on('click', function (e) {
        e.preventDefault();
    });

    // console.log(videoHeight);

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


    $(window).on('scroll', function() {
        var scTop = $(this).scrollTop();
        // console.log(scTop);

        if (scTop >= videoHeight -50) {

            $header.addClass('fixed');
            $btnMenu.addClass('fixed');

        } else if (scTop < videoHeight) {
            $header.removeClass('fixed');
            $btnMenu.removeClass('fixed');
        } 


    });



    $(window).on('resize', function () {
        videoHeight = $videoWrap.height();
        // console.log(videoHeight);
    });



     // ★plug in 플러그인★
     AOS.init();


    //  // 태블릿부터 햄버거메뉴

     var $dim = $('.dim');
     var $btnClose = $('.menu-close');
    //  var $btnOpen = $('.btn-menu');
     var $hamMenu = $('.menu-wrap');
     var $hamSubMenu = $('.submenu-m'); //subMenu
    //  var $subMenuList = $hamSubMenu.children('li');
     var $hamMenuList = $('.menu-list > li'); //menuList
     var isActive = false;

     
    // 서브메뉴 닫힌채로 시작

    $hamSubMenu.slideUp();


     $btnMenu.on('click', function (e) {
        e.preventDefault();

            $dim.fadeIn();
            
            $hamMenu.animate({
                right:0,
                opacity: 1
            }, duration);

     });

     $btnClose.on('click', function () {
        closeMenu();
       
     });

     $dim.on('click', function () {
        closeMenu();
     });


     function closeMenu () {
        $dim.fadeOut();

        $hamMenu.animate({
            right:'-100%',
            opacity: 0
        }, duration);
     }


     //메뉴 나오게

     $hamMenuList.on('click', function(e) {


        $(this).siblings().find($hamSubMenu).stop().slideUp();

        $(this).find($hamSubMenu).stop().slideToggle();
     });


    // 별빛효과

    var galleryWrap = $('.gallery-wrap').height-

    $(".gallery-wrap").sparkle({
        color:["#FFFFFF","#FFF95B"],
        count: 200,
        overlap: 0,
        speed: 1,
        minSize: 4,
        maxSize: 10,
        direction: "both"
    });

    $(window).on('resize', function () {

    });


}); 