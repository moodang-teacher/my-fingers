$(function() {
    var $slide = $('.slide');
    var $slideItem = $slide.children('li');
    var $btnNext = $('.btn-next');
    var $btnPrev = $('.btn-prev');
    var $dot = $('.dot > span');

    $dot.first().addClass('on');

    function test() {
        $slideItem.filter(':last-child').appendTo($slide);
    }

    function slideMove(){
        $slide.animate({
            marginLeft: '-100%'
        }, 400, function () {
            $slideItem.filter(':first-child').appendTo($slide);
            initSlide(0);
        });
    
}

var timer = setInterval(slideMove, 4000);

$btnNext.add($btnPrev).hover(function () {
    clearInterval(timer);
}, function(){
    timer = setInterval(slideMove, 4000);
})

$btnNext.on('click', function () {
    slideMove();
});

$btnPrev.on('click', function () {
    $slideItem.filter(':last-child').prependTo($slide);
    initSlide(-100);
    $slide.stop().animate({
        marginLeft: 0
    }, 400);
    });

function initSlide (pos) {
var idx = $slideItem.filter(':first-child').attr('data-idx');
console.log(idx);

$dot.removeClass('on');
$dot.eq(idx).addClass('on');

$slide.css({
    marginLeft: pos + '%'
});
}
});