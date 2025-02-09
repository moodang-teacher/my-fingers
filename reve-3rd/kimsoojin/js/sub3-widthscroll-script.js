$(function () {

    // 변수 선언
    var $win = $(window);
    var $section = $('.scroll-wrap > section');
    var sec1Pos;
    var sec2Pos;
    var sec3Pos;
    var sec4Pos;
    var sec5Pos;
    var $flexibleNum = $('.slide strong');
    var $fixedNum = $('.slide b');
    var sectionLength = $section.length;

    var secIdx = 0;


    // 미친 노란공
    var $ball = $('.ball');
    actionBall();
    
    function actionBall () {
        $ball.addClass('active');
        setTimeout(function () {
            $ball.removeClass('active');
        }, 1800);
    };

    
    function getPosition () {
        sec1Pos = $section.eq(0).offset().left;
        sec2Pos = $section.eq(1).offset().left;
        sec3Pos = $section.eq(2).offset().left;
        sec4Pos = $section.eq(3).offset().left;
        sec5Pos = $section.eq(4).offset().left;
        console.log(sec1Pos, sec2Pos, sec3Pos, sec4Pos, sec5Pos);
    }

    getPosition();

    
    $win.on('scroll', function () {
        var scLeft = $(this).scrollLeft();

        if (scLeft < sec2Pos) {
            console.log('메인 영역');
            secIdx = 0;
        } else if (scLeft >= sec2Pos && scLeft < sec3Pos) {
            console.log('1번 영역');
            secIdx = 1;
        } else if (scLeft >= sec3Pos && scLeft < sec4Pos) {
            console.log('2번 영역');
            secIdx = 2;
        } else if (scLeft >= sec4Pos && scLeft < sec5Pos) {
            console.log('3번 영역');
            secIdx = 3;
        } else if (scLeft >= sec5Pos){
            console.log('4번 영역');
            secIdx = 4;
        }

        // 1. b를 불러와서 $section의 length값을 넣는다
        // 2. strong을 불러와서 secIdx + 1 값을 넣는다
        actionBall();

        $fixedNum.text(sectionLength);
        $flexibleNum.text(secIdx + 1);

    });

    function secMove () {
        
        var targetPos = $('section').eq(secIdx).offset().left;

        $('html, body').stop().animate({
            scrollLeft: targetPos
        }, 300);
    }

    $win.on('mousewheel DOMMouseScroll', function (e) {

        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            
            if(secIdx == 0) {
                return; 
            } else {
                secIdx--;
            }

        } else {

            if(secIdx == 4) {
                return; 
            } else {
                secIdx++;
            }
        }
            secMove();
            // yellowBall();
    });

    $win.on('resize', function () {
        getPosition();

        $win.trigger('scroll');

    });
});