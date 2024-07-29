const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-menu",
    // markers: true,

    // trigger viewport
    start: "top top",
    end: "bottom+=2000",

    pin: true, // 화면 고정
    scrub: true, // 스크롤 값과 연동
  },
});
