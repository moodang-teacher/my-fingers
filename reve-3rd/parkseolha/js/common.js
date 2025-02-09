$(function () {

    var $win = $(window);
    var $cursor = $('.cursor');
    var $bird = $('.bird-mouse');
    var $cursorImg = $('.cursor-img');

    var mouseX = 0;
    var mouseY = 0;

    $win.on('mousemove', function (e) {
        
        mouseX = e.pageX;
        mouseY = e.pageY;

        $cursor.add($bird).css({
            left: mouseX,
            top: mouseY
        });

    });

    $win.on('mousedown', function () {
        $cursor.addClass('click');
        $cursorImg.css({
            opacity: 0
        });
        $bird.css({
            opacity: 0
        });

    });

    $win.on('mouseup', function () {
        $cursor.removeClass('click');
        $cursorImg.css({
            opacity: 1
        });
        $bird.css({
            opacity: 1
        });
    });

    $win.on('click', function () {
        $bird.addClass('active');

        setTimeout(function () {
            $bird.removeClass('active');
        }, 500);
    });

});