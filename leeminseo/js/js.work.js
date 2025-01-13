$(function () {
  // Initialize the work slider
  gsap.registerPlugin(ScrollTrigger);

  const $window = $(window);
  const $body = $("body");
  let $loading = `<div class="loading">
                     <div class="spinner">
                        <div class="dot1"></div>
                        <div class="dot2"></div>
                      </div>
                     </div>`;

  // loading 구조 삽입
  $body.append($loading);
  // jquery 객체로 만들기
  $loading = $(".loading");
  // const $loading = $('.loading')

  $window.on("load", function () {
    //  로딩 완료 후 1초 뒤에 사라지게
    setTimeout(function () {
      $loading.fadeOut();

      // 메인헤더 애니메이션
      const mainTL = gsap.timeline();
      mainTL.from("#header", { y: -100, autoAlpha: 0, duration: 1 });
    }, 1000);
  });

  // Initialize the project slider
  const $tabMenu = $(".tab-menu > a");
  const $tabContent = $(".tab-con > div");

  $tabMenu.eq(0).addClass("on"); // 첫 번째 탭을 기본으로 선택

  $tabContent.hide().eq(0).show();

  $tabMenu.on("click", function (e) {
    e.preventDefault();

    const tIdx = $(this).index();

    $tabMenu.removeClass("on").eq(tIdx).addClass("on");
    $tabContent.hide().eq(tIdx).show();
  });

  const projectSliderWeb = new Swiper(".project-slider-web", {
    direction: "vertical",

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    observer: true,
    observeParents: true,

    navigation: {
      nextEl: ".btn-next-white",
      prevEl: ".btn-prev-white",
    },
  });

  const projectSliderSub = new Swiper(".project-slider-sub", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".btn-next-white",
      prevEl: ".btn-prev-white",
    },
  });

  const footerTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#footer",
      start: "top bottom", // '#footer' top reaches viewport top
      // markers: true, // Optional: adds visual markers for debugging
    },
  });

  footerTL.from("#footer", { y: 100, autoAlpha: 0, duration: 1 });

  $(document).ready(function () {
    var offset = 1080; // 탑 버튼이 나타날 스크롤 위치
    var duration = 500; // 애니메이션 시간

    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $(".topButton").fadeIn(duration); // 스크롤 위치가 offset보다 크면 나타나기
      } else {
        $(".topButton").fadeOut(duration); // 그렇지 않으면 숨기기
      }
    });

    $(".topButton").click(function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, duration); // 맨 위로 부드럽게 스크롤
      return false;
    });
  });

  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
});

// const $window = $(window);
// let x = 0;
// let y = 0;
// let mx = 0;
// let my = 0;
// let speed = 0.09;

// $window.on('mousemove', (e) => {
//   x = Math.max(-100, Math.min(200, e.pageX - $window.innerWidth() / 2));
//   y = Math.max(-10, Math.min(100, e.pageY - $window.innerWidth() / 2));
//   /*  y = e.pageY - $window.innerHeight() / 2; */
// });

// function moving() {
//   mx += (x - mx)
