$(function () {

    var $win = $(window);
    var $backGround = $('.main-background');

    var x = 0;
    var y = 0;

    var mx = 0;
    var my = 0;

    var speed = 0.05;
    var aniMovingObj;

    
    let el = document.querySelector('#maintitle');
    let myAnimation = new LazyLinePainter(el, {
        "ease": "easeLinear",
        "strokeWidth": 1,
        "strokeOpacity": 1,
        "strokeColor": "#3E0204"
    });
    myAnimation.paint();

    var $title = $('.title-fill');

    setTimeout(function () {
        $title.fadeIn();
    }, 3500);

    init();

    function init() {
        getOffset();
        aniMovingObj();
    }

    function getOffset() {
        $win.on('mousemove', function (e) {
            x = e.clientX - $win.outerwidth() / 2;
            y = e.clientY - $win.outerheight() / 2;
        });
    }

    function movingObj() {
        mx += (x - mx) * speed;
        my += (y - my) * speed;

        $backGround.css({
            transform: 'translate(' + mx / 10 + 'px, ' + my / 10 + 'px)'
        });

    }

    // let el = document.querySelector('#my-title');
    // let el2 = document.querySelector('#my-title2');
    // var $myTitle = $('.st0');
    // console.log($myTitle);

    // let myAnimation = new LazyLinePainter(el, {
    //     strokeColor: '#380203',
    //     strokeWidth: 1,
    //     ease: 'easeInOutExpo'
    // });

    // let myAnimation2 = new LazyLinePainter(el2, {
    //     strokeColor: '#380203',
    //     strokeWidth: 1,
    //     ease: 'easeInOutExpo'
    // });

    // function paint() {
    //     myAnimation.paint();
    //     setTimeout(function () {
    //         myAnimation2.paint();
    //     }, 800);
    // }

    // paint();




});