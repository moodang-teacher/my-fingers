// 포트폴리오
$(function () {
  const $portfolioItem = $(".portfolio-item");
  let portIdx = 0;
  changePortfolioItem(0);

  $portfolioItem.on("click", function () {
    portIdx = $(this).index();
    changePortfolioItem(portIdx);
  });

  // setInterval(function () {
  //   if (portIdx === 2) {
  //     portIdx = 0;
  //   } else {
  //     portIdx++;
  //   }
  //   changePortfolioItem(portIdx);
  // }, 5000);

  function changePortfolioItem(index) {
    $portfolioItem.removeClass("active");
    $portfolioItem.eq(index).addClass("active");
  }

  const $sideDot = $(".indicator > li");
  // 2. indicator를 클릭했을 때

  $sideDot.on("click", function () {
    // 선택한 인덱스를 받아서 secIdx 값으로 저장
    let secIdx = $(this).index();
    // console.log(secIdx);

    // 인디케이터 활성화 표시s
    $sideDot.removeClass("active");
    $sideDot.eq(secIdx).addClass("active");
  });

  // 슬라이더1;
  const $slideWrap1 = $(".slide-wrap1");
  $slideWrap1.slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: `linear`,
    arrows: false,
    pauseOnHover: false,

    //보여줄 슬라이드 아이템의 개수
    slidesToShow: 6,
  });
  // 슬라이드2
  const $slideWrap2 = $(".slide-wrap2");
  $slideWrap2.slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: `linear`,
    arrows: false,
    pauseOnHover: false,
    rtl: true,

    //보여줄 슬라이드 아이템의 개수
    slidesToShow: 6,
  });

  // progrssbar
  let progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach((progressBar) => {
    let percentage = parseInt(progressBar.querySelector("b").textContent);
    progressBar.style.width = `${percentage}%`;
  });

  // 마우스
  // 대상을 변수로 지정
  const $window = $(window);
  const $cursor = $(".cursor");
  const $spark = $(".spark");

  // 마우스의 좌표값을 담을 변수
  let mouseX = 0;
  let mouseY = 0;

  // 마우스 위치값을 구하고 가짜 커서에 offset 값으로 부여
  $window.on("mousemove", function (e) {
    // console.log(e);

    mouseX = e.pageX;
    mouseY = e.pageY;

    $cursor.add($spark).css({
      left: mouseX,
      top: mouseY,
    });
  });
  // 마우스를 누르면 click클래스 부여, 떼면 click클래스 삭제
  $window.on("mousedown", function () {
    $cursor.addClass("click");
  });

  $window.on("mouseup", function () {
    $cursor.removeClass("click");
  });
  // spark 효과
  $window.on("click", function () {
    $spark.addClass("active");
    setTimeout(function () {
      $spark.removeClass("active");
    }, 500);
  });

  // 스크롤 up,down
  AOS.init({
    duration: 2000,
    easing: "ease-in-out",
  });

  // 스크롤 바

  const $bar = $(".scroll-bar");
  const winHeight = $window.outerHeight(); // border,padding 모두 합친 세로크기
  const docHeight = $(document).outerHeight();

  // 스크롤 이벤트가 일어나면
  $window.on("scroll", function () {
    let scTop = $(this).scrollTop();

    if (scTop >= sec1Pos && scTop < sec2Pos) {
      // console.log("첫번째 섹션에 있구만!");
      secIdx = 0;
    } else if (scTop >= sec2Pos && scTop < sec3Pos) {
      // console.log("두번째 섹션에 있구만!");
      secIdx = 1;
    } else if (scTop >= sec3Pos && scTop < sec4Pos) {
      // console.log("세번째 섹션에 있구만!");
      secIdx = 2;
    } else if (scTop >= sec4Pos) {
      // console.log("네번째 섹션에 있구만!");
      secIdx = 3;
    }
    // 인디케이터 활성화 표시s
    $sideDot.removeClass("active");
    $sideDot.eq(secIdx).addClass("active");

    // 스크롤 값의 퍼센트 계산 : 타겟/context * 100
    let percent = (scTop / (docHeight - winHeight)) * 100 + "%";
    // let percent = (scTop / docHeight) * 100;

    // console.log(scTop, percent);

    $bar.css("width", percent);

    const portfolioPos = $(".portfolio").offset().top;
    // console.log(portfolioPos);
    if (scTop >= portfolioPos) {
      $goTop.fadeIn();
    }
  });

  const $section = $("#container > section");
  // 전역변수로 선언
  let sec1Pos = 0;
  let sec2Pos = 0;
  let sec3Pos = 0;
  let sec4Pos = 0;

  // section의 y위치값을 구해오는 함수정의
  function getPosition() {
    sec1Pos = $section.eq(0).offset().top;
    sec2Pos = $section.eq(1).offset().top;
    sec3Pos = $section.eq(2).offset().top;
    sec4Pos = $section.eq(3).offset().top;

    console.log(sec1Pos, sec2Pos, sec3Pos, sec4Pos);
  }

  getPosition();

  // 로딩 스피너
  const $loading = $(".loading");

  $window.on("load", function () {
    // 로딩 시간 2초
    // setTimeout(동작,시간)
    setTimeout(function () {
      $loading.fadeOut();
    }, 2000);
  });

  // top
  //대상을 변수로
  const $goTop = $(".go-top");
  //처음에는 top버튼을 안보이게
  $goTop.hide();
});
