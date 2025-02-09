$(function () {
    var $grid = $('.sub-list-wrap').masonry();
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    var $secTitle = $('.sec-title');
    var $secCont = $('.sec-cont');
    var $listWrap = $('.sub-list-wrap');
    var $goTop = $('.go-top');
    

    var archiveAni = gsap.timeline();

    archiveAni
        .from($secTitle, {
            duration:.3,
            xPercent: -20,
            opacity:0,
            ease: 'power2.out',
            onComplete: Splitting
        })
        .from($secCont, {
            duration: 1.5,
            xPercent: -20,
            opacity:0,
            /* ease: 'power2.out', */
            onComplete: Splitting,
        }, '<2')
        .from($listWrap, {
            duration: 2,
            opacity: 0.05,
            ease: 'power2.out'
        }, '<2')
        .from($goTop, {
            duration: .5,
            opacity:0,
            ease: 'power2.out'
        }, '<1')


    //s: Go TOP
    $goTop.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });
    //e: Go TOP
    

    var $middleTitle = $('.middle-title');    
   $(window).on('scroll', function () {

        var scrollTop = $(this).scrollTop();
        console.log(scrollTop);

        $middleTitle.each(function (index, item) {
            var targetPosition = $(item).offset().top - 700;

            if (scrollTop >= targetPosition) {
                $(item).attr('data-splitting', '');
            }
        });

        Splitting();
    });
    
    /* figure floating effect */

    var $floatItem = $('.archive-item > figure');
    var $floatPersonal = $('.personal-item > figure');
    // var lastScrollValue = 0;

    $(window).on('scroll', function(){

        
        $floatItem.addClass('active');
        setTimeout(function(){
            $floatItem.removeClass('active');
        }, 1050);

        $floatPersonal.addClass('active');
        setTimeout(function(){
            $floatPersonal.removeClass('active');
        }, 1050);

       
    });

   
});