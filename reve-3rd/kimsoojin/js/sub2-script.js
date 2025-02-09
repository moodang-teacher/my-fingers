$(document).ready(function () {
    // 변수 선언

    var $tabMenu = $('.tab-menu>li');
    var $tabContWrap = $('.tab-con-wrap');
    var $tabCont = $tabContWrap.children('div');

    var $bgcolor = $('.left-menu-color');
    var $blueCircle = $('.blue-circle');
    var $YellowCircle = $('.yellow-circle');
    var $YellowSquare = $('.yellow-square');
    var $blueSquare = $('.blue-square');
    var $bigBlue = $('.big-blue-circle');
    var $btnSquare = $('.slide-img-wrap dl dd a');
    var $h1Css = $('.portfolio-wrap h1');
    var $fontColor = $('.my-menu li a');


    var changeColor = ['#FAD330', '#3683F8', '#FAD330', '#3683F8', '#FAD330', '#3683F8', '#FAD330'];
    var changeColor2 = ['#3683F8', '#FAD330', '#3683F8', '#FAD330', '#3683F8', '#FAD330', '#3683F8'];
    var changeColor3 = ['#FDF2B6', '#C2DAF2', '#FDF2B6', '#C2DAF2', '#FDF2B6', '#C2DAF2', '#FDF2B6'];

    //slick slider
    $('.slide-img-wrap').slick({
        autoplay: false,
        arrows: true,
        nextArrow: '.slick-next',
        prevArrow: '.slick-prev',
        // // vertical:true,
        // dots: true,
        // dotsClass: 'paging',

        // customPaging: function (slick, index) {
        //     // console.log(index);
        //     // return '<a href="#">' + (index + 1) + '</a>';

        //     // console.log(slick.$slides[3]);
        //     var dataTitle = $(slick.$slides[index]).attr('data-title');
        //     return '<p><a href="#">' + dataTitle + '</a></p>';

        // },
    });

    // 마우스 휠을 조작할때 동작
    $('.slide-img-wrap').on('mousewheel DOMMouseScroll', function (e) {
        // console.log(e);

        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) { //둘 중에 한조건만 참을때 실행될 수 있게함.
            // 휠을 아래에서 위로 올렸을 때
            $(this).slick('slickPrev');

        } else {

            //휠을 위에서 아래로 내렸을 때
            $(this).slick('slickNext');
        }
    });

    // 내가 만든 메뉴
    var $myMenu = $('.my-menu li');

    $myMenu.eq(0).addClass('on');

    $myMenu.on('click', function (e) {
        e.preventDefault();

        var mIdx = $(this).index();
        console.log(mIdx);

        $('.slide-img-wrap').slick('slickGoTo', mIdx, false);

        $myMenu.removeClass('on');
        $myMenu.eq(mIdx).addClass('on');

    });


    $('.slide-img-wrap').on('afterChange', function (event, slick, currentSlide) {

        $myMenu.removeClass('on');
        $myMenu.eq(currentSlide).addClass('on');

        var targetColor = changeColor[currentSlide];
        var targetColor2 = changeColor2[currentSlide];
        var targetColor3 = changeColor3[currentSlide];
        $bgcolor.css({
            background: targetColor
        });


        $YellowSquare.css({
            background: targetColor

        });

        $blueSquare.css({
            background: targetColor2
        });

        $blueCircle.css({
            background: targetColor2
        });

        $YellowCircle.css({
            background: targetColor3
        });

        $bigBlue.css({
            background: targetColor2
        });

        $btnSquare.css({
            background: targetColor
        });
    });


    // 팝업
    
    var $dim = $('.dim2');
    var $popup = $('.popup-wrap2');
    var $popup2 = $('.popup-wrap3');
    var $btnClose = $('.btn-close2');
    var $btnOpen = $('.open-popup2');
    var $btnOpen2 = $('.open-popup3');
    var duration = 300;

    $btnOpen.on('click', function (e) {
        e.preventDefault();

        $dim.fadeIn(duration);
        $popup.addClass('active');
    });

    $btnOpen2.on('click', function (e) {
        e.preventDefault();

        $dim.fadeIn(duration);
        $popup2.addClass('active');
        $popup2.find('video').get(0).play();
    });

    $btnClose.add($dim).on('click', function (e) {
        e.preventDefault();

        $dim.fadeOut(duration);
        $popup.removeClass('active');
        $popup2.removeClass('active');
        $popup2.find('video').get(0).pause();
    });


    // div에 마우스 올리면 사라지는 공 애니
    var $scaleBlue = $('.blue-circle');
    var $div = $('.tab-con-wrap>div');
    var $rotate = $('.yellow-circle');

    $div.on('mouseenter', function () {
        $scaleBlue.addClass('on');
        $rotate.addClass('on');
    });

    $div.on('mouseleave', function () {
        $scaleBlue.removeClass('on');
        $rotate.removeClass('on');
    });

});