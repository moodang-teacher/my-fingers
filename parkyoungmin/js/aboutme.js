$(function () {
  // 어바웃미 가로스크롤
  const sliderAbout = document.querySelector('#container-about');

  const tl = gsap.to(sliderAbout, {
    x: () => -(sliderAbout.offsetWidth - innerWidth),

    ease: 'none',

    scrollTrigger: {
      trigger: sliderAbout,
      // markers: true,
      end: () => '+=' + sliderAbout.offsetWidth,
      pin: true,
      scrub: 1,
    },
  });

  gsap.from('.pic1', {
    x: -200,
    duration: 1,
    scrollTrigger: {
      trigger: '.pic1',
      // markers: true,
      containerAnimation: tl,
      toggleActions: 'play none none reset',
    },
  });
  gsap.from('.back-deco', {
    y: -100,
    duration: 1,
    scrollTrigger: {
      trigger: '.back-deco',
      // markers: true,
      containerAnimation: tl,
      toggleActions: 'play none none reset',
    },
  });
  gsap.from('.about-me-pic > h2', {
    y: -100,
    duration: 1.5,
    autoAlpha: 0,
    scrollTrigger: {
      trigger: '.about-me-pic > h2',
      // markers: true,
      containerAnimation: tl,
      toggleActions: 'play none none reset',
    },
  });

  gsap.from('.pic2', {
    x: -103,
    scrollTrigger: {
      trigger: '.pic2',
      // markers: true,
      containerAnimation: tl,
      start: 'right right',
      toggleActions: 'play none none reset',
      scrub: true,
    },
  });
  gsap.from('.pic3', {
    x: 259,
    scrollTrigger: {
      trigger: '.pic3',
      // markers: true,
      containerAnimation: tl,
      start: 'right right',
      toggleActions: 'play none none reset',
      scrub: true,
    },
  });
  gsap.from('.experience-contest-con', {
    x: 122,
    scrollTrigger: {
      trigger: '.pic2',
      // markers: true,
      containerAnimation: tl,
      start: 'left right',
      toggleActions: 'play none none reset',
      scrub: true,
    },
  });
  gsap.from('.pic4', {
    x: 99,
    scrollTrigger: {
      trigger: '.pic4',
      // markers: true,
      containerAnimation: tl,
      start: 'right right',
      toggleActions: 'play none none reset',
      scrub: true,
    },
  });
  gsap.from('.pic5', {
    x: -25,
    scrollTrigger: {
      trigger: '.pic5',
      // markers: true,
      containerAnimation: tl,
      start: 'right right',
      toggleActions: 'play none none reset',
      scrub: true,
    },
  });
  gsap.from('.experience-work-together-con', {
    x: -23,
    scrollTrigger: {
      trigger: '.pic5',
      // markers: true,
      containerAnimation: tl,
      start: 'right right',
      toggleActions: 'play none none reset',
      scrub: true,
    },
  });

  gsap.from('.skills > li', {
    x: 200,
    stagger: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: '.skills',
      // markers: true,
      containerAnimation: tl,
      start: 'left 70%',
      toggleActions: 'play none none reset',
    },
  });

  // 어바웃미 키워드 마우스 무브

  const $window = $(window);
  const $objWrap = $('.key-word');
  const $obj1 = $objWrap.find('.obj1');
  const $obj2 = $objWrap.find('.obj2');
  const $obj3 = $objWrap.find('.obj3');
  const $obj4 = $objWrap.find('.obj4');
  const $obj5 = $objWrap.find('.obj5');

  let x = 0;
  let y = 0;
  let aniMovingObj;

  let mx = 0;
  let my = 0;
  let speed = 0.009;

  function getOffset() {
    $window.on('mousemove', function (e) {
      x = e.clientX - $window.outerWidth() / 2;
      y = e.clientY - $window.outerHeight() / 2;
      // console.log(x, y);
    });
  }

  function movingObj() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    $obj1.css({
      transform: `translate3d(${mx}px, ${-my * 0.5}px, ${-mx * 1}px)`,
    });
    $obj2.css({
      transform: `translate(${mx * 1}px, ${my * 1}px )`,
    });
    $obj3.css({
      transform: `translate(${-mx * 1}px, ${-my * 1.5}px )`,
    });
    $obj4.css({
      transform: `translate3d(${mx * 0.5}px, ${my}px, ${mx * 0.5}px)`,
    });
    $obj5.css({
      transform: `translate(${-mx * 0.5}px, ${-my * 0.5}px )`,
    });

    aniMovingObj = requestAnimationFrame(movingObj);
  }

  function initMoving() {
    getOffset();
    movingObj();
  }

  $objWrap.on('mouseleave', function () {
    cancelAnimationFrame(aniMovingObj);
    console.log('leave');
  });
  $objWrap.on('mouseenter', function () {
    initMoving();
  });
});
