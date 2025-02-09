$(function () {

    var $header = $('#header');
    var $headerColor = $('#header')
    var $hsOffset = $header.height();
    console.log($hsOffset);

    $(window).on('scroll', function () {

        var scTop = $(this).scrollTop();

        if (scTop >= $hsOffset) {
            $header.addClass('header-scroll');
            $headerColor.addClass('header-color');
            // console.log($headerScroll);
        } else {
            $header.removeClass('header-scroll');
            $headerColor.removeClass('header-color');
        }

    });
});