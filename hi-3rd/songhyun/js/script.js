$(function () {
  const $window = $(window);
  const $pointer = $('.pointer');

  // 마우스 부분

  //마우스 좌표값
  let x = 0;
  let y = 0;

  //수정되는 좌표겂 : 6만원 짜리
  let mx = 0;
  let my = 0;

  //기본 속도
  let speed = 0.06;

  //마우스가 움직이면
  $window.on('mousemove', function (e) {
    //좌표값 가져와서 x, y변수에 할당
    //마우스 좌표의 시작을 화면 중식으로 이동
    // console.log(e);
    x = e.pageX;
    y = e.pageY;
  });

  // 마우스 위치값을 기본으로 해서 어떤 값을 만들자
  function moving() {
    //이게 6만원, 애니메이션 동작 만드는 공식이라고 생각하세요.
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    //cursor의 좌표값으로 적용 /* 마우스 커서의 중심을 가운데로 이동 */
    $pointer.css({
      transform: `translate(${mx}px, ${my}px)`,
    });

    //부드러운 반복
    requestAnimationFrame(moving);
  }

  $window.on('mouseup', function () {
    $pointer.removeClass('click');
  });

  $('a , figure, button ').hover(
    function () {
      $pointer.addClass('click');
    },
    function () {
      $pointer.removeClass('click');
    }
  );

  moving();
});
