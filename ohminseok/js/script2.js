$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $cursor = $('.cursor');
  const $prItem = $('.pr-list > li > a');
  const $prbg = $('.all-bg');
  const $prbg1 = $('.all-bg.base');
  const $prbg2 = $('.all-bg.web');
  const $prbg3 = $('.all-bg.app');
  const $prbg4 = $('.all-bg.all');

  console.log($prbg1, $prItem);
  /*   console.log($cursor); */

  $window.on('mousemove', function (e) {
    // console.log(e);

    // 마우스의 x,y 좌표값을 받아서
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    //가짜 마우스의 laft, top값으로 적용
    $cursor.css({
      left: mouseX,
      top: mouseY,
    });
  });

  $prItem.on('mouseenter', function () {
    /* 마우스호버 */
    $cursor.addClass('hover');
  });
  $prItem.on('mouseleave', function () {
    /* 마우스호버 */
    $cursor.removeClass('hover');
  });

  /* 챗 gpt가 알려준 화면변경 */
  function showBackground(className) {
    $prbg.removeClass('active'); // 모든 배경 숨기기
    $(`.all-bg.${className}`).addClass('active'); //해당 클래스만 보이기
  }

  $('.pr-list li').on('mouseenter', function () {
    const className = $(this).attr('class').split('-')[0];
    showBackground(className);
    console.log(className);
  });

  $('.pr-list li').on('mouseleave', function () {
    showBackground('base');
  });

  /* 내가 했다가 똥 망쳐버린 화면변경 */

  /* 프로그램 화면 */
  // $prbg1.fadeIn();
  // $prbg.removeClass('web app all');

  // $prItem.next(0).on('mouseenter', function () {
  //   $prbg1.fadeOut(500);
  //   $prbg2.addClass('web');
  // });

  // $prItem.next(0).on('mouseleave', function () {
  //   $prbg1.fadeIn(500);
  //   $prbg2.removeClass('web');
  // });

  // $prItem.next(1).on('mouseenter', function () {
  //   $prbg1.fadeOut(500);
  //   $prbg3.addClass('app');
  // });

  // $prItem.next(1).on('mouseleave', function () {
  //   $prbg1.fadeIn(500);
  //   $prbg3.removeClass('app');
  // });

  // $prItem.next(2).on('mouseenter', function () {
  //   $prbg1.fadeOut(500);
  //   $prbg4.addClass('all');
  // });

  // $prItem.next(2).on('mouseleave', function () {
  //   $prbg1.fadeIn(500);
  //   $prbg4.removeClass('all');
  // });
});
