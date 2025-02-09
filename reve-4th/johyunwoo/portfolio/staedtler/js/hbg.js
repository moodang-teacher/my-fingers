$(function () {

    const $dim = $('.window-dim');
    const $slideMenu = $('.slide-menu');
    const $btnOpen = $('.menu-btn');
    const $btnClose = $('.close-btn, .mobile-close');
    let duration = 300;

    $btnOpen.on('click', function (e) {
        e.preventDefault();
        openMenu();
    });

    $btnClose.add($dim).on('click', function () {
        closeMenu();
    });

    function openMenu () {
        $dim.fadeIn(duration);
        $slideMenu.addClass('active');
    }
    function closeMenu() {
        $dim.fadeOut(duration);
        $slideMenu.removeClass('active');
    }
});