$(function () {


    //포트폴리오 슬릭

    var $slide = $('.portfolio-slide');

    $slide.slick({
        autoplay: false,

        atuplaySpeed: 1000,

        vertical: true,

        verticalSwiping: true,

        nextArrow: '.btn-next',
        prevArrow: '.btn-prev',
    });


    // 슬라이드 되고나서 동작
    $slide.on('afterChange', function (event, slick, currentSlide) {
        getPercent(currentSlide);

        $myMenu.removeClass('on');
        $myMenu.eq(currentSlide).addClass('on');
    });


    // 마우스 휠 동작
    $slide.on('mousewheel DOMMouseScroll', function (e) {

        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {

            // 휠을 위로 올렸을 때

            $(this).slick('slickPrev');

            // 휠을  아래로 내렸을때
        } else {
            $(this).slick('slickNext');
        }
    });

    // 내가 만든 메뉴
    var $myMenu = $('.my-menu > a');
    $myMenu.eq(0).addClass('on');

    $myMenu.on('click', function(e) {
        e.preventDefault();

        var mIdx = $(this).index();

        $slide.slick('slickGoTo', mIdx, false);

        $myMenu.removeClass('on');
        $myMenu.eq(mIdx).addClass('on');
    });

    // 프로세스바

    var $progressBar = $('.progress-bar');
    var slideLength = $('.my-menu > a').length;

    function getPercent (index) {
        var percent = (index + 1) / slideLength * 100;
        $progressBar.css({
            height: percent + '%'
        });
    }

    getPercent(0);





    

});