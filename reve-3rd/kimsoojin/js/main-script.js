$(function (){
    var $window = $(window);
    var $boxWrap = $('.main-box-wrap');
    var $mainBlueBox = $boxWrap.find('.main-blue-box');
    var $mainYellowBox = $boxWrap.find('.main-yellow-box');
    var $mainBlueCircle = $boxWrap.find('.main-blue-circle');
    var $mainYellowCircle = $boxWrap.find('.main-yellow-circle');
    var x = 0;
    var y = 0;
    var mx = 0;
    var my = 0;
    var speed = 0.0005; 

    // var aniMovingObj;

    $window.on('mousemove', function (e){
        x = e.clientX - $window.outerWidth() / 2;
        y = e.clientY - $window.outerHeight() / 2;

        // console.log('x:' + x, 'y:' + y);
    });

    function movingObj () {
        mx += (x - mx) * speed;
        my += (y - my) * speed;

        if (mx < -35) {
            mx = -35;
        } else if (mx > 15) {
            mx = 15;
        } 

        if (my < -15) {
            my = -15;
        } else if (my > 25) {
            my = 25;
        } 

        $boxWrap.css({
            transform: 'perspective(600px) rotateY(' + mx + 'deg)'
        });

        // $mainBlueBox.css({
        //     transform: 'translate(' + mx*0.1 + 'px, ' + my*0.05 + 'px)'
        // });

        // $mainYellowBox.css({
        //     transform: 'translate(' + -mx*0.1 + 'px, ' + -my*0.05 + 'px) rotate(' + 90 + 'deg)'
        // });

        // $mainBlueCircle.css({
        //     transform: 'translate(' + mx*0.1 + 'px, ' + my*0.05 + 'px)'
        // });

        // $mainYellowCircle.css({
        //     transform: 'translate(' + -mx*0.1 + 'px, ' + -my*0.05 + 'px)'
        // });

        requestAnimationFrame(movingObj);
    }

    movingObj();

    // 로딩화면이다


    var $allAni = ('.loading-ani-b');
    var $strong = ('.loading-ani-b strong');
    var $loadingBall = ('.loading-ball');
    var $delayAni = ('.loading-ani-b strong span:nth-of-type(5)');

    var startAni = gsap.timeline({
        // onComplete: closeLoding
    });

    // function closeLoding () {
    //     $allAni.fadeOut();
    // }

    startAni.from($strong, {yPercent: 800, duration: 1})
            .to($delayAni, {opacity:0, duration:0.3})
            .to($loadingBall, {opacity:1, duration:0.2}, '-=0.5')
            .to($loadingBall, {scale:0.7, duration:0.15, repeat:5, yoyo:true})
            .to($loadingBall, {scale:40, duration:0.6}, '+=0.15')
            // .to($loadingBall, {scale:1, duration:1}, '+=0.15')
            .to($allAni, {opacity:0,});
});


