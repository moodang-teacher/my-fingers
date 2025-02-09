$(function () {
    var $fadeImg = $('.visual-wrap > figure');
    var $btnNext = $('.btn-next');
    var $btnPrev = $('.btn-prev');
    var $indicator = $('.indicator > li');
    var duration = 300;
    var fadeIdx = 0;

    $fadeImg.hide();
    $fadeImg.eq(0).fadeIn(duration);

    $btnNext.on('click', function (e) {
        e.preventDefault();

        if(fadeIdx == 3) {
            fadeIdx = 0;
        } else {
            fadeIdx++;
        }
        
        fadeInNOut(fadeIdx);
    })
    $btnPrev.on('click', function(e) {
        if(fadeIdx == 0) {
            fadeIdx = 3;
        } else {
            fadeIdx--;
        }

        fadeInNOut(fadeIdx);
    });

    function fadeInNOut(index) {
        $fadeImg.fadeOut(duration);
        $fadeImg.eq(index).fadeIn(duration);
        
        $indicator.removeClass('selected');
        $indicator.eq(index).addClass('selected');
    }

    $indicator.on('click', function (e) {
        e.preventDefault();

        slideIdx = $(this).index();
        fadeInNOut(slideIdx);
    });


    var timer = setInterval(function () {
        if(fadeIdx == 3) {
            fadeIdx = 0;
        } else {
            fadeIdx++;
        }
        
        fadeInNOut(fadeIdx);
    }, 5000);

    $btnNext.add($btnPrev).add($indicator).hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(function () {
            if(fadeIdx == 3) {
                fadeIdx = 0;
            } else {
                fadeIdx++;
            }
            
            fadeInNOut(fadeIdx);
        }, 5000);
    });


});