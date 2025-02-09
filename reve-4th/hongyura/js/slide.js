$(function () {

    var $slidePortfolio = $('.slide-portfolio');

    $slidePortfolio.slick({
        prevArrow: '.btn-portfolio-prev',
        nextArrow: '.btn-portfolio-next',
    });


    // 포트폴리오 페이지 - 타이틀 움직임
    var $workTitle = $('.cont-wrap .cont');
    console.log($workTitle);
    
    function showTitle() {
        $workTitle.eq(0).addClass('on');
    }
    setTimeout(showTitle, 300);

    $slidePortfolio.on('afterChange', function(event, slick, currentSlide, nextSlide){
        console.log(currentSlide);  /* currentSlide=index */

        $workTitle.removeClass('on');
        $workTitle.eq(currentSlide).addClass('on');

    });
});