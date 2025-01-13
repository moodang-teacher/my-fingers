$(function () {
  // Initialize the work slider
  gsap.registerPlugin(ScrollTrigger);

  const $window = $(window);
  const $body = $('body');
  let $loading = `<div class="loading">
                     <div class="spinner">
                        <div class="dot1"></div>
                        <div class="dot2"></div>
                      </div>
                     </div>`;

  // loading 구조 삽입
  $body.append($loading);
  // jquery 객체로 만들기
  $loading = $('.loading');
  // const $loading = $('.loading')

  $window.on('load', function () {
    //  로디 완료 후 1초 뒤에 사라지게
    setTimeout(function () {
      $loading.fadeOut();

      // 메인헤더 애니메이션
      const mainTL = gsap.timeline();
      mainTL
        .from('#header', { y: -100, autoAlpha: 0, duration: 1 })
        .from('.me h2', { y: 100, autoAlpha: 0, duration: 0.5 }, '-=0.3');
    }, 1000);
  });
  // 메인 헤더 애니메이션

  // about-me 섹션 애니메이션

  const aboutMeTL = gsap.timeline({
    defaults: { ease: 'power4.inOut' },
    scrollTrigger: {
      trigger: '.about-me-wrap',
      start: 'top top', // .about-me의 상단이 뷰포트 상단에 도달할 때
      pin: true,
      scrub: 2,
      // markers: true,
    },
  });

  aboutMeTL
    .from('.about-me-con > strong', {
      y: 100,
      autoAlpha: 0,
      duration: 1.5,
    })
    .from('.about-me-con > h3', {
      y: 100,
      autoAlpha: 0,
      duration: 3,
      delay: 0.5,
    })
    .to('.about-me-con > strong > b', {
      color: '#1bbaff',
      duration: 3,
      delay: 0.3,
    })
    .to('.about-me-con > h3 > b', {
      color: '#1bbaff',
      duration: 3,
      delay: 0.3,
    })
    .from('.about-me-con > p', {
      y: 100,
      autoAlpha: 0,
      duration: 3,
      delay: 0.5,
    })
    .from('.about-me-info > *', {
      y: 100,
      autoAlpha: 0,
      duration: 3,

      stagger: 1,
    });

  gsap.utils.toArray('.word-keyword').forEach((item) => {
    gsap.to(item, {
      transform: 'rotateX(-10deg) scale(0.9)',
      transformOrigin: 'top',
      // filter: 'brightness(0.3)',
      autoAlpha: 0,
      duration: 1,
      delay: 0.5,
      y: 200,

      // 스크롤츠리거 세팅
      scrollTrigger: {
        trigger: item,
        // markers: true,
        start: 'top 20%',
        toggleActions: 'play none reverse reverse',
        // pin: true,
      },
    });
  });
  const footerTL = gsap.timeline({
    scrollTrigger: {
      trigger: '#footer',
      start: 'top bottom', // '#footer' top reaches viewport top
      // markers: true, // Optional: adds visual markers for debugging
    },
  });

  footerTL.from('#footer', { y: 100, autoAlpha: 0, duration: 1 });
  $(document).ready(function () {
    var offset = 1080; // 탑 버튼이 나타날 스크롤 위치
    var duration = 500; // 애니메이션 시간

    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $('.topButton').fadeIn(duration); // 스크롤 위치가 offset보다 크면 나타나기
      } else {
        $('.topButton').fadeOut(duration); // 그렇지 않으면 숨기기
      }
    });

    $('.topButton').click(function (event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, duration); // 맨 위로 부드럽게 스크롤
      return false;
    });
  });

  const lenis = new Lenis();

  lenis.on('scroll', (e) => {
    console.log(e);
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
});
