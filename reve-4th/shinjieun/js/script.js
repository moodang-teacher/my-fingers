$(function () {
    Splitting();

    // 커서

    var $window = $(window);
    var $cursor = $('.cursor');
    var $spark = $('.spark');
    var mouseX = 0;
    var mouseY = 0;
    
    $window.on('mousemove',function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;

        $cursor.add($spark).css({
            top: mouseY,
            left: mouseX
        });
    });


    $window.on('mousedown',function(){
        $cursor.addClass('click');
    });

    $window.on('mouseup',function(){
        $cursor.removeClass('click');
    });
    $window.on('click',function(){
        $spark.addClass('active');
        setTimeout(function(){
            $spark.removeClass('active');
        },500);
    });

    //햄버거 메뉴

    var $dim = $('.dim');
    var $slideMenu = $('.slide-menu');
    var $btnMenu = $('.menu-btn');
    var duration = 300;
    var isActive = false;

    $btnMenu.on('click', function () {

        if (isActive == false) {
            $dim.fadeIn(duration);
            $slideMenu.addClass('active');
            $btnMenu.addClass('active');
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
        isActive = false;
        $slideMenu.removeClass('active');
    };






});