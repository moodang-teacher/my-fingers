$(function () {

        var $win = $(window);
        var $progressBar = $('.progress-bar');
        var $slide = $('.sub3-contents');
        var $sec2 = $('.process-color');
        var $sec3 = $('.process-typo');
        var $gnbColor = $('.gnb');
        var $nowpageColor = $('.now-page');
        var $header = $('header');
    
        // slick 실행
        $slide.slick({
            arrows: false
        });
    

        // 마우스 휠 이벤트 정의
        $win.on('mousewheel DOMMouseScroll', function (e) {
    
            if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                // 휠을 올린경우
                $slide.slick('slickPrev');
    
            } else {
                // 휠을 내린 경우
                $slide.slick('slickNext');
    
            }


        });

        $slide.on('afterChange', function (event, slick, currentSlide) {

            getPercent(currentSlide);
            console.log(currentSlide);

            if (currentSlide == 1 || currentSlide == 2) {
                $header.addClass('header-color');
            } else {
                $header.removeClass('header-color');
            }
    
    
        });
        // 퍼센트를 활용한 프로그레스바
        var slideLength = 6;
    
        function getPercent(index) {
            var percent = (index + 1) / slideLength * 100;
    
            $progressBar.css({
                width: percent + '%'
            });
        }
    
    
    });