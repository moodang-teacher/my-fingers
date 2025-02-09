$(function(){
 // Portfoilo
 var $slideContents = $('.slide-contents');
 var $portfolidSlide = $('.slide-portfolio');

 $slideContents.slick({
     prevArrow: '.btn-prev',
     nextArrow: '.btn-next',
     slideToShow: 1,
     SlideToScroll: 1,
     vertical: true,
     asNavFor: $portfolidSlide,
 });

 $portfolidSlide.slick({
     arrows: false,
     slideToShow: 1,
     SlideToScroll: 1,
     fade: true,
     asNavFor: $slideContents,
 });

 // 프로그레스바
 var $progressBar = $('.progress-bar');

 $slideContents.on('afterChange', function (event, slick, currentSlide) {
     // console.log(slick);
     // console.log(currentSlide);
     var percent = Math.round(currentSlide / slick.slideCount * 100) + '%';

     console.log(percent);
     $progressBar.css('top', percent);
 });

 // 마우스 휠
 $('.slide-contents').on('wheel DOMMouseScroll', function(e){
    console.log(e);

    if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
        $(this).slick('slickPrev');

    } else {
        $(this).slick('slickNext');
    }
});
});