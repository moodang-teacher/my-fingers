$(function () {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,

    // 인디케이터
    dots: true,
    dotsClass: 'sild_dot',
    customPaging: function (slick, index) {
      // console.log(slick, index);
      return `<span>${index}</span>`;
    }, //매서드

    // preview, next 버튼
    prevArrow: '.sild_contents .btn-prev',
    nextArrow: '.sild_contents .btn-next',
  });

  $('.ins_ctns_box').slick({
    prevArrow: '.contents_arrow .cnt_prev',
    nextArrow: '.contents_arrow .cnt_next',
  });

  $('.you_ctns_box').slick({
    prevArrow: '.you_contents_arrow .cnt_prev',
    nextArrow: '.you_contents_arrow .cnt_next',
  });

  $('.program_indt_list').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    prevArrow: '.sec_slide_arrow .sec_slide_prev',
    nextArrow: '.sec_slide_arrow .sec_slide_next',
  });

  $('.pogram_tamo').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    prevArrow: '.program_tab_mob > .sec_slide_prev',
    nextArrow: '.program_tab_mob > .sec_slide_next',
  });
});

$(function () {
  var ww = $(window).width();
  var mySwiper = undefined;

  function initSwiper() {
    if (ww <= 3000 && mySwiper == undefined) {
      mySwiper = new Swiper('.mySwiper', {
        slidesPerView: 'auto',
        simulateTouch: true,
        loop: true,

        navigation: {
          // 버튼
          nextEl: '.festival_tab  .sec_slide_next',
          prevEl: '.festival_tab  .sec_slide_prev',
        },
      });
    } else if (ww <= 1200 && mySwiper != undefined) {
      mySwiper.destroy();
      mySwiper = undefined;
    } else if (ww <= 550 && mySwiper != undefined) {
      mySwiper.destroy();
      mySwiper = undefined;
    }
  }

  initSwiper();

  $(window).on('resize', function () {
    ww = $(window).width();
    initSwiper();
  });
});
