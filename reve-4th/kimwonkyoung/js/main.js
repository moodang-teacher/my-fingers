$(function () {
    var $window = $(window);
    var $header = $('header');
    var $sectionMain = $('.main-wrap');
    var secMainOffset = $sectionMain.offset().top;

    $header.hide();

    $window.on('scroll', function () {
        var scrollTop = $(this).scrollTop();

        if (scrollTop == 0) {
            $header.fadeOut();

        } else if (scrollTop >= secMainOffset) {
            $header.fadeIn();
        }
    });

    //main scroll
    var $section = $('main > section');
    var secLength = $section.length - 1;
    var duration = 300;
    var sec1pos;
    var sec2pos;
    var secIdx = 0;

    getPosition();

    function getPosition() {
        sec1pos = $section.eq(0).offset().top;
        sec2pos = $section.eq(1).offset().top;
    }

    $window.on('scroll', function () {
        var scrollTop = $(this).scrollTop();

        if (scrollTop >= sec1pos && scrollTop < sec2pos) {
            secIdx = 0;

        } else if (scrollTop >= sec2pos) {
            secIdx = 1;
        }
    });

    $window.on('wheel DOMMouseScroll', function (e) {

        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            if (secIdx == 0) {
                return;

            } else {
                secIdx--;
            }

            moveSection();

        } else {
            if (secIdx == secLength) {
                return;

            } else {
                secIdx++;
            }

            moveSection();
        }
    });

    function moveSection() {
        $('html, body').stop().animate({
            scrollTop: $section.eq(secIdx).offset().top
        }, duration);
    }

    //main animation
    var $button1 = $('.go-process');
    var $button2 = $('.go-portfolio');
    var $button3 = $('.go-about');
    var x = 0;
    var y = 0;
    var mx = 0;
    var my = 0;
    var speed = 0.009;

    $window.on('mousemove', function (e) {

        x = e.pageX;
        y = e.pageY;

        x = e.pageX - $window.outerWidth() / 2;
        y = e.pageY - $window.outerHeight() / 2;

        console.log(x, y);
    });

    function movingObj() {
        mx += (x - mx) * speed;
        my += (y - my) * speed;

        $button1.css({
            transform: `translate(${+mx*0.25}px, ${+my*0.25}px)`
        });

        $button2.css({
            transform: `translate(${-mx*0.25}px, ${-my*0.25}px)`
        });

        $button3.css({
            transform: `translate(${-mx*0.25}px, ${-my*0.25}px)`
        });

        requestAnimationFrame(movingObj);
    }

    movingObj();

});