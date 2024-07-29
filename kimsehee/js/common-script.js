$(function () {
  //loading
  $(window).on('load', function () {
    $('.spinner-wrap').fadeOut();
  });

  //menu
  const $btnMenu = $('.menu');
  const $allMenu = $('.menu-wrap');
  const $closeMenu = $('.close');

  $btnMenu.on('click', function (e) {
    e.preventDefault();
    $allMenu.addClass('active');
  });

  $closeMenu.on('click', function () {
    $allMenu.removeClass('active');
  });

  //header

  const $win = $(window);
  const $header = $('#header');

  $win.on('wheel', function (e) {
    if (e.originalEvent.wheelDelta > 0) {
      // console.log('휠 올림');
      $header.removeClass('hide');
    } else {
      // console.log('휠 내림');
      $header.addClass('hide');
    }
  });

  //scroll top
  $win.on('scroll', function () {
    let scTop = $(this).scrollTop();
    if (scTop === 0) {
      $header.removeClass('hide');
    }
  });

  // cursor
  const $window = $(window);
  const $cursor = $('.cursor');
  const $spark = $('.spark');

  let mouseX = 0;
  let mouseY = 0;

  $window.on('mousemove', function (e) {
    console.log(e);

    mouseX = e.pageX;
    mouseY = e.pageY;

    $cursor.add($spark).css({
      left: mouseX,
      top: mouseY,
    });
  });

  $window.on('mousedown', function () {
    $cursor.addClass('click');
  });
  $window.on('mouseup', function () {
    $cursor.removeClass('click');
  });
  $window.on('click', function () {
    $spark.addClass('active');
    setTimeout(function () {
      $spark.removeClass('active');
    }, 500);
  });
});
