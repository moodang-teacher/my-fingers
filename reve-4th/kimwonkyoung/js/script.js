$(function () {
    // 메뉴 hover
    var $menu = $('.gnb > ul > li');
    var duration = 300;

    $menu.on('mouseenter', function () {
        $(this).addClass('on');
    });

    $menu.on('mouseleave', function () {
        $(this).removeClass('on');
    });

    // top 버튼
    $goTop = $('.go-top');
    $goTop.on('click', function (e) {
        e.preventDefault();

        $('html').animate({
            scrollTop: 0
        }, duration);
    });

    // cursor
    var $window = $(window);
    var $cursor = $('.cursor');
    var mouseX = 0;
    var mouseY = 0;

    $window.on('mousemove', function (e) {
        console.log(e);
        mouseX = e.pageX;
        mouseY = e.pageY;

        $cursor.css({
            top: mouseY,
            left: mouseX
        });
    });

    $window.on('mousedown', function () {
        $cursor.addClass('click');
    });

    $window.on('mouseup', function () {
        $cursor.removeClass('click');
    });

    // click
    function clickEffect(e) {
        var d = document.createElement("div");
        d.className = "clickEffect";
        d.style.top = e.clientY + "px";
        d.style.left = e.clientX + "px";
        document.body.appendChild(d);
        d.addEventListener('animationend', function () {
            d.parentElement.removeChild(d);
        }.bind(this));
    }
    document.addEventListener('click', clickEffect);
});