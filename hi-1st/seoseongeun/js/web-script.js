$(function () {
  $('.slider').slick({
    // autoplay: true,
    // autoplaySpeed: 3000,

    // vertical: true,
    fade: true,
    asNavFor: $('.slider2'),

    // preview, next 버튼
    prevArrow: '.slider-wrap .btn.btn-prev',
    nextArrow: '.slider-wrap .btn.btn-next',
  });

  // 두번째 슬라이더
  const $slider2 = $('.slider2');
  $slider2.slick({
    // autoplay: true,
    // autoplaySpeed: 0,
    // speed: 3000,
    // cssEase: 'linear',

    // 보여줄 슬라이드 아이템 수
    // slidesToScroll: 1,
    // slidesToShow: 1.5,

    asNavFor: $('.slider'),

    prevArrow: '.slider-wrap2 .btn.btn-prev',
    nextArrow: '.slider-wrap2 .btn.btn-next',

    // 인디케이터
    dots: true,
    dotsClass: 'paging2',
    customPaging: function (slick, index) {
      // console.log(slick, index);
      return `<span>${index}</span>`;
    },
  });
});
