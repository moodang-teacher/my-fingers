$(function(){
    var $goBack = $('.go-back');
    var $workTitle = $('.work-title');
    var $workBody = $('.work-body');
    var $workInfo = $('.work-info > dl');
    var $workBtn = $('.work-btn-wrap > a');
    var $workProcess = $('.work-process-wrap');
    var $goTop = $('.go-top');
    var workAni = gsap.timeline();

    /* GASP animation */
    workAni
        .from($goBack, {
            duration:.3,
            opacity:0,
            // scale:.2,
        }, '<.5')
        .from($workTitle, {
            duration: .5,
            xPercent: -20,
            opacity:0,
            ease: 'power2.out',
            onComplete: Splitting,
        }, '<.5')
        .from($workBody, {
            duration: .5,
            xPercent: -20,
            opacity:0,
            ease: 'power2.out'
        }, '<.5')
        .from($workInfo, {
            duration: .3,
            opacity:0,
            y:-50,
            stagger: .5,
        }, '<.5')
        .from($workBtn, {
            duration: .3,
            opacity:0,
            y:-50,
            stagger: .3,
        }, '<1.5')
        .from($workProcess, {
            duration: .5,
            opacity:0,
        },'<.9')
        .from($goTop, {
            duration: .5,
            opacity:0,
        },'<.5')


    /* Go Top button */
    $goTop.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });

    /* Next Work Cursor change */
    var $cursor = $('.cursor');
    var $nextWork = $('.next-work');
    
        $nextWork.hover(function () {
            $cursor.addClass('click');
        }, function () {
            $cursor.removeClass('click');
        });
});