$(function () {

    var $window = $(window);
    $('.slide').slick({
        prevArrow :'.btn-prev',
        nextArrow :'.btn-next',
        swipeToSlide: true,
        slidesToShow: 5
    });
    $('.slide').add($window).on('mousewheel DOMMouseScroll', function (e) {
        console.log(e);
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            // 휠을 올린 경우
            $('.slide').slick('slickPrev');
        } else {
            // 휠을 내린 경우
            $('.slide').slick('slickNext');
        }
    });

    var $menu = $('.menu-wrap > dl');

    $menu.not(':first').hide();

    $('.slide').on('afterChange', function (event, slick, currentSlide){
        $menu.fadeOut(300);
        $menu.eq(currentSlide).fadeIn(300);
    });
    

    var $btnProcess = $('.btn-process');
    var $btnDesign = $('.btn-design');

    $btnProcess.on('click', function (e) {
        e.preventDefault();
        var linkvalue = $(this).attr('href');
        window.open(linkvalue);
    });
    $btnDesign.on('click', function (e) {
        e.preventDefault();
        var value = $(this).attr('href');
        window.open(value);
    });

    var $btnPlay = $('.btn-play');
    var $popup = $('.popup-wrap');
    var $btnClose = $('.btn-close');
    var $dim = $('.dim');

    $popup.hide();
    $btnClose.hide();

    $btnPlay.on('click', function(e) {
        e.preventDefault();

        $dim.fadeIn(300);
        $popup.fadeIn(300);
        $('.video-wrap > video').get(0).play();

    });
    $popup.on('mouseenter', function () {
        $btnClose.stop().fadeIn(300);
    });
    $popup.add($btnClose).on('mouseleave', function () {
        $btnClose.stop().fadeOut(500);
    });
    $btnClose.add($dim).on('click', function (e) {
        e.preventDefault();
        $dim.fadeOut(300);
        $popup.fadeOut(300);
        $('.video-wrap > video').get(0).pause();
        $('.video-wrap > video').get(0).currentTime = 0;
    });
});