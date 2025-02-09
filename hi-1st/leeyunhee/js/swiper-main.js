$(function () {
  var swiper = new Swiper('.mySwiper', {
    spaceBetween: 5,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper('.mySwiper2', {
    spaceBetween: 3000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: swiper,
    },
    autoplay: true,
    loop: true,
    autoplaySpeed: 0,
    speed: 2000,
  });
});
