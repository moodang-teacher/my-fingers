$(function () {
    
    var $header = $('header');
    var headerHeight = $header.height();
    $(window).on('scroll', function() {
        var scTop = $(this).scrollTop();

        if(scTop > headerHeight) {
            $header.addClass('fixed');
        } else {
            $header.removeClass('fixed');
        }
    });

});