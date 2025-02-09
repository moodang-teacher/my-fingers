$(function () {
    const $header = $('header');
    const $window = $(window);

    let timeEvent = setTimeout(function () {
        $header.css({
            opacity: 0
        });
    }, 3000);


    $window.on('wheel', function (e) {
        if (e.originalEvent.wheelDelta > 0) {
            $header.css({
                opacity: 1
            });
            timeEvent = setTimeout(function () {
                $header.css({
                    opacity: 0
                });
            }, 3000);
        } else {
            clearTimeout(timeEvent);
            $header.css({
                opacity: 0
            });
        }
    });

    $header.hover(function () {
        $header.css({
            opacity: 1
        });
        clearTimeout(timeEvent);
    }, 
    function () {
        timeEvent = setTimeout(function () {
            $header.css({
                opacity: 0
            });
        }, 3000);
    });

});