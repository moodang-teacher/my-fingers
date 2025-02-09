$(function () {
    var $window = $(window);
    var $imageWrap = $('.image-wrap > figure');
    var $image1 = $('.first');
    var $image2 = $('.second');
    var $image3 = $('.third');
    var $textStroke = $('.text-stroke');
    var $textFill = $('.text-fill');
    var duration = 1000;

    var timer;

    $imageWrap.hide();
    $textStroke.show();

    setTimeout(function () {
        $image1.fadeIn(duration);
    },1000);
    setTimeout(function () {
        $image2.fadeIn(duration);
    },1200);
    setTimeout(function () {
        $image3.fadeIn(duration);
    },1400);

    setTimeout(function () {
        $textStroke.fadeOut(1200);
    },5000);

    setTimeout(function () {
        $textFill.fadeIn(duration);
    },5000);
});