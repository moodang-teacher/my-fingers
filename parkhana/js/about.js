$(function () {
  // about visual
  Splitting();

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // lenis.on('scroll', ScrollTrigger.update);

  // gsap.ticker.add((time) => {
  //   lenis.raf(time * 1000);
  // });

  const $visual = $('.visual-about');
  const $line1 = $visual.find('.line1 h2 span .char');
  const $line2 = $visual.find('.line2 h2 span .char');
  const $line3 = $visual.find('.line3 h2 span .char');
  const $line4 = $visual.find('.line4 h2 span .char');
  const titleAni = gsap.timeline();
  titleAni
    .from($line1, { opacity: 0, y: -20, stagger: 0.2, duration: 1 })
    .from($line2, { opacity: 0, y: -20, stagger: 0.2, duration: 1 });
  gsap.from($line3, {
    opacity: 0,
    y: -20,
    stagger: 0.2,
    duration: 1,
    delay: 0.6,
  });
  gsap.from($line4, { opacity: 0, y: -20, stagger: 0.2 });

  //active-partner
  const $activeP = $('.active-partner');
  const $actT = $activeP.find('.partner-con .con-item .word');
  const $actTT = $activeP.find('.partner-con h3 .char');
  const $actME = $activeP.find('.partner-img .partner-me');
  const $actW = $activeP.find('.partner-img .partner-with');
  const $actC = $activeP.find('.partner-img .partner-coffee');

  gsap
    .timeline({
      scrollTrigger: {
        trigger: $activeP,
        start: 'top top',
        end: 'bottom+=1500 top',
        pin: true,
        toggleActions: 'play none reverse reset',
      },
    })
    .from($actTT, { opacity: 0, y: -20, stagger: 0.1 })
    .from($actT, { opacity: 0, y: -20, stagger: 0.1 });

  gsap.from($actME, {
    autoAlpha: 0,
    x: 70,
    rotate: 5,
    duration: 1,
    scrollTrigger: {
      trigger: $actME,
      start: 'top center',
      toggleActions: 'play none reverse reset',
    },
  });
  gsap.from($actW, {
    autoAlpha: 0,
    x: -20,
    rotate: 10,
    duration: 1,
    scrollTrigger: {
      trigger: $actW,
      start: 'top center',
      toggleActions: 'play none reverse reset',
    },
  });
  gsap.from($actC, {
    autoAlpha: 0,
    x: -50,
    rotate: -10,
    duration: 1,
    scrollTrigger: {
      trigger: $actC,
      start: 'top center',
      toggleActions: 'play none reverse reset',
    },
  });

  //active-together
  const $activeT = $('.active-together');
  const $actT2 = $activeT.find('.together-con .word');
  const $actS = $activeT.find('.together-seminar');
  const $actL = $activeT.find('.together-latteart');
  const $actK = $activeT.find('.together-teamwork');

  gsap
    .timeline({
      scrollTrigger: {
        trigger: $activeT,
        start: 'top top',
        end: 'bottom+=2000 top',
        pin: true,

        toggleActions: 'play none reverse reset',
      },
    })
    .from($actT2, { opacity: 0, y: -20, stagger: 0.1 });

  gsap.from($actS, {
    autoAlpha: 0,
    x: -70,
    y: -50,
    rotate: -5,
    duration: 1,
    scrollTrigger: {
      trigger: $actS,
      start: 'top center',
      toggleActions: 'play none reverse reset',
    },
  });

  gsap.from($actL, {
    autoAlpha: 0,
    x: 20,
    y: -50,
    rotate: 20,
    duration: 1,
    scrollTrigger: {
      trigger: $actL,
      start: 'top center',
      toggleActions: 'play none reverse reset',
    },
  });

  gsap.from($actK, {
    autoAlpha: 0,
    x: 70,
    y: -50,
    rotate: 5,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: $actK,
      start: 'top center',
      toggleActions: 'play none reverse reset',
    },
  });

  // 가로스크롤 영역
  const $staticSec = $('.static-checklist');
  const $horizonScroll = $('.horizon-section');
  const $horizonScrollWidth = $horizonScroll.innerWidth();
  const $staticSec3 = $('.static-checklist3');
  const $chkT = $staticSec3.find('.static-con .word');
  const $chkTT = $staticSec3.find('h3 .char');
  const $chkC = $staticSec3.find('.static-check');
  const $chkP = $staticSec3.find('.static-planer');
  const $chkL = $staticSec3.find('.static-lover');
  const $endingT = $('.about-ending h5 .char');

  const $tlHorizon = gsap
    .timeline({
      scrollTrigger: {
        trigger: $staticSec,
        start: 'bottom bottom',
        end: () => '+=' + $horizonScrollWidth,
        pin: true,
        scrub: true,
      },
    })
    .to($staticSec, {
      backgroundImage: 'none',
      scrollTrigger: {
        trigger: $staticSec,
        start: 'bottom bottom',
        scrub: true,
      },
    });

  $tlHorizon.from($horizonScroll, {
    autoAlpha: 0,
  });
  $tlHorizon
    .to($horizonScroll, {
      x: () => -($horizonScrollWidth - innerWidth),
    })
    .to($horizonScroll, {
      ease: 'none',
      scrollTrigger: {
        trigger: $horizonScroll,
        end: '+=' + $horizonScrollWidth,
        scrub: true,
      },
    });

  gsap.from($chkTT, {
    opacity: 0,
    duration: 1.5,
    stagger: 0.1,
    scrollTrigger: {
      trigger: $chkTT,
      containerAnimation: $tlHorizon,
      start: 'left+=1600 80%',
      toggleActions: 'play none reverse reset',
    },
  });

  gsap.to($chkC, {
    rotate: 5,
    duration: 1,
    scrollTrigger: {
      trigger: $chkC,
      containerAnimation: $tlHorizon,
      start: 'left+=1600 80%',
      toggleActions: 'play none reverse reset',
    },
  });

  gsap.to($chkP, {
    rotate: -10,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: $chkP,
      containerAnimation: $tlHorizon,
      start: 'left+=1350 80%',
      toggleActions: 'play none reverse reset',
    },
  });

  gsap.from($chkL, {
    autoAlpha: 0,
    x: -200,
    y: -100,
    duration: 1,
    scrollTrigger: {
      trigger: $chkL,
      containerAnimation: $tlHorizon,
      start: 'left+=1000 80%',
      toggleActions: 'play none reverse reset',
    },
  });

  gsap.from($chkT, {
    opacity: 0,
    y: -100,
    stagger: 0.1,
    scrollTrigger: {
      trigger: $chkT,
      containerAnimation: $tlHorizon,
      start: 'left+=800 80%',
      toggleActions: 'play none reverse reset',
    },
  });

  gsap.from($endingT, {
    opacity: 0,
    y: -100,
    stagger: 0.1,
    scrollTrigger: {
      trigger: $endingT,
      containerAnimation: $tlHorizon,
      start: 'left 80%',
      toggleActions: 'play none reverse reset',
    },
  });

  const $flymint = $('.mint-fly');

  gsap.to($flymint, {
    rotate: 360,
    offsetDistance: '100%',
    delay: 1,
    duration: 5,
    scrollTrigger: {
      trigger: $endingT,
      containerAnimation: $tlHorizon,
      start: 'left 80%',
      toggleActions: 'play none reverse reset',
    },
  });
});
