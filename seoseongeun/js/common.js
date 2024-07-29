$(function () {
  // 대상을 변수로
  const $goTop = $('.go-top');
  const $header = $('header');

  const $aniTarget = $('[data-aos]');
  // console.log($aniTarget);

  // gnb
  const $dim = $('.dim');
  const $slideMenu = $('.open-gnb');
  const $submenu = $('.open-gnb ul');
  const $btnMenu = $('.btn-menu');
  const duration = 400;
  let isActive = false;

  $btnMenu.on('click', function () {
    if (isActive == false) {
      $dim.fadeIn(duration);
      $slideMenu.addClass('active');
      $btnMenu.addClass('active');
      isActive = true;
      $submenu.stop().fadeIn();
    } else {
      closeSlideMenu();
    }

    // console.log(isActive);
  });

  $dim.on('click', function () {
    closeSlideMenu();
  });

  function closeSlideMenu() {
    $dim.fadeOut(duration);
    $btnMenu.removeClass('active');
    isActive = false;
    $slideMenu.removeClass('active');
    $submenu.stop().fadeOut();
  }

  // mouse
  // 대상을 변수로 지정
  const $window = $(window);
  const $link = $('a,button');
  const $cursor = $('.cursor');
  const $spark = $('.spark');

  // 마우스의 좌표값을 담을 변수
  let mouseX = 0;
  let mouseY = 0;

  // 마우스 위치값을 구하고 가짜 커서에 offset 값으로 부여
  $window.on('mousemove', function (e) {
    // console.log(e);

    mouseX = e.pageX;
    mouseY = e.pageY;

    $cursor.add($spark).css({
      left: mouseX,
      top: mouseY,
    });
  });

  // 마우스 링크 호버시 클래스 부여
  $link.on('mouseenter', function () {
    $cursor.addClass('hover');
  });

  // 마우스 링크 호버시 클래스 삭제
  $link.on('mouseleave', function () {
    $cursor.removeClass('hover');
  });

  // 마우스 누르면 클래스 부여
  $window.on('mousedown', function () {
    $cursor.addClass('click');
  });

  // 마우스 떼면 클래스 삭제
  $window.on('mouseup', function () {
    $cursor.removeClass('click');
  });

  // spark 효과
  $window.on('click', function () {
    $spark.addClass('active');
    setTimeout(function () {
      $spark.removeClass('active');
    }, 500);
  });
});
