$(function(){
    // header
    var $window = $(window);
    var $header = $('header');
    var lastScrollValue = 0;

    $window.on('scroll', function () {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > lastScrollValue) {
            $header.css('top', '-100px');
        } else {
            $header.css('top', 0);
        }

        lastScrollValue = scrollTop;
    });
});