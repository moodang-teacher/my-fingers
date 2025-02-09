$(function () {
  const ani1 = gsap.timeline();
  ani1.to("#section1 .text", {
    rotation: 720,
    scale: 0,
    background: "#98FB98",
  });
  ani1.to("#section1 .text", { rotation: 0, scale: 1.5, background: "#fff" });

  ScrollTrigger.create({
    animation: ani1,
    trigger: "#section1",
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true,
    //핀 효과를 자연스럽게 넣어주는
    anticipatePin: 1,
    /*  markers: true, */
  });

  //section2
  const ani2 = gsap.timeline();
  ani2.from("#section2 .i1", { y: -300, autoAlpha: 0, borderRadius: 100 });
  ani2.from("#section2 .i2", { y: -200, autoAlpha: 0, borderRadius: 100 });
  ani2.from("#section2 .i3", { y: -100, autoAlpha: 0, borderRadius: 100 });
  ani2.from("#section2 .i4", { y: 200, autoAlpha: 0, borderRadius: 100 });
  ani2.from("#section2 .i5", { y: 300, autoAlpha: 0, borderRadius: 100 });

  ScrollTrigger.create({
    animation: ani2,
    trigger: "#section2",
    start: "top top",
    end: "+=3000",
    scrub: true,
    pin: true,
    //핀 효과를 자연스럽게 넣어주는
    anticipatePin: 1,
    /*  markers: true, */
  });

  //section3
  const ani3 = gsap.timeline();
  ani3.from("#section3 .item-img", {
    y: -100,
    autoAlpha: 0,
    ease: "back.out(4)",
    // stagger: 0.1,
    stagger: {
      amount: 3,
      from: "random",
    },
  });

  ScrollTrigger.create({
    animation: ani3,
    trigger: "#section3",
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true,
    //핀 효과를 자연스럽게 넣어주는
    anticipatePin: 1,
    /*  markers: true, */
  });
});
