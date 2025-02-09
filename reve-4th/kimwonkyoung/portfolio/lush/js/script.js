$(window).on('load', function () {
    // sns
    var $slideSns = $('.sns-img');
    $slideSns.slick({
        prevArrow: '.btn-prev',
        nextArrow: '.btn-next',
        slidesToShow: 1,
    });
});

$(function () {

    var $menu = $('.gnb > ul > li');
    var $subMenu = $('.submenu');
    var duration = 300;

    $menu.on('mouseenter', function () {

        var menuIdx = $(this).index();
        // console.log(menuIdx);

        if (menuIdx <= 1) {

            $(this).find($subMenu).stop().slideDown(duration);
            // $header.addClass('active');

            $(this).addClass('on');
        }

    });

    $menu.on('mouseleave', function () {
        $subMenu.stop().slideUp(duration);
        // $header.removeClass('active');

        $(this).removeClass('on');
    });

    // 메인 슬라이드
    var $slideVisual = $('.visual-img');
    $slideVisual.slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
    });

    var slideLength = $('.slide-visual').not('.slick-cloned').length;
    var barHeight = 1 / slideLength * 100;

    $('.indicator').css({
        height: barHeight + '%'
    });

    $slideVisual.on('afterChange', function (event, slick, currentSlide) {

        // // 프로그레스 바 표시
        var i = currentSlide + 1;
        barHeight = i / slick.slideCount * 100;

        $('.indicator').css({
            height: barHeight + '%'
        });
    });

    // 베스트셀러
    var $slideBest = $('.best-list');
    $slideBest.slick({
        prevArrow: '.btn-best-prev',
        nextArrow: '.btn-best-next',
        slidesToShow: 3,
        slideToScroll: 3,

        // RWD
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }

        }, {

            breakpoint: 650,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    // 팝업 모달
    var $closeBtn = $('.close');
    var $popUp = $('.pop-up');

    $closeBtn.on('click', function () {
        $popUp.hide();
    });
});

