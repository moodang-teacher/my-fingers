$(function () {
  const $win = $(window);
  const $body = $('body');
  const $header = $('#header');
  const $menu = $('.gnb > li');
  const $subMenu = $('.submenu');

  //gnb
  $menu.on('mouseenter', function () {
    $subMenu.stop().slideDown();
    $header.addClass('on');
  });
  $menu.on('mouseleave', function () {
    $subMenu.stop().slideUp();
    $header.removeClass('on');
  });

  //visual slider
  const swiper = new Swiper('.sub-swiper', {
    loop: true,
    autoplay: { delay: 2500 },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // item list
  const $store = $('.store');
  const $itemBox = $store.find('.item-category strong');
  const $itemList = $store.find('.item-box');

  $win.on('click', function () {
    $itemList.slideUp();
  });
  $itemBox.on('click', function (e) {
    e.stopPropagation();
    $itemList.stop().slideToggle();
    console.log('cl');
  });

  // footer family site
  const $siteBox = $('.site-wrap strong');
  const $siteList = $('.site-wrap .site-list');

  $win.on('click', function () {
    $siteList.slideUp();
  });
  $siteBox.on('click', function (e) {
    e.stopPropagation();
    $siteList.stop().slideToggle();
  });

  // top
  let conPos = $('#container').outerHeight();
  let scTop;
  const btnTop = $('.btn-top');

  $win.on('scroll', function () {
    scTop = $win.scrollTop();

    if (scTop >= conPos * 0.6) {
      btnTop.addClass('action');
    } else {
      btnTop.removeClass('action');
    }
  });
});
