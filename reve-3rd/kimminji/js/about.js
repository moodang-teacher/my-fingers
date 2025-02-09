$(function () {

    var $goTop = $('.go-top');
    var $btnPlay = $('.btn-play');
    var $popup = $('.popup-wrap');
    var $btnClose = $('.btn-close');
    var $dim = $('.dim');




    $goTop.hide();
    $popup.hide();
    $btnClose.hide();

    $goTop.on('click', function (e) {
        e.preventDefault();
        $.fn.fullpage.moveTo(1);
    });
    $btnPlay.on('click', function (e) {
        e.preventDefault();
        $dim.fadeIn(300);
        $popup.fadeIn(300);
        $('.video-wrap > video').get(0).play();
    });
    $popup.on('mouseenter', function () {
        $btnClose.stop().fadeIn(300);
    });
    $popup.add($btnClose).on('mouseleave', function () {
        $btnClose.stop().fadeOut(500);
    });
    $btnClose.add($dim).on('click', function (e) {
        e.preventDefault();
        $dim.fadeOut(300);
        $popup.fadeOut(300);
        $('.video-wrap > video').get(0).pause();
        $('.video-wrap > video').get(0).currentTime = 0;
    });

    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,


        //인디케이터 연결
        menu: '.indicator',
        anchors: ['sec1', 'sec2', 'sec3', 'sec4'],

        afterLoad: function (origin, destination, direction) {
            if (destination == 4) {
                $goTop.fadeIn(300);
            }
        },

        onLeave: function (origin, destination, direction) {
            if (origin == 4) {
                $goTop.fadeOut(300);
            }
        }

    });

    $('.my-slide').slick({
        swipeToSlide: true,
        dots: true,
        nextArrow: '.btn-next',
        prevArrow: '.btn-prev',
    });

    var $title = $('.ex-title');
    // console.log($title);

    $('.my-slide').on('afterChange', function (event, slick, currentSlide) {
        console.log(slick.$slides[currentSlide]);
        $title.removeClass('hilight');
        $(slick.$slides[currentSlide]).find($title).addClass('hilight');

        getPercent(currentSlide);
    });

    var $progressBar = $('.progress-bar');
    var slideLength = $('.slick-dots > li').length;

    function getPercent (index) {
        var percent = (index + 1) / slideLength * 100;
        $progressBar.css({
            width: percent + '%'
        });
    };


    /* $('.my-slide').on('mousewheel DOMMouseScroll', function (e) {
        e.stopPropagation();

        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            // 휠을 올린 경우
            console.log('올');
            $(this).slick('slickPrev');
        } else {
            // 휠을 내린 경우
            console.log('내');
            $(this).slick('slickNext');
        }
        }); */


    var $skillLi = $('.skill-ico > li');
    var $skillCon = $('.skill-con > dl');

    $skillCon.not(':first').hide();

    $skillLi.on('click', function(e) {
        e.preventDefault();

        var idx = $(this).index();

        $skillCon.stop().fadeOut(300);
        $skillCon.eq(idx).stop().fadeIn(300);
        // $skillCon.stop().hide();
        // $skillCon.eq(idx).stop().show();

    })

});