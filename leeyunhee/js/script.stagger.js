$(function () {
  gsap.from('.sub-img', {
    // opacity: 0,
    duration: 2,
    // rotation: 360,
    delay: 0.5,
    y: -40 /* transrateY -100 */,
    ease: 'power1.in',
    repeat: -1, //무한 반복
    yoyo: true, //번갈아가면서 왔다갔다
  });

  // const box = document.querySelectorAll('.sub-menu');
  // gsap.from(box, {
  //   opacity: 0,
  //   // rotation: -10,
  //   duration: 0.5,
  //   delay: 1,
  //   // y: -100,
  //   // y: 'random(-100, 100)',
  //   y: 'random([10,-50,40,-100,10])',
  //   // rotation: 'random(-180, 180)',
  //   stagger: 0.3,
  // });
});
