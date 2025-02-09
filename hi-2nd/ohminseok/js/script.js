$(function () {
  //초기화
  Splitting();

  // 대상을 변수에 저장

  const $window = $(window);
  const $aboutPic = $(".about-pic");
  const $pic1 = $aboutPic.find(".con.a-pic1");
  const $pic2 = $aboutPic.find(".con.a-pic2");
  const $pic3 = $aboutPic.find(".con.a-pic3");
  const $pic4 = $aboutPic.find(".con.a-pic4");
  const $cloDec = $(".deco");
  const $cloDectwo = $(".deco top");

  console.log($cloDectwo);
  // console.log($pic1, $pic2, $pic3, $pic4);
  // console.log(cloDec);

  gsap.registerPlugin(ScrollTrigger);

  /* 첫효과 */
  // gsap.to('.intro-overlay', {
  //   clipPath: 'circle(150% at 50% 50%)',
  //   ease: 'power4.out',
  //   duration: 10,

  //   scrollTrigger: {
  //     trigger: '.intro-section',
  //     start: 'top top',
  //     end: '+=2000',
  //     scrub: 5,
  //     pin: true,
  //     onLeave: () =>
  //       gsap.to('.intro-section', {
  //         autoAlpha: 0,
  //         duration: 2,
  //         onComplet: () => gsap.set('.intro-section', { display: 'none' }),
  //       }), // 애니메이션 완료 후 섹션 숨기기
  //   },
  // });

  // blur 효과 타임라임을 이용해서 주기
  const t1 = gsap.timeline({
    duration: 1,

    scrollTrigger: {
      trigger: ".portfolio-page",
      /* markers: true, */
      start: "top 20%",
      end: "bottom 50%",
      toggleActions: "play none none none",
      /*   scrub: 1, */
    },
  });
  t1.from(".blur1", { scale: 0.5, autoAlpha: 0, duration: 1 }, "-=0.5");
  t1.from(".blur2", { scale: 0.5, autoAlpha: 0, duration: 1 }, "-=0.5");
  t1.from(".blur3", { scale: 0.5, autoAlpha: 0, duration: 1 }, "-=0.5");
  t1.from(".blur4", { scale: 0.5, autoAlpha: 0, duration: 1 }, "-=0.5");
  t1.from(".blur5", { scale: 0.5, autoAlpha: 0, duration: 1 }, "-=0.5");
  t1.from(".blur6", { scale: 0.5, autoAlpha: 0, duration: 1 }, "-=0.5");
  t1.from(".blur7", { scale: 0.5, autoAlpha: 0, duration: 1 }, "-=0.5");

  // about의 글(효과)
  const TL = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec.about",
      // markers: true,
      start: "top 10%",
      end: "+=2000",
      pin: true,
      /*     scrub: 2, */
      toggleActions: "play none none none", // 애니메이션이 한 번만 실행
    },
  });

  TL.from(".h2", { y: 200, autoAlpha: 0, duration: 1, ease: "power2.out" });
  TL.from(
    ".p1",
    { y: 200, autoAlpha: 0, duration: 1, ease: "power2.out" },
    "-=0.8"
  );
  TL.from(
    ".p2",
    { y: 200, autoAlpha: 0, duration: 1, ease: "power2.out" },
    "-=0.8"
  );
  TL.from(
    ".p3",
    { y: 200, autoAlpha: 0, duration: 1, ease: "power2.out" },
    "-=0.8"
  );
  TL.from(
    ".p4",
    { y: 200, autoAlpha: 0, duration: 1, ease: "power2.out" },
    "-=0.8"
  );
  TL.from(
    ".p5",
    { y: 200, autoAlpha: 0, duration: 1, ease: "power2.out" },
    "-=0.8"
  );
  TL.from(
    ".p6",
    { y: 200, autoAlpha: 0, duration: 1, ease: "power2.out" },
    "-=0.8"
  );
  TL.from(".about-num h3", {
    y: 400,
    autoAlpha: 0,
    duration: 1,
    ease: "power2.out",
  });
  TL.from(
    ".text-dec",
    { fadeIn: 400, autoAlpha: 0, duration: 1, ease: "power2.out" },
    "-=0.3"
  );

  const T3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".initiate",
      start: "top 20%",
      end: "+=4000",
      /*     toggleActions: "play none none none",/ */
      /*     markers: true, */

      pin: true,
    },
  });

  /* 이미지 바꾸기 */
  const initImgone = document.getElementById("init-img-one");
  const initImgtwo = document.getElementById("init-img-two");

  const newSrcone = "./img/Don t be afraid to fail-white.png";
  const newSrctwo = "./img/Be afraid not to try-white.png"; /* 이미지 경로 */

  T3.from(
    ".initiate .txt-one",
    {
      x: 500,
      opacity: 0,
      duration: 1,
    },
    0
  ) // 시작 시간을 0으로 설정하여 첫 애니메이션과 동시에 시작

    .from(
      ".initiate .txt-two",
      {
        x: -500,
        opacity: 0,
        duration: 1,
      },
      0
    ); // 시작 시간을 0으로 설정하여 첫 애니메이션과 동시에 시작

  T3.from(".initiate .init-txt-kn", {
    opacity: 0,
    duration: 1,
  });

  T3.from(".initiate", {
    clipPath: "circle(100% at 50% 50%)",
    duration: 1,
    ease: "circ.inOut",
  });

  T3.to(".initiate", {
    clipPath: "circle(100% at 50% 50%)",
    duration: 1,
    ease: "circ.inOut",
    onUpdate: function () {
      // 클립 패스 애니메이션과 동시에 배경 색상 변화 적용
      const element = document.querySelector(".initiate");
      const progress = this.progress(); // 애니메이션 진행도 (0 to 1)
      const newColor = `linear-gradient(
        to right,
        #9ecfff ${progress * 100}%,
        #6bbbff ${40 + progress * 100}%,
        #b8dcff ${100 - (1 - progress) * 100}%
      )`;
      element.style.background = newColor;
    },
    onComplete: function () {
      const element = document.querySelector(".initiate");
      element.style.background =
        "linear-gradient(to right, #9ecfff 0%, #6bbbff 40%, #b8dcff 100%)"; // 동적 배경을 제거
    },
  });

  T3.to([initImgone, initImgtwo], {
    x: (index, target) => (target === initImgone ? 500 : -500),
    opacity: 0,
    duration: 1,
    onComplete: function () {
      // 이미지 소스 변경
      initImgone.src = newSrcone;
      initImgtwo.src = newSrctwo;

      T3.to([initImgone, initImgtwo], {
        x: 0,
        opacity: 1,
        duration: 1,
      });

      T3.to(".initiate .init-txt-kn", {
        opacity: 1,
        duration: 1,
        color: "#fff",
      });
    },
  });

  /*   T3.add(() => {
    document.querySelector(".initiate").classList.add("initiate-bg");

    document.querySelector(".initiate").style.background =
      "linear-gradient(to right, #9ecfff 0%, #6bbbff 40%, #b8dcff 100%)";
  });
 */
  //  구름 움직이게
  const Tl = gsap.timeline();

  Tl.to($cloDec, {
    y: 200,
    duration: 0.8,

    scrollTrigger: {
      trigger: $cloDec,
      // markers: true,
      start: "top 20%",
      end: "bottom top",
      scrub: 2,
    },
  });

  Tl.from(".deco bottom", { autoAlpha: 1, y: -300, duration: 0.8, delay: 2 });

  const $aboutTwo = $(".about-two");
  //about영역에서는 벗어났지만 about의 관련된 사진 효과
  const TL2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-two",
      /*   markers: true, */
      start: "top 20%",
    },
    stagger: {
      each: 0.4,
      from: "random",
    },
  });

  TL2.from(".about-pic .a-pic1", { autoAlpha: 0, y: 100, duration: 1 });
  TL2.from(".about-pic .a-pic2", { autoAlpha: 0, y: 100, duration: 1 });
  TL2.from(".about-pic .a-pic3", { autoAlpha: 0, y: 100, duration: 1 });
  TL2.from(".about-pic .a-pic4", { autoAlpha: 0, y: 100, duration: 1 });
  TL2.add(move);

  // 이건 사진 효과에 따른 마우스 이동시 움직임
  let x = 0;
  let y = 0;

  let mx = 0;
  let my = 0;

  const speed = 0.0005;
  const maxDistance = 50;

  $aboutTwo.on("mousemove", function (e) {
    x = (e.pageX - $window.outerWidth() / 2) / maxDistance;
    y = (e.pageY - $window.outerHeight() / 2) / maxDistance;
  });

  $aboutTwo.on("mouseleave", function (e) {
    x = 0;
    y = 0;
  });

  function move() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    // 개같이 움직이고 통제가 안돼.
    const maxTranslateX = 100; //최대 이동거리
    const maxTranslateY = 100;

    // mx와 my를 제한된 범위 내에서 조정
    const limitedMx = Math.max(-maxTranslateX, Math.min(maxTranslateX, mx));
    const limitedMy = Math.max(-maxTranslateY, Math.min(maxTranslateY, my));

    // 대상에 값 적용

    $pic1.css({
      transform: `translate(${-limitedMy}px, ${-limitedMy}px)`,
    });

    $pic2.css({
      transform: `translate(${-limitedMx}px, ${-limitedMy}px)`,
    });

    $pic3.css({
      transform: `translate(${-limitedMy}px, ${limitedMx}px)`,
    });

    $pic4.css({
      transform: `translate(${-limitedMy}px, ${-limitedMy}px)`,
    });

    requestAnimationFrame(move);
  }

  // 타임라임을 하나로 연결해야하는데 끊겨서 함. 고쳐야 원활하게 돌아감.
  //  사람이 나타나고 내려가는 효과
  gsap.fromTo(
    ".clo-man",
    {
      opacity: 1,
      y: 0,
    },
    {
      opacity: 1,
      y: 5000,
      scrollTrigger: {
        trigger: ".bg-gra",
        start: "top top",
        end: "+=5000",
        scrub: 15,
        /*         onEnter: () =>
          gsap.to(".clo-man", { opacity: 1, y: 5000, duration: 20 }), */
        /*    onLeave: () =>
          gsap.to(".clo-man", { opacity: 0, y: -5000, duration: 1 }), */
      },
    }
  );
  // 구름 양 옆으로
  let t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".bg-gra",
      start: "top 20%",
      end: "bottom bottom",
      scrub: 2,
      ease: "power4.inOut",
      /*       markers: true, */
      // id: 'myScrollTrigger',
    },
    stagger: {
      each: 0.8,
      from: "1",
    },
  });

  t2.to(
    ".clo-img:nth-child(odd)",
    {
      x: 700,
      y: 100,
      // autoAlpha: 0,
    },
    0
  );

  t2.to(
    ".clo-img:nth-child(even)",
    {
      x: -700,
      y: -100,
      // autoAlpha: 0,
    },
    0
  );

  const sectionEl = gsap.utils.toArray(".sec-bg");
  // console.log(sectionEl);

  sectionEl.forEach((item) => {
    const bgColor = item.getAttribute("data-bgcolor");
    // console.log(bgColor);

    const conbg = ScrollTrigger.create({
      trigger: item,
      /*   markers: true, */
      start: "top 40%",
      end: "+=1500",
      pin: true,
      scrub: 2,

      onEnter: () => {
        gsap.to("body", {
          background: bgColor,
          duration: 1,
        });
      },

      onEnterBack: () => {
        gsap.to("body", {
          background: bgColor,
          duration: 1.5,
        });
      },
    });

    // 섹션 요소들을 가져오기
    const sections = document.querySelectorAll("section.sec-bg");

    sections.forEach((section) => {
      // 섹션 내의 각 텍스트 요소들을 선택
      const textEls = section.querySelectorAll("[data-splitting]");

      textEls.forEach((textEl) => {
        // 텍스트를 문자 단위로 쪼개서 span 요소로 감싸기
        const chars = Array.from(textEl.textContent).map((char) => {
          const span = document.createElement("span");
          span.classList.add("char");
          span.textContent = char;
          return span;
        });

        // 원래 텍스트를 지우고 새로 감싼 span 요소들을 추가
        textEl.textContent = "";
        chars.forEach((charEl) => textEl.appendChild(charEl));

        // 각 문자(span 요소)들을 선택
        const charEls = textEl.querySelectorAll(".char");

        // GSAP을 이용한 애니메이션 설정
        gsap.fromTo(
          charEls,
          {
            y: -500, // 초기 위치
            opacity: 0, // 초기 투명도
          },
          {
            y: 0, // 최종 위치
            opacity: 1, // 최종 투명도
            stagger: 0.1, // 문자 사이의 지연 시간
            duration: 1, // 애니메이션 기간
            ease: "back.out(10)", // 애니메이션 이징 함수
            scrollTrigger: {
              trigger: section, // 트리거로 사용할 요소
              start: "top 50%", // 시작 위치
              end: "top 40%", // 종료 위치
              scrub: 6, // 스크롤 이벤트에 따른 애니메이션 조정
              onEnter: () => {
                // 재미요소: 각 문자에 장식 클래스 추가
                charEls.forEach((charEl) =>
                  charEl.classList.add("char-animated")
                );
              },
              onLeaveBack: () => {
                // 재미요소: 각 문자에서 장식 클래스 제거
                charEls.forEach((charEl) =>
                  charEl.classList.remove("char-animated")
                );
              },
            },
          }
        );
      });
    });

    $(".btn-top").on("click", () => {
      $("html , body")
        .stop()
        .animate(
          {
            scrollTop: 0,
          },
          function () {
            gsap.to(".btn-top"),
              {
                autoAlpha: 1,
              };
          }
        );
    });
  });

  /*   const T4 = gsap.timeline({
    scrollTrigger: sectionText,
    markers: true,
    start: "top top",
    end: "",
    pin: true,
    scrub: 1,
  }); */

  // const TL2 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.project .web-design > div',
  //     markers: true,
  //     start: 'top 0%',
  //     end: 'bottom+=3000 0%',
  //     pin: true,
  //   },
  // });

  // TL2.from('.project .web-design > div', {
  //   y: 'random(100, 150, 200)',
  //   autoAlpha: 0,
  //   stagger: 0.2,
  // });

  // TL2.to('.project .web-design > div', {
  //   autoAlpha: 1,
  // });

  // const TL2 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '#project',
  //     start: 'top 30%',
  //     end: '+=3000',
  //     pin: true,
  //     scrub: 1,
  //     markers: true,
  //   },
  // });
  // TL2.from('#project .web-design', {
  //   autoAlpha: 0,
  //   y: 100,
  //   stagger: 0.2,
  //   duration: 1,
  // });
  // TL2.from('#project .app-design', {
  //   autoAlpha: 0,
  //   y: 100,
  //   duration: 1,
  // });

  /* project부분의 사진 효과 */
  // const picani = gsap.timeline();
  // picani.to('.design .web-title', { y: 100, autoAlpha: 1 });
  // picani.to('.design .pr-pic', { y: 100, autoAlpha: 1 });
  // picani.to('.design .web-txt', { y: 100, autoAlpha: 1 });
  // // picani.to('.design .web-title', { y: 100 });

  // ScrollTrigger.create({
  //   animation: picani,
  //   trigger: '.design',
  //   start: 'top top',
  //   end: '+=3000',

  //   pin: true,
  //   anticpatePin: 1,
  //   markers: true,
  // });

  const prPic = gsap.utils.toArray(".pr-pic");
  // console.log(prPic);

  prPic.forEach((item) => {
    const prTxt = item.closest(".design").querySelector(".pr-txt");

    gsap.from(item, {
      y: "random(100, 125, 150)",
      duration: 1,
      opacity: 0,

      //스크롤 값과 연동
      scrollTrigger: {
        trigger: item,
        // markers: true,
        start: "top 70%",
        // toggleActions: 'play none none reset', // 애니메이션 시작과 되돌리기 설정
      },
    });
    gsap.from(prTxt, {
      y: "random(100, 125, 150)",
      duration: 2,
      opacity: 0,

      scrollTrigger: {
        trigger: item,
        start: "top 10%",
        // toggleActions: 'play none none reset',
      },
    });
  });

  /* Top버튼. */
  gsap.from(".btn-top", {
    autoAlpha: 0,

    scrollTrigger: {
      trigger: ".project",
      // markers: true,
      start: "top 50%",
      toggleActions: "play none reverse reverse",
    },
  });

  /* 커서 (수정해야될 것 같긴 함) */
  const $cursorTwo = $(".cursor-two");
  // const trailLength = 10;
  // const trailFadeOutTime = 1000;

  // let trailElements = [];

  // let mouseX = 0;
  // let mouseY = 0;
  const speedtwo = 0.3;

  function animateCursor(mouseX, mouseY) {
    const dx = (mouseX - $cursorTwo.offset().left) * speedtwo;
    const dy = (mouseY - $cursorTwo.offset().top) * speedtwo;

    $cursorTwo.css({
      left: $cursorTwo.offset().left + dx + "px",
      top: $cursorTwo.offset().top + dy + "px",
    });

    requestAnimationFrame(() => animateCursor(mouseX, mouseY));
  }

  $(document).on("mousemove", function (e) {
    // const $newTrailElement = $('<div class="trail"></div>').appendTo('body');
    // trailElements.push($newTrailElement);

    const mouseX = e.pageX;
    const mouseY = e.pageY;
    // $newTrailElement.css({
    //   left: mouseX + 'px',
    //   top: mouseY + 'px',
    // });

    // setTimeout(() => {
    //   $newTrailElement.css('opacity', 0);
    // }, trailFadeOutTime);

    // if (trailElements.length > trailLength) {
    //   trailElements[0].remove(); //가장 오래된 잔상 요소 삭제
    //   trailElements.shift(); // 배열에서도 삭제
    // }
    animateCursor(mouseX, mouseY);
  });
  // $cursorTwo.css('opacity', 1); // 초기에 가짜 커서는 보이도록 설정

  /* All project button으로 이동. */
  t2.addLabel("end");

  $(".logo").on("click", (e) => {
    e.preventDefault();
    const projectArea = $("#project").offset().top;
    $("html, body").stop().animate(
      {
        scrollTop: projectArea,
      },
      600
    );
  });

  /* project 이동 바로가기 버튼 로고 숨기고 보이게 */
  const $logo = $(".logo");
  const $portfolioPage = $(".portfolio-page");
  const $contact = $(".contact");

  console.log($logo, $contact, $portfolioPage);
  /* 포트폴리오페이지와 콘택트 위치잡기 */
  const portfolioPageouter =
    $portfolioPage.offset().top + $portfolioPage.outerHeight();
  const contactTop = $contact.offset().top;

  $window.on("scroll", function () {
    checkLogoVisibility();
  });

  function checkLogoVisibility() {
    const scrollTop = $window.scrollTop();

    // 로고 표시 여부
    if (scrollTop < contactTop && scrollTop < portfolioPageouter) {
      $logo.fadeIn();
    } else if (scrollTop >= contactTop) {
      $logo.fadeIn();
    } else if (scrollTop >= portfolioPageouter) {
      $logo.hide();
    }
  }

  console.log(contactTop, portfolioPageouter);
  /*   console.log('스크롤 값', scrollTopCt); */
});
