$(function () {
    // 메뉴바
    var $dim = $('.dim');
    var $menu = $('.menu-bar');
    var $btnMenu = $('.btn-menu');
    var duration = 300;
    var isActive = false;

    $btnMenu.on('click', function (e) {
        e.preventDefault();

        if (!isActive) {
            $dim.fadeIn(duration);
            $btnMenu.addClass('active');
            $menu.addClass('active');
            isActive = true;
        } else {
            closeSlideMenu();
        };
    });

    $dim.on('click', function () {
        closeSlideMenu();
    });

    function closeSlideMenu() {
        $dim.fadeOut(duration);
        $btnMenu.removeClass('active');
        $menu.removeClass('active');
        isActive = false;
    }
});



$(function () {
    // AOS 초기화명령
    AOS.init({
        duration: 1000,
        easing: 'ease-in-cubic'
    });
});



$(function () {

    var $window = $(window);
    var windowHeight = $window.outerHeight();
    var documentHeight = $(document).outerHeight();
    console.log(windowHeight, documentHeight);

    var $progressBar = $('.progress-bar');

    $window.on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        console.log(scrollTop);

        var percent = scrollTop / (documentHeight - windowHeight) * 110 + '%'
        console.log(percent);
        $progressBar.css('width', percent);
    });


    // Top버튼
    var $window = $(window);
    var windowHeight = $window.outerHeight();
    var documentHeight = $(document).outerHeight();
    console.log(windowHeight, documentHeight);

    $btnTop = $('.btn-top');
    $btnTop.on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });
});


// 메인 타이틀 효과
// function animateCSS(element, animationName, callback) {
//     const node = document.querySelector(element)
//     node.classList.add('animated', animationName)

//     function handleAnimationEnd() {
//         node.classList.remove('animated', animationName)
//         node.removeEventListener('animationend', handleAnimationEnd)

//         if (typeof callback === 'function') callback()
//     };

//     node.addEventListener('animationend', handleAnimationEnd)
// };

// animateCSS('.my-element', 'bounce')
// // or
// animateCSS('.my-element', 'bounce', function () {
//     // Do something after animation
// });



$(function () {
    var $window = $(window);
    var $cursor = $('.cursor');
    var $spark = $('.spark');
    var mouseX = 0;
    var mouseY = 0;
    
    $window.on('mousemove',function(e){
        console.log(e);
        mouseX = e.pageX;
        mouseY = e.pageY;

        $cursor.add($spark).css({
            top: mouseY,
            left: mouseX
        });
    });

    // 마우스 왼쪽키가 눌러질때
    $window.on('mousedown',function(){
        $cursor.addClass('click');
    });
    //마우스 왼쪽키에서 손가락이 떨어질때
    $window.on('mouseup',function(){
        $cursor.removeClass('click');
    });
    $window.on('click',function(){
        $spark.addClass('active');
        // setTimeout(함수,시간);
        setTimeout(function(){
            $spark.removeClass('active');
        },500);
    });


    // 메인 h2 효과
    Splitting();
    //

    // 메인 .obj 움직임 효과
    var $obj1 = $('.obj1');
    var $obj2 = $('.obj2');
    var $obj3 = $('.obj3');
    var x = 0;
    var y = 0;
    var mx = 0;
    var my = 0;
    var speed = 0.009;

    $window.on('mousemove', function (e) {

        x = e.pageX - $window.outerWidth () / 2;
        y = e.pageY = $window.outerHeight () / 2;
    });

    function movingObj() {
        mx += (x - mx) * speed;
        my += (y - my) * speed;

        $obj1.css({
            transform: `translate(${mx * 0.2}px, ${my * -0.1}px)`,
            // transform: `rotate(450deg)`

        });

        $obj2.css({
            transform: `translate(${mx* 0.1}px, ${my * -0.1}px)`
        });

        $obj3.css({
            transform: `translate(${mx * 0.2}px, ${my * -0.2}px)`
        });

        requestAnimationFrame(movingObj);

    }
    movingObj();
    //
    
});