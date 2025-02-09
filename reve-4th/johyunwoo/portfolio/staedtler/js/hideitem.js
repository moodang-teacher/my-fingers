$(function () {
    var $viewWidth = $(window).width();
    var $hideItem = $('.list-item > li');
    var $viewMore = $('.sub1 .more-btn');
    // console.log($viewWidth);
    $hideItem.eq(5).nextAll().on($viewWidth <= 620).addClass('hide');

    $(window).resize(function (){
        $viewWidth = $(window).width();
        // console.log($viewWidth);

        if($viewWidth > 620) {
            $hideItem.removeClass('hide');
        } else {
            $hideItem.eq(5).nextAll().addClass('hide');
            $viewMore.show();
        }

    });

    $viewMore.on('click', function (e) {
        e.preventDefault();
        $hideItem.removeClass('hide');
        $(this).hide();
    });

});