$(function () {
    var $btnProcess = $('.btn-process');
    var $processList = $('.process-list');
    var $processItem = $('.process-list > a');

    $processList.hide();
    $btnProcess.removeClass('on');

    $btnProcess.on('click', function () {
        $processList.stop().slideToggle();
        $(this).toggleClass('on');
    });
    $processItem.on('click', function (e) {
        e.preventDefault();

        var linkValue = $(this).attr('href');
        window.open(linkValue);
        $processList.stop().slideUp();
    });

    $(function () {
        var $btnPlay = $('.btn-view');
        var $popup = $('.popup-wrap');
        var $btnClose = $('.btn-close');
        var $dim = $('.dim');

        $popup.hide();
        $btnClose.hide();

        $btnPlay.on('click', function (e) {
            e.preventDefault();

            $dim.fadeIn(300);
            $popup.fadeIn(300);
            $('.video-wrap > video').get(0).play();

        });
        $popup.on('mouseenter', function () {
            $btnClose.stop().fadeIn(300);
        });
        $popup.add($btnClose).on('mouseleave', function () {
            $btnClose.stop().fadeOut(500);
        });
        $btnClose.add($dim).on('click', function (e) {
            e.preventDefault();
            $dim.fadeOut(300);
            $popup.fadeOut(300);
            $('.video-wrap > video').get(0).pause();
            $('.video-wrap > video').get(0).currentTime = 0;
        });

    });
});