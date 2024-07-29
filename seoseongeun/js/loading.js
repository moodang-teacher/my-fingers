$(function () {
  const $win = $(window);
  const $body = $('body');
  let $loading = `<div class="loading">
  <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
</div>`;

  $body.append($loading);
  $loading = $('.loading');

  $win.on('load', function () {
    // 1초 뒤에 사라지게 setTimeout(동작,시간)
    setTimeout(function () {
      $loading.fadeOut().remove();
    }, 1000);
  });
});
