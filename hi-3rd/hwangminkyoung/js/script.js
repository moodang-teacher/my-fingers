$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $loadingScreen = $('#loading');
  const $loadingVideo = $('#loadingVideo');
  const $skipBtn = $('#loading button');
  const $mainContent = $('#container');
  const $indicator = $('.indicator');

  const $sideDot = $('.indicator button');
  const $section = $('#container > section');
  const $btnTop = $('.btn-top');
  const $aniEl = $('[data-aos]');

  // 로딩
  $loadingScreen.css('display', 'flex');
  $mainContent.hide();
  $indicator.hide();

  $skipBtn.on('click', function () {
    // 로딩 화면 부드럽게 숨기고 메인 콘텐츠 보이기
    $loadingScreen.fadeOut(400, function () {
      $mainContent.fadeIn(400);
      // 메인 콘텐츠가 표시될 때 스크롤 이벤트 활성화
      $(window).off('scroll.disableScroll');
    });

    // 비디오 클릭 시 스크롤 이벤트 일시적으로 비활성화
    $(window).on('scroll.disableScroll', function (e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  });
  $loadingVideo.on('ended', function () {
    $loadingScreen.fadeOut(700, function () {
      // $mainContent.fadeIn(700);
      $indicator.fadeIn(700);

      $('html, body').animate({ scrollTop: 0 }, 500);
    });

    // 비디오 종료 시 스크롤 이벤트 일시적으로 비활성화
    $(window).on('scroll.disableScroll', function (e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
    // 로딩 화면에서 스크롤 이벤트 막기
    $(window).on('scroll.disableScroll', function (e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  });
  $loadingVideo.on('ended', function () {
    $loadingScreen.fadeOut(700, function () {
      // $mainContent.fadeIn(700);
      $indicator.fadeIn(700);

      // 메인 콘텐츠가 표시될 때 스크롤 이벤트 활성화
      $(window).off('scroll.disableScroll');
    });

    // 비디오 종료 시 스크롤 이벤트 일시적으로 비활성화
    $(window).on('scroll.disableScroll', function (e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
    // 로딩 화면에서 스크롤 이벤트 막기
    $(window).on('scroll.disableScroll', function (e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  });
  $indicator.show();
  $mainContent.show();

  // top버튼 숨기고 시작
  $btnTop.hide();

  console.log($section);
  // 항목별 인덱스를 활용
  let secIdx = 0;

  moveSection(secIdx);

  // TOP버튼을 클릭했을 때 상단으로 이동
  $btnTop.on('click', function () {
    secIdx = 0;
    moveSection(secIdx);
  });

  // 섹션을 이동하는 동작을 함수로 정의
  function moveSection(index) {
    // 인덱스를 활용해서 섹션의 위치값 구하기
    const posTop = index * $window.outerHeight();
    $('html,body').stop().animate(
      {
        scrollTop: posTop,
      },
      300
    );
    updateDot(index);
    // console.log(secIdx);
    $aniEl.removeClass('aos-animate');
    AOS.init();
    $aniEl.eq(index).addClass('aos-animate');
    console.log($aniEl);
    // Top버튼 보이게/숨기게
    if (secIdx >= 2) {
      $btnTop.fadeIn();
    } else {
      $btnTop.fadeOut();
    }
  }

  // 인디케이터를 클릭했을 때
  $sideDot.on('click', function () {
    secIdx = $(this).index();

    moveSection(secIdx);
  });

  // 인디케이터로 업데이트 하는 함수
  function updateDot(index) {
    $sideDot.removeClass('on').eq(index).addClass('on');
  }
  // 마우스 휠 & 키보드 조작 이벤트 추가
  $window.on('wheel keydown', function (e) {
    if ($('html,body').is(':animated')) return;

    if (e.originalEvent.deltaY < 0 || e.key === 'ArrowUp') {
      // 휠을 올리거나 위로 가는 화살표 키를 누른 경우

      // 조건을 걸어서 코드를 종료
      if (secIdx === 0) return;
      secIdx--;
    } else if (e.originalEvent.deltaY > 0 || e.key === 'ArrowDown') {
      // 휠을 내리거나 아래 화살표 키를 누른 경우

      if (secIdx === $section.length - 1) return;
      secIdx++;
    }

    moveSection(secIdx);
  });

  // 브라우저 창이 조정될 때
  $window.on('resize', function () {
    moveSection(secIdx);
  });

  const bodyEl = document.querySelector('body');
  const focusEl = document.querySelector('#focus');

  // first load
  window.onload = () => {
    resetFocus();
  };

  // screen resized
  window.addEventListener(
    'resize',
    (resizeScreen = () => {
      resetFocus();
    })
  );

  // cursor
  const $cursor = $('.cursor');
  const $spark = $('.spark');

  // 브라우저 창에서 마우스가 움직일 때
  $window.on('mousemove', function (e) {
    console.log(e);

    // 마우스의 x,y 좌표값을 받아서
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    // 가짜 마우스의 left, top 값으로 적용
    $cursor.add($spark).css({
      left: mouseX,
      top: mouseY,
    });
  });
  // event : mousedown, mouseup --> 마우스를 클릭
  $window.on('mousedown', function () {
    $cursor.addClass('click');
  });
  // 떼면 click 삭제
  $window.on('mouseup', function () {
    $cursor.removeClass('click');
  });
  // 화면을 클릭하면 spark에 active 클래스 부여
  $window.on('click', function () {
    $spark.addClass('active');
    setTimeout(function () {
      $spark.removeClass('active');
    }, 1000);
  });

  // main blur
  const $blur1 = $('.blur1');
  const $blur2 = $('.blur2');
  const $blur3 = $('.blur3');

  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;
  const speed = 0.009;

  let raf;

  initAnimation();

  function initAnimation() {
    getOffset();
    moving();
  }
  function getOffset() {
    $window.on('mousemove', function (e) {
      x = e.pageX;
      y = e.pageY;

      // 조정된 값 구하기
      mx = ($window.outerWidth() / 2 - x) * speed;
      my = ($window.outerHeight() / 2 - y) * speed;
    });
  }
  function moving() {
    // 대상에 값 적용
    setTimeout(() => {
      $blur1.css({
        transform: `translate(${mx * 5}px,${my * 3}px)`,
      });
    }, 100); // 100ms 딜레이

    setTimeout(() => {
      $blur2.css({
        transform: `translate(${mx * 7}px,${my * 7}px)`,
      });
    }, 400); // 200ms 딜레이

    setTimeout(() => {
      $blur3.css({
        transform: `translate(${mx * 10}px,${my * 7}px)`,
      });
    }, 700); // 300ms 딜레이

    // 부드럽게 반복
    raf = requestAnimationFrame(moving);
  }

  // about me slider
  const introduceSlider = new Swiper('.introduce-slider', {
    autoplay: {
      delay: 3000,
    },
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  /* about me hover */
  $('.brightness-tag').hover(
    function () {
      $('.brightness b').addClass('active');
    },
    function () {
      $('.brightness b').removeClass('active');
    }
  );
  $('.record-tag').hover(
    function () {
      $('.record b').addClass('active');
    },
    function () {
      $('.record b').removeClass('active');
    }
  );
  $('.sincerity-tag').hover(
    function () {
      $('.sincerity b').addClass('active');
    },
    function () {
      $('.sincerity b').removeClass('active');
    }
  );
  $('.consideration-tag').hover(
    function () {
      $('.consideration b').addClass('active');
    },
    function () {
      $('.consideration b').removeClass('active');
    }
  );

  // works slider
  const worksSlider = new Swiper('.works-slider', {
    autoplay: {
      delay: 3000,
    },
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // 카드 클릭 이벤트 핸들러 설정
  $('.card').on('click', function () {
    const $this = $(this);
    $this.addClass('spin');

    // 애니메이션이 끝나고 실제로 뒤집는 동작 설정
    setTimeout(function () {
      $this.removeClass('spin').toggleClass('flipped');
    }, 800); // 애니메이션 시간과 맞춤
  });

  const amount = 20;
  const sineDots = Math.floor(amount * 0.3);
  const width = 26;
  const idleTimeout = 150;
  let lastFrame = 0;
  let mousePosition = { x: 0, y: 0 };
  let dots = [];
  let timeoutID;
  let idle = false;
  Sticker.init('.sticker');

  // section 애니메이션
});
