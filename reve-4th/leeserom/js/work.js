$(function(){
    var $workList = $('.work-wrap');
    var $visualList = $('.work-visual-wrap');

    $workList.slick({
        centerMode:true,
        slidesToShow:4,
        slidesToScroll:1,
        arrows:false,
        asNavFor:$visualList,
        vertical:true,
        verticalSwiping:true,
        focusOnSelect:true,
        adaptiveHeight:true,
    });

    $visualList.slick({
        fade:true,
        slidesToShow:1,
        slidesToScroll:1,
        centerMode:true,
        arrows:false,
        asNavFor:$workList,
    });

    $workList.on('wheel DOMMouseScroll', function(e){
        console.log(e);

        //if = scroll UP &  else = scroll DOWN
        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
            $(this).slick('slickPrev');
        } else {
            $(this).slick('slickNext');
        }
    });

    $visualList.on('wheel DOMMouseScroll', function(e){
        console.log(e);

        //if = scroll UP &  else = scroll DOWN
        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
            $(this).slick('slickPrev');
        } else {
            $(this).slick('slickNext');
        }
    });

    var $cursor = $('.cursor');
    
    $workList.hover(function () {
        $cursor.addClass('scroll');
    }, function () {
        $cursor.removeClass('scroll');
    });
    
});