$(function () {


    // 메인 비주얼 영역

    var $window = $(window);
    var $decoWrap = $('.deco-wrap');
    var $ccXl = $decoWrap.find('.circle-xl');
    var $ccL = $decoWrap.find('.circle-l');
    var $ccM = $decoWrap.find('.circle-m');
    var $ccS = $decoWrap.find('.circle-s');
    var $decoPic = $decoWrap.find('.deco-pic');
    var x = 0;
    var y = 0;
    var mx = 0;
    var my = 0;
    var speed = 0.009;


    $window.on('mousemove', function (e) {
        x = e.pageX - $window.outerWidth() / 2;
        y = e.pageY - $window.outerHeight() / 2;

    });

    function movingObj() {
        mx += (x - mx) * speed;
        my += (y - my) * speed;
        $ccXl.css({
            transform: `translate(${mx * 0.2}px, ${my *0.2 }px)`
        });
        $ccL.css({
            transform: `translate(${-mx * 0.2}px, ${-my * 0.2}px)`
        });
        $ccM.css({
            transform: `translate(${mx * 0.2}px, ${my * 0.2}px)`
        });
        $ccS.css({
            transform: `translate(${mx / 3}px, ${my / 7.5}px)`,
        });
        $decoPic.css({
            transform: `translate(${mx * 0.3}px, ${my * 0.5}px)`,
        });
        //반복되는 애니메이션
        requestAnimationFrame(movingObj);
    };


    setTimeout(function () {
        movingObj();
    }, 2000);


    setTimeout(function () {
        $('h2').addClass('on');
     }, 4000);




});