$(function(){
    var $header = $('#header');
    var $menu = $('.gnb > a');
    var headerHeight = $header.height();

    $(window).on('scroll', function(){
        var scTop = $(this).scrollTop();

        if (scTop >= headerHeight) {

            $header.addClass('fixed');

        } else if (scTop == 0) {

            $header.removeClass('fixed');

        }

    });


    // 변수 선언
    var $win = $(window); 
    var $header = $('#header');
    var $dot = $('.nav-btns > a');
    var $section = $('main > section');
    var $goTop = $('.pancake-top');

    var sec1Pos;
    var sec2Pos;
    var sec3Pos;
    var sec4Pos;
    var sec5Pos;
    var sec6Pos;

    $dot.first().addClass('on');

    var secIdx = 0;


    var headerHeight = $header.height();


    function getPosition () {
        sec1Pos = $section.eq(0).offset().top - headerHeight;
        sec2Pos = $section.eq(1).offset().top - headerHeight;
        sec3Pos = $section.eq(2).offset().top - headerHeight;
        sec4Pos = $section.eq(3).offset().top - headerHeight;
        sec5Pos = $section.eq(4).offset().top - headerHeight;
        sec6Pos = $section.eq(5).offset().top - headerHeight;
        // console.log(sec1Pos, sec2Pos, sec3Pos, sec4Pos, sec5Pos, sec6Pos );
    }


    getPosition();

    $win.on('scroll', function () {
        var scTop = $(this).scrollTop();


        if (scTop >= headerHeight) {
            $header.addClass('fixed');
            

            if (scTop < sec2Pos) {
                console.log('111');
                secIdx = 0;
                
            } else if (scTop >= sec2Pos && scTop < sec3Pos) {
                console.log('222');

                secIdx = 1;
            } else if (scTop >= sec3Pos && scTop < sec4Pos){
                console.log('333');
                secIdx = 2;

            } else if (scTop >= sec4Pos && scTop < sec5Pos){
                console.log('444');
                secIdx = 3;

            } else if (scTop >= sec5Pos && scTop < sec6Pos) {
                console.log('555');
                secIdx = 4;
            } else if (scTop >= sec6Pos) {
                console.log('666');
                secIdx = 5;
            }


            // 인디케이터 갱신
            $dot.removeClass('on');
            $dot.eq(secIdx).addClass('on');

        } else {
            $header.removeClass('fixed');
        }

    });
    

    // 인디케이터를 클릭 했을 때의 동작
    $dot.on('click', function (e) {
        e.preventDefault();
        
        secIdx = $(this).index();

        scrollMove(secIdx);

    });

    $goTop.on('click', function (e) {
        e.preventDefault();

        scrollMove(0);
    });

    // 스크롤 이동 동작 함수 정의
    function scrollMove (secIdx) {

        var targetPos = $section.eq(secIdx).offset().top;

        $('html, body').stop().animate({
            scrollTop: targetPos
        });
    }

    // 윈도우창 리사이징
    $win.on('resize', function () {
        
        getPosition();

        $win.trigger('scroll');

    });
    AOS.init();
});