$(function () {

    const $window = $(window);
    const $humanity = $('.humanity');
    const $photoshop = $('.photoshop');
    const $illust = $('.illust');
    const $html = $('.html');
    const $css = $('.css');
    const $figma = $('.figma');
    let x = 0;
    let y = 0;
    let mouseX = 0;
    let mouseY = 0;
    let speed = 0.04;

    $window.on('mousemove', function (events) {
        x = events.pageX - $window.outerWidth() / 2;
        y = events.pageY - $window.outerHeight() / 2;
    });
    
    
    function moveToBlur () {
        mouseX += (x - mouseX) * speed;
        mouseY += (y - mouseY) * speed;

        $humanity.css({
            transform: `translate(${mouseX / 300}px, ${mouseY / 300}px)`
        });
        $photoshop.css({
            // transform: 'translate(10px, 10px)' - 예시
            transform: `translate(${mouseX / 80}px, ${mouseY / 100}px)`,
            filter: `blur(${(-mouseX + mouseY) * 0.0005}px)`
        });
        $illust.css({
            // transform: 'translate(10px, 10px)' - 예시
            transform: `translate(${mouseX / 50}px, ${mouseY / 30}px)`,
            filter: `blur(${(-mouseX + mouseY) * 0.0007}px)`
        });
        $html.css({
            // transform: 'translate(10px, 10px)' - 예시
            transform: `translate(${mouseX / 25}px, ${mouseY / 61}px)`,
            filter: `blur(${(mouseX + mouseY) * 0.0008}px)`
        });
        $css.css({
            // transform: 'translate(10px, 10px)' - 예시
            transform: `translate(${-mouseX / 120}px, ${mouseY / 210}px)`,
            filter: `blur(${(mouseX + mouseY) * 0.0015}px)`
        });
        $figma.css({
            // transform: 'translate(10px, 10px)' - 예시
            transform: `translate(${-mouseX / 50}px, ${mouseY / 96}px)`,
            filter: `blur(${(mouseX + mouseY) * 0.0009}px)`
        });
        requestAnimationFrame(moveToBlur);
    }

    moveToBlur();
}) ;