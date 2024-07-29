$(function () {
  const $logo = $('.logo');
  const $nav = $('.gnb > li ');
  const $contact = $('.contact-me');
  const $contactInfo = $('.contact-me > strong');
  const $menu = $('.menu');

  //about me main
  const $title = $('.about-me .title');
  const $deco1 = $('.about-me-info > p ');
  const $subtitle = $('.about-me-info > strong');
  const $spark1 = $('.about-me > .deco-spark1');
  const $photo = $('.about-me-wrap > figure');
  const headerAni = gsap.timeline();
  const myskills = gsap.timeline();

  headerAni
    .from($logo, { opacity: 0, ease: 'linear', y: -100 })

    .from($nav, { y: -100, opacity: 0, stagger: 0.1 })
    .from($contact, { y: -100, opacity: 0 })
    .to($contactInfo, { y: 8, repeat: -1, duration: 0.8, yoyo: true })
    .from($menu, { y: -100, opacity: 0 }, '<')
    .from($title, { y: -100, x: -50, opacity: 0 })
    .from($spark1, { opacity: 0 }, '<')
    .from($subtitle, { y: -100, x: -50, opacity: 0 })
    .from($photo, { y: -100, x: 50, opacity: 0 }, '<')
    .from($deco1, { x: -200, opacity: 0 }, '<');

  Splitting();

  AOS.init({
    duration: 2000,
    easing: 'ease-in-out',
  });

  const $favoriteSlider = new Swiper('.favorite-slider', {
    slidesPerView: 5,
    spaceBetween: 40,

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.favorite-next',
      prevEl: '.favorite-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
});
