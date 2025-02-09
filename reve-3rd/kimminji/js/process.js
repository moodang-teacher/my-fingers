$(function () {

    var $btnView = $('.btn-view');
    var $btnProcess = $('.btn-process');
    var $processList = $('.process-list');
    var $processItem = $('.process-list > a');

    $btnView.on('click', function (e) {
        e.preventDefault();

        var Value = $(this).attr('href');
        window.open(Value);
    })

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

});