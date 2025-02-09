$(function () {
  $(".slide").slick({
    autoplay: true,
    // autoplaySpeed: 2000,
    dots: true,
    dotsClass: "paging",
    customPaging: function (slick, index) {
      // console.log(slick, index);
      return `<span>${index}</span>`;
    },
    prevArrow: ".visual .btn.btn-prev",
    nextArrow: ".visual .btn.btn-next",
  });

  const $newsList = $(".news-list");
  $newsList.slick({
    // autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
  });
  const $activityList = $(".activity-list");
  $activityList.slick({
    // autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
  });
});
