$(function () {
  /* ************************
   * about, 스와이퍼
   ************************ */
  const interviewsSwiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    autoplay: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
  });

  /* ************************
   * ABOUT, passion-for-work-con 글자 보이기
   ************************ */

  gsap.to('#passion-for-work', {
    scrollTrigger: {
      trigger: '#passion-for-work',
      pin: true,
      start: 'top 0%',
      end: 'bottom 0%',
      // markers: true,
    },
  });

  const textElements = gsap.utils.toArray('.text');
  textElements.forEach((text) => {
    gsap.to(text, {
      backgroundSize: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: text,
        start: 'top 50%',
        end: 'bottom 0%',
        scrub: 1,
        // markers: true,
      },
    });
  });

  //  글자보이기, 순차 적용 시도
  // for (var i = 0; i < textElements.length; i++) {
  //   let text = textElements[i];
  //   let delay = i * 2000;
  //   setTimeout(() => textChange(text), delay);
  // }

  // function textChange(text) {
  //   gsap.to(text, {
  //     backgroundSize: '100%',
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: text,
  //       start: 'top 50%',
  //       end: 'bottom 0%',
  //       scrub: 1,
  //       markers: true,
  //     },
  //   });
  // }
});
