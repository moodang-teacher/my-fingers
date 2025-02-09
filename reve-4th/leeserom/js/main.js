$(function(){

    var $window = $(window);
    var $visualWrap = $('.main-visual-wrap');
    var $waves = $visualWrap.find('.deco-waves');
    var $myPic = $visualWrap.find('.main-img');
    var $triangle = $visualWrap.find('.deco-triangle');
    var x = 0;
    var y = 0;
    var mx = 0;
    var my = 0;
    var speed = 0.02;

    $window.on('mousemove',function(e){

        x = e.pageX - $window.outerWidth() / 2;
        y = e.pageY - $window.outerHeight() / 2;
        
    });

    function movingObj() {
        mx += (x - mx) * speed;
        my += (y - my) * speed;

        // $obj1.css({transform: 'translate(10px, 10px)'});
        $waves.css({
            transform: `translate(${mx * 0.05}px, ${my * 0.05}px)`,
            filter: `blur(${-mx / 100}px)`
        });
        $myPic.css({transform: `translate(${-mx * 0.1}px, ${-my * 0.2}px)`});
        $triangle.css({
            transform: `translate(${mx * 0.07}px, ${my * 0.05}px)`,
            filter: `blur(${my / 80}px)`
        });

    
        requestAnimationFrame(movingObj);
    };
    movingObj();


    /* Main Number Hover */
    var $numberWrap =$('.number-wrap');
    var $number = $('.number-wrap > span');
    var $mainWrap = $('.main-work-wrap');
    var $mainItem = $mainWrap.find('.main-item');
    var $nav = $('.nav');
    // var idx = 0;
 

    // console.log($number);
    // console.log($mainItem);

    $number.on('mouseenter', function(){
        var numIdx = $(this).index();

        $mainWrap.show();

        // $mainItem.fadeOut(1000);
        // $mainItem.eq(numIdx).fadeIn(500);
        $mainItem.removeClass('on');
        

        $numberWrap.removeClass('on');
        $numberWrap.addClass('on');
        $mainItem.eq(numIdx).addClass('on');
        $number.css('filter','blur(3px)');
        $number.eq(numIdx).css('filter','blur(0)');
        // $nav.addClass('on');
    });

    // $mainItem.on('mouseenter', function(){
    //     var mainIdx = $(this).index();
    //     mainIdx.eq(numIdx).addClass('on');
    // });

    $mainWrap.on('mouseleave', function(){

        $mainWrap.hide();

        // $mainItem.fadeOut();
        $mainItem.removeClass('on');
        $numberWrap.removeClass('on');
        $number.css('filter','blur(0)');
       
    });

    var $cursor = $('.cursor');
    
    $mainWrap.hover(function () {
        $cursor.addClass('dark');
    }, function () {
        $cursor.removeClass('dark');
    });
    $numberWrap.hover(function () {
        $cursor.addClass('dark');
    }, function () {
        $cursor.removeClass('dark');
    });
    
    Splitting();
   
   
});