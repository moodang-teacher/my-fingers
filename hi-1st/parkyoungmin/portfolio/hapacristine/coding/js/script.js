$(function () {
  const $win = $(window);
  const $header = $("#header");
  const $subHeader = $("#sub-header");
  const $menu = $(".gnb > li");
  const $submenu = $(".submenu");
  const duration = 300;

  $menu.on("mouseenter", function () {
    $header.addClass("active");
    $subHeader.addClass("active");
    $(this).find($submenu).stop().slideDown(duration);
  });
  $menu.on("mouseleave", function () {
    $header.removeClass("active");
    $subHeader.removeClass("active");
    $submenu.stop().slideUp(duration);
  });

  $win.on("wheel", function (e) {
    if (e.originalEvent.wheelDelta > 0) {
      $header.removeClass("hide");
      $subHeader.removeClass("hide");
      $header.removeClass("on");
    } else {
      $header.addClass("hide");
      $subHeader.addClass("hide");
      $header.addClass("on");
    }
  });

  const visualSlider = new Swiper(".visual-slider", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".visual-swiper-btn-next",
      prevEl: ".visual-swiper-btn-prev",
      clickable: true,
    },
    pagination: {
      el: ".swiper-scrollbar",
      type: "progressbar",
    },
  });

  const newListSlider = new Swiper(".new-list-slider", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    spaceBetween: 30,

    navigation: {
      nextEl: ".new-list-swiper-btn-next",
      prevEl: ".new-list-swiper-btn-prev",
      clickable: true,
    },

    pagination: {
      el: ".swiper-pagination-list",
      clickable: true,
    },
  });

  const bestListSlider = new Swiper(".best-list-slider", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    spaceBetween: 30,

    navigation: {
      nextEl: ".best-list-swiper-btn-next",
      prevEl: ".best-list-swiper-btn-prev",
      clickable: true,
    },

    pagination: {
      el: ".swiper-pagination-list",
      clickable: true,
    },
  });

  const brandCardSlider = new Swiper(".brand-card-slider", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    grabCursor: true,
    centerInsufficientSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });

  // const marqueeTopSlider = new Swiper('.marquee-top-insta-wrap', {
  //   autoplay: {
  //     delay: 0,
  //   },
  //   speed: 3000,
  //   loop: true,
  //   loopAdditionalSlides: 1,
  //   slidesPerView: 'auto',
  //   spaceBetween: 10,
  // });
  // const marqueebottomSlider = new Swiper('.marquee-bottom-insta-wrap', {
  //   autoplay: {
  //     reverseDirection: true,
  //     delay: 0,
  //   },
  //   speed: 3000,
  //   loop: true,
  //   loopAdditionalSlides: 1,
  //   slidesPerView: 'auto',
  //   spaceBetween: 10,
  // });

  $(".marquee-top-wrap").slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    slidesToShow: 5,
  });

  $(".marquee-bottom-wrap").slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    slidesToShow: 5,
    rtl: true,
  });

  // top
  const $btnTop = $(".top");
  let conPos = $("#container").outerHeight();
  let scTop;

  $win.on("scroll", function () {
    scTop = $win.scrollTop();
    if (scTop >= conPos * 0.4) {
      $btnTop.addClass("on");
    } else {
      $btnTop.removeClass("on");
    }
  });
});
