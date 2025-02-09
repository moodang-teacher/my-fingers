$(function () {

// 마우스 시작!
var $win = $(window);
var $cursor = $('.cursor');
var $trueCursor = $('.true-cursor');
var $area = $('a');

// 마우스의 좌표값을 얻어올 예정
var mouseX = 0;
var mouseY = 0;

// 마우스가 움직이면 좌표값이 변한다.
// 그 변하는 좌표값을 얻어오자.
$win.on('mousemove', function (e) {
   //  console.log(e);

    mouseX = e.pageX;
    mouseY = e.pageY;

    // 가짜 커서의 위치값을 조정
    $trueCursor.add($cursor).css({
        left: mouseX,
        top: mouseY,
    });
});

$area.on('mouseenter', function () {
   $cursor.addClass('on');
});

$area.on('mouseleave', function () {
   $cursor.removeClass('on');
});


});