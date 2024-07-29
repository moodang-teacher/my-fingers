$(function () {
  const $window = $(window);
  const $objWrap = $('.obj-wrap');
  const $obj1 = $objWrap.find('.obj1');
  const $obj2 = $objWrap.find('.obj2');
  const $obj3 = $objWrap.find('.obj3');
  const $obj4 = $objWrap.find('.obj4');

  // 마우스 움직임을 위한 변수
  // 1. 마우스 좌표값
  let x = 0;
  let y = 0;

  // 2. 보정된 좌표값 : 이 값으로 움직임을 구현, 이게 6만원짜리 ㅋㅋ
  let mx = 0;
  let my = 0;
  let speed = 0.009; //부드러운 동작을 위해 내가 임의로 세팅한 값

  let aniMovingObj;

  // ** 동작의 실행
  initMoving();

  // 이제부터 시작!
  // 함수를 세개 만든다.
  // 1. 마우스 좌표값 가져오는 함수
  // 2. 오브젝트 움직이게 함수
  // 3. 1번과 2번을 실행시키는 함수

  // 1. 마우스 좌표값 가져오는 함수
  function getOffset() {
    $window.on('mousemove', function (e) {
      x = e.clientX - $window.outerWidth() / 2; //윈도우 창의 가로크기 /2
      y = e.clientY - $window.outerHeight() / 2; //윈도우 창의 세로크기 /2
      console.log(x, y);
    });
  }
  // getOffset();

  // 2. 오브젝트 움직이게 함수
  function movingObj() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    $obj1.css({
      transform: `translate(${mx}px, ${my}px)`,
    });
    $obj2.css({
      transform: `translate3d(${-mx}px, ${-my}px, ${mx * 0.5}px)`,
    });
    $obj3.css({
      transform: `translate(${mx * 0.5}px, ${my * 0.5}px) rotateY(${mx}deg)`,
    });
    $obj4.css({
      transform: `translate(${mx / 0.5}px, ${my / 0.5}px)`,
      filter: `blur(${-mx * 0.05}px)`,
    });

    aniMovingObj = requestAnimationFrame(movingObj);
  }

  // 3. 1번과 2번을 실행시키는 함수
  function initMoving() {
    //init 인이셜라이트 줄임말
    getOffset();
    movingObj();
  }

  // 윈도우 스크롤 이벤트가 발생하면
  // 스크롤 값과 특정 위치값의 비교를 통해
  const targetPos = $('.scroll-area').offset().top;
  $window.on('scroll', function () {
    let scTop = $(this).scrollTop();

    // 스크롤 값이 콘텐츠 영역을 넘어서면 애니메이션 중지
    if (scTop >= targetPos) {
      cancelAnimationFrame(aniMovingObj);
    }

    // 다시 위쪽으로 돌아오면 실행
    if (scTop === 0) {
      initMoving();
    }
  });
});
