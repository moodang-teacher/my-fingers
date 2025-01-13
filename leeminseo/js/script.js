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
    //  로디 완료 후 1초 뒤에 사라지게
    setTimeout(function () {
      $loading.fadeOut();

      // 메인헤더 애니메이션
      const mainTL = gsap.timeline();
      mainTL
        .from("#header", { y: -100, autoAlpha: 0, duration: 1 })
        .from(
          ".visual-title h2",
          { y: +100, autoAlpha: 0, duration: 0.5 },
          "-=0.3"
        )
        .from(
          ".visual-title strong",
          { y: +100, autoAlpha: 0, duration: 0.5 },
          "-=0.3"
        )
        .from(
          ".visual-title p",
          { y: +100, autoAlpha: 0, duration: 0.5 },
          "-=0.3"
        );
    }, 1000);
  });

  const workSlider = new Swiper(".work-slider", {
    loop: true,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
  });

  // 어바웃 섹션 스크롤 트리거

  const aboutTL = gsap.timeline({
    defaults: { ease: "power4.inOut" },
    scrollTrigger: {
      trigger: ".about",
      start: "top 0", // .about-con-wrap's top reaches 80% of viewport height
      pin: true,
      pinSpacing: false,
      scrub: 3,
      // markers: true,
    },
  });

  aboutTL.from(".about h3", { y: 100, autoAlpha: 0, duration: 4 });
  aboutTL.from(".about-con-wrap", { scale: 0.2, duration: 7 });
  aboutTL.from(".about-con > *", {
    y: 100,
    autoAlpha: 0,
    duration: 4,
    stagger: 3,
  });
  aboutTL.to(".fake", { x: 1, duration: 15, delay: 10 });

  const workTL = gsap.timeline({
    defaults: { ease: "power4.inOut" },
    scrollTrigger: {
      trigger: ".work",
      start: "top 0", // .about-con-wrap's top reaches 80% of viewport height
      pin: true,
      // markers: true,
    },
  });

  workTL
    .from(".work-title > *", {
      y: 100,
      autoAlpha: 0,
      duration: 0.4,
      stagger: 0.2,
    })
    .from(".work-slider-wrap", {
      x: 100,
      autoAlpha: 0,
      duration: 0.4,
      delay: 0.1,
    })
    .to(".about", {
      height: "auto",
    });
  // Ensure GSAP and ScrollTrigger plugins are loaded
  // Ensure GSAP and ScrollTrigger plugins are loaded
  // const footerTL = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '#footer',
  //     start: 'top bottom', // '#footer' top reaches viewport top
  //     // markers: true, // Optional: adds visual markers for debugging
  //   },
  // });

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
