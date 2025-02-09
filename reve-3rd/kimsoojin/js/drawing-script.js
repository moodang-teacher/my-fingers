$(function () {
    var $win = $(window);
    var $objWrap = $('.picture-wrap');
    var $obj1 = $objWrap.find('.obj1');
    var $obj2 = $objWrap.find('.obj2');
    var $obj3 = $objWrap.find('.obj3');
    var $obj4 = $objWrap.find('.obj4');
    var $obj5 = $objWrap.find('.obj5');
    var $obj6 = $objWrap.find('.obj6');
    var $obj7 = $objWrap.find('.obj7');
    var $obj8 = $objWrap.find('.obj8');
    var $obj9 = $objWrap.find('.obj9');
    var $obj10 = $objWrap.find('.obj10');
    var $obj11 = $objWrap.find('.obj11');

    var x = 0;
    var y = 0;
    var mx = 0;
    var my = 0;
    var speed = 0.009;

    var aniMovingObj;

    // 마우스 좌표값 세팅
    $win.on('mousemove', function (e) {

        x = e.clientX - $win.outerWidth() / 2;
        y = e.clientY - $win.outerHeight() / 2;

    });

    // 움직임 만들기
    function movingObj() {
        mx += (x - mx) * speed;
        my += (y - my) * speed;

        $obj1.css({
            // transform: 'translate(-30px, 30px)'
            transform: 'translate(' + mx * 0.05 + 'px, ' + my * 0.05 + 'px)'
        });

        $obj2.css({
            // transform: 'translate(-30px, 30px)'
            transform: 'translate(' + -mx * 0.05 + 'px, ' + -my * 0.05 + 'px)'
        });

        $obj3.css({
            // transform: 'translate(-30px, 30px)'
            transform: 'translate(' + mx * 0.05 + 'px, ' + my * 0.05 + 'px)'
        });

        $obj4.css({
            // transform: 'translate(-30px, 30px)'
            transform: 'translate(' + -mx * 0.05 + 'px, ' + my * 0.05 + 'px)'
        });

        $obj5.css({
            // transform: 'translate(-30px, 30px)'
            transform: 'translate(' + mx * 0.05 + 'px, ' + my * 0.05 + 'px)'
        });

        $obj6.css({
            // transform: 'translate(-30px, 30px)'
            transform: 'translate(' + -mx * 0.05 + 'px, ' + -my * 0.05 + 'px)'
        });

        $obj7.css({
            // transform: 'translate(-30px, 30px)'
            transform: 'translate(' + -mx * 0.05 + 'px, ' + my * 0.05 + 'px)'
        });

        $obj8.css({
            // transform: 'translate(-30px, 30px)'
            transform: 'translate(' + -mx * 0.05 + 'px, ' + my * 0.05 + 'px)'
        });

        $obj9.css({
            // transform: 'translate(-30px, 30px)'
            transform: 'translate(' + mx * 0.05 + 'px, ' + -my * 0.05 + 'px)'
        });

        $obj10.css({
            // transform: 'translate(-30px, 30px)'
            transform: 'translate(' + -mx * 0.05 + 'px, ' + my * 0.05 + 'px)'
        });

        $obj11.css({
            // transform: 'translate(-30px, 30px)'
            transform: 'translate(' + mx * 0.05 + 'px, ' + -my * 0.05 + 'px)'
        });

        aniMovingObj = requestAnimationFrame(movingObj);

    }

    // 움직임 실행
    movingObj();

    $(document).on('mousewheel', function (e) {
        var wheelDelta = e.originalEvent.wheelDelta;

        if (wheelDelta > 0) {
            // console.log('up');

            $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
        } else {

            // console.log('down');

            $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
        }
        
    });


    // 변수 선언
    var $dim = $('.dim');
    var $galleryPop = $('.gallery-pop');
    var $btnClose = $('.btn-close');
    var $galleryCont = $('.gallery-cont');
    var $galleryList = $('.picture-wrap figure');


    // gallery-wrap의 아이템을 클릭하면 동작을 실행
    $galleryList.on('click', function () {

        // 선택한 이미지의 속성값(src, data-vod)을 가져오는 작업
        var $selectImg = $(this).find('img');
        var imgSrc = $selectImg.attr('data-img');
        console.log(imgSrc);
        $galleryCont.html('<img src="' + imgSrc + '">');

        // 갤러리 창 띄우기
        $dim.fadeIn();

        slidingPopup('50%', 1);
        // $galleryPop.animate({
        //     top: '50%',
        //     opacity: 1
        // }, 300);
    });


    // 갤러리 창 닫기
    $btnClose.on('click', function (e) {
        e.preventDefault();

        $dim.fadeOut();

        slidingPopup('-100%', 0);
        // $galleryPop.animate({
        //     top: '-100%',
        //     opacity: 0
        // }, 300);
    });

    // dim을 클릭했을때도 창 닫기
    $dim.on('click', function () {
        $dim.fadeOut();
        slidingPopup('-100%', 0);
        // $galleryPop.animate({
        //     top: '-100%',
        //     opacity: 0
        // }, 300);
    });

    // 창을 열고 닫는 동작을 함수로 정의
    function slidingPopup(topValue, opacityValue) {

        $galleryPop.animate({
            top: topValue,
            opacity: opacityValue
        }, 300);
    }


    // 마우스 시작!

        var $cursor = $('.cursor');
        var $area = $('.picture-wrap>figure');
        var $trueCursor = $('.true-cursor');

        // 마우스의 좌표값을 얻어올 예정
        var mouseX = 0;
        var mouseY = 0;

        // 마우스가 움직이면 좌표값이 변한다.
        // 그 변하는 좌표값을 얻어오자.
        $win.on('mousemove', function (e) {
            // console.log(e);

            mouseX = e.pageX;
            mouseY = e.pageY;

            // 가짜 커서의 위치값을 조정
            $trueCursor.add($cursor).css({
                left: mouseX,
                top: mouseY
            });
        });

        $area.on('mouseenter', function () {
            $cursor.addClass('on');
        });

        $area.on('mouseleave', function () {
            $cursor.removeClass('on');
        });

});
