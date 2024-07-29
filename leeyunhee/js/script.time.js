$(function () {
  const txt = document.querySelectorAll('.sub-info');

  gsap.from(txt, {
    opacity: 1,
    // rotation: -10,
    duration: 0.5,

    // y: -100,
    // y: 'random(-100, 100)',
    x: '([50,50,40,60,100,20,60,50,40,20,50])',

    stagger: 0.3,
  });
});
