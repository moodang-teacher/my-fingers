$(function () {

    const $btnSite = $('.btn-site');
    const $dimmed = $('.dimmed');
    const $popUp = $('.pop-up');
    const $closeBtn = $('.btn-close');
    const $video = $popUp.find('video');

    $btnSite.on('click', function (e) {
        e.preventDefault();
        $dimmed.add($popUp).addClass('pop');
        $video.attr('autoplay', 'autoplay');
        $video[0].play();
    });

    $closeBtn.add($dimmed).on('click', function () {
        $dimmed.add($popUp).removeClass('pop');
        $video[0].pause();
        $video[0].currentTime = 0;
    });

});