$(function () {
    // indicator
    var $window = $(window);
    var $indicator = $('.indicator');
    var $sectionMain = $('.main');
    var secMainOffset = $sectionMain.offset().top;

    $indicator.hide();

    $window.on('scroll', function () {
        var scrollTop = $(this).scrollTop();

        if (scrollTop == 0) {
            $indicator.hide();

        } else if (scrollTop >= secMainOffset) {
            $indicator.show();
        }
    });

    // fullpage
    var $section = $('main > section');

    console.log($section);

    var $sideDot = $('.indicator > li');
    var secLength = $section.length - 1;
    var duration = 300;

    var sec1pos
    var sec2pos
    var sec3pos
    var sec4pos
    var sec5pos

    var secIdx = 0;

    getPosition();

    function getPosition() {
        sec1pos = $section.eq(0).offset().top;
        sec2pos = $section.eq(1).offset().top;
        sec3pos = $section.eq(2).offset().top;
        sec4pos = $section.eq(3).offset().top;
        sec5pos = $section.eq(4).offset().top;
        // console.log(sec1pos, sec2pos, sec3pos, sec4pos, sec5pos);
    }

    updateDot();

    $window.on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        // console.log(scrollTop);

        if (scrollTop >= sec1pos && scrollTop < sec2pos) {
            secIdx = 0;

        } else if (scrollTop >= sec2pos && scrollTop < sec3pos) {
            secIdx = 1;

        } else if (scrollTop >= sec3pos && scrollTop < sec4pos) {
            secIdx = 2;

        } else if (scrollTop >= sec4pos && scrollTop < sec5pos) {
            secIdx = 3;
        } else if (scrollTop >= sec5pos) {
            secIdx = 4;
        } 
        
        // console.log(secIdx);

        updateDot();
    });

    $sideDot.on('click', function (e) {
        e.preventDefault();

        secIdx = $(this).index();

        moveSection();
    });

    // 마우스 휠을 움직일 때
    $window.on('wheel DOMMouseScroll', function (e) {

        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {

            if (secIdx == 0) {
                return;

            } else {
                secIdx--;
            }

        } else {

            if (secIdx == secLength) {
                // secIdx = 0;
                return;
                
            } else {
                secIdx++;
            }

        }
        moveSection();
    });

    function moveSection() {
        $('html, body').stop().animate({
            scrollTop: $section.eq(secIdx).offset().top
        }, duration);
    }

    function updateDot() {
        $sideDot.removeClass('on');
        $sideDot.eq(secIdx).addClass('on');
    }
});