$(function () {
  gsap.registerPlugin(ScrollTrigger);

  /* ************************
   * PROCESSES, 이미지 펼치기
   ************************ */
  gsap.from('.processes-img', {
    width: '80%',
    borderRadius: '50px',
    ease: 'power4.inOut',

    // clipPath: 'inset(0 10%)',
    // duration: 2,

    scrollTrigger: {
      trigger: '.processes-img',
      start: 'top 20%',
      end: 'top 0',

      scrub: 1,
      // markers: true,
    },

    // onComplete: () => {
    //   gsap.to('.processes-img', {
    //     width: '80%',
    //     borderRadius: '50px',
    //     ease: 'power4.inOut',

    //     scrollTrigger: {
    //       trigger: '.processes-img',
    //       start: '80% 10%',
    //       end: '100% 90%',

    //       scrub: 3,
    //       markers: true,
    //     },
    //   });
    // },
  });
});
