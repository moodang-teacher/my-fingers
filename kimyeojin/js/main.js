$(function () {
  const $win = $(window);

  let $loading = $(".loading");

  $win.on("load", function () {
    setTimeout(function () {
      $loading.fadeOut();
    }, 2000);
  });

  const $underline = $(".cls-2");
  const $circleline = $(".cls-1");

  setTimeout(function () {
    $underline.addClass("on");
  }, 500);
  setTimeout(function () {
    $circleline.addClass("on");
  }, 1000);
});
