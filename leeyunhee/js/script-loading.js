$(function () {
  const $win = $(window);
  const $body = $('body');

  let $loading = `<div class="loading">
    <div class="ring">Loading
    <span></span>
    </div>
  </div>`;

  $body.append($loading);
  console.log($body);
  $loading = $('.loading');

  $win.on('load', function () {
    // setTimeout(동작, 시간);
    setTimeout(function () {
      $loading.fadeOut().remove();
    }, 100);
  });
});
