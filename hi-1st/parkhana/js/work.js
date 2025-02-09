$(function () {
  //full page
  $('#fullpage').fullpage({
    menu: '.indicator',
    anchors: ['main', 'merida', 'portfolio', 'pinkpong', 'posilak', 'micro'],

    afterLoad: function (anchorLink, index) {},
  });

  //insicator
  const $indicator = $('.indicator a');
  const $indiArr = [
    '시작',
    '메리다',
    '포트폴리오',
    '핑크퐁',
    '포시락',
    '마이크로',
  ];
  $indicator.on('mouseenter', function () {
    let iIdx = $(this).index();
    $(this).text($indiArr[iIdx]);
  });
  $indicator.on('mouseleave', function () {
    $(this).text('');
  });

  const $win = $(window);
  const $cursor2 = $('.cursor');
  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;
  let speed = 0.09;
  const $microsite = $('.microsite');
  const $menu = $microsite.find('.micro-list');
  const $movingImg = $microsite.find('.moving-img');
  //cursor
  $win.on('mousemove', function (e) {
    x = e.clientX;
    y = e.clientY;

    $cursor2.css({
      left: x,
      top: y,
    });
  });

  function moving() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    $movingImg.css({
      transform: `translate(${mx}px, ${my}px) rotate(-${my * 0.02}deg)`,
    });
    requestAnimationFrame(moving);
  }

  $menu.find('li').each(function (index, item) {
    $(item).on('mouseenter', function () {
      $movingImg.css({
        background: `url(img/work-img${index + 1}.png) no-repeat 0 0 /cover`,
        width: 510,
        height: 300,
        opacity: 1,
      });
    });
  });
  $menu.on('mouseleave', function () {
    $movingImg.css({
      background: null,
      width: 10,
      height: 10,
      opacity: 0,
    });
  });
  moving();
});
