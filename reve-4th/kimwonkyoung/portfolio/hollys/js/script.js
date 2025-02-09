$(function () {
    var $menu = $('.gnb > ul > li');
    var $subMenu = $('.submenu');
    var $header = $('header');
    var duration = 300;

    $menu.on('mouseenter', function () {
        $subMenu.stop().slideDown(duration);
        $header.addClass('active');

        $(this).addClass('on');
    });

    $menu.on('mouseleave', function () {
        $subMenu.stop().slideUp(duration);
        $header.removeClass('active');

        $(this).removeClass('on');
    });

    // 메인 비주얼 영역
    var $slideVisual = $('.visual-img');
    $slideVisual.slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
    });

    // MD
    var $slideMd = $('.md-list');
    $slideMd.slick({
        prevArrow: '.btn-prev',
        nextArrow: '.btn-next',
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
    });

    // 프로그레스 바 표시
    var slideLength = $('.md-list .slick-slide').not('.slick-cloned').length;
    // console.log(slideLength);
    var barWidth = 1 / slideLength * 100;

    $('.bar').css({
        width: barWidth + '%'
    });

    $slideMd.on('afterChange', function (event, slick, currentSlide) {

        var i = currentSlide + 1;
        barWidth = i / slick.slideCount * 100;
        // console.log(barWidth);

        $('.bar').css({
            width: barWidth + '%'
        });
    });

    // sns
    var $slideSns = $('.sns-img');
    $slideSns.slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 4,
    });

    // 팝업 모달
    var $btnClose = $('.close');
    var $popUp = $('.pop-up');
    $btnClose.on('click', function () {
        $popUp.fadeOut();
    });

    // top 버튼
    $goTop = $('.go-top');
    $goTop.on('click', function (e) {
        e.preventDefault();

        $('html').animate({
            scrollTop: 0
        }, duration);
    });

    $goTop.hide();

    var $window = $(window);
    $window.on('scroll', function () {
        var scrollTop = $(this).scrollTop();

        if (scrollTop == 0) {
            $goTop.fadeOut();

        } else if (scrollTop >= 1000) {
            $goTop.fadeIn();
        }
    });
});