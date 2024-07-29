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

  //visual slide
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,

    prevArrow: false,
    nextArrow: false,
  });

  //slide movingObj
  const $window = $(window);
  const $slideWrap = $('.slide-wrap');
  const $obj1 = $slideWrap.find('.visual-con');
  const $obj2 = $slideWrap.find('figure');
  const $obj3 = $slideWrap.find('svg');

  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;
  let speed = 0.009;

  $window.on('mousemove', function (e) {
    x = e.pageX - $window.outerWidth() / 2;
    y = e.pageY - $window.outerHeight() / 2;
  });

  function moving() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    $obj1.css({
      transform: `translate(${mx * 0.1}px,${my * 0.1}px) `,
    });
    $obj2.css({
      transform: `translate(${mx * 0.4}px,${my * 0.2}px)`,
    });
    $obj3.css({
      transform: `translate(${-mx * 0.3}px,${my * 0.3}px)`,
    });

    requestAnimationFrame(moving);
  }
  moving();

  //indicator
  const $indicator = $('.indicator-list > li');
  $indicator.on('click', function (e) {
    e.preventDefault();

    const idx = $(this).index();
    $indicator.removeClass('on').eq(idx).addClass('on');
    $('.slider').slick('slickGoTo', idx);
  });

  //best slide
  const $slider2 = $('.slider2');
  $slider2.slick({
    autoplay: true,
    autoplaySpeed: 2500,
    draggable: true,

    prevArrow: false,
    nextArrow: false,

    slidesToShow: 3,
    slidesToScroll: 3,

    dots: true,
    dotsClass: 'paging',
    customPaging: function (slick, index) {
      return `<span>${index}</span>`;
    },
  });

  // goods slide
  const $slider3 = $('.slider3');
  $slider3.slick({
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,

    prevArrow: false,
    nextArrow: false,

    slidesToShow: 5,
    slidesToScroll: 1,

    dots: true,
    dotsClass: 'paging',
    customPaging: function (slick, index) {
      return `<span>${index}</span>`;
    },
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
