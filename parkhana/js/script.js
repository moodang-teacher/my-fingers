$(function () {
  const $window = $(window);
  const $loading = $('.loading');

  $window.on('load', function () {
    setTimeout(function () {
      $loading.fadeOut().remove();
    });
  });

  const $cursor = $('.cursor');
  let x = 0;
  let y = 0;

  // cursor
  $window.on('mousemove', function (e) {
    x = e.pageX;
    y = e.pageY;

    $cursor.css({
      left: x,
      top: y,
    });
  });

  // cursor hover
  const $a = $('a');
  $a.on('mouseenter', function () {
    $cursor.addClass('hover');
  });
  $a.on('mouseleave', function () {
    $cursor.removeClass('hover');
  });

  const $html = $('html');
  const $header = $('#header');
  const $gnb = $('.gnb');
  const $btnGnb = $gnb.find('.btn-gnb');
  const $menuBg = $gnb.find('.menu-bg');
  const $menu = $gnb.find('.menu-list-wrap');
  const $menuLink = $gnb.find('.menu-list > li');
  const $menuInfo = $gnb.find('.my-info-wrap');

  //header
  //main-header design
  if ($html.hasClass('main')) {
    $header.addClass('init');
    $gnb.addClass('init');

    $btnGnb.on('click', function () {
      if (!$btnGnb.hasClass('click')) {
        $gnb.removeClass('init');
      } else {
        $gnb.addClass('init');
      }
    });
  }

  //gnb
  const headertl = gsap.timeline();
  const headertl2 = gsap.timeline();

  $btnGnb.on('click', function () {
    if (!$(this).hasClass('click')) {
      $(this).stop().addClass('click');
      headertl
        .to($menuBg, { width: '100%', duration: 0.3 })
        .to($menuLink, {
          stagger: 0.3,
          opacity: 1,
          delay: 0.3,
          duration: 1.1,
          y: -30,
        })
        .to($menuInfo, { opacity: 1, duration: 0.3 });

      $menu.css({
        'user-select': 'auto',
        'pointer-events': 'auto',
      });
    } else if (!headertl.isActive()) {
      $(this).stop().removeClass('click');
      headertl2
        .to($menuLink, { opacity: 0, duration: 0.3 })
        .to($menuInfo, { opacity: 0, duration: 0.3 })
        .to($menuBg, { width: '0%', duration: 0.3 });

      $menu.css({
        'user-select': 'none',
        'pointer-events': 'none',
      });
    }
  });
});
