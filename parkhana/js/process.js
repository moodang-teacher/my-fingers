$(function () {
  Splitting();
  const $win = $(window);
  const $vSec = $('.visual-process');
  const $saying = $vSec.find('.wise-saying .char');
  const $mainT = $vSec.find('h2 .char');
  const $subT = $vSec.find('h3 .char');
  const $txt = $vSec.find('p .word');
  const $card1 = $vSec.find('.card1');
  const $card2 = $vSec.find('.card2');

  const tl = gsap.timeline();

  tl.from($mainT, {
    opacity: 0,
    stagger: 0.1,
  }).from($subT, {
    opacity: 0,
    stagger: 0.1,
  });

  gsap.from($saying, { opacity: 0, stagger: 0.1 });
  gsap.from($txt, { opacity: 0, stagger: 0.2 });

  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;
  let speed = 0.009;

  $win.on('mousemove', function (e) {
    x = e.clientX;
    y = e.clientY;
  });

  function moving2() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    $card1.css({
      transform: `translate(${mx * 0.2}px,${my * 0.1}px) `,
    });
    $card2.css({
      transform: `translate(-${mx * 0.1}px,-${my * 0.1}px)`,
    });

    requestAnimationFrame(moving2);
  }
  moving2();

  //top
  const $btnTop = $('.btn-top');
  let conPos = $('#container').outerHeight();
  let scTop;

  $win.on('scroll', function () {
    scTop = $win.scrollTop();
    if (scTop >= conPos * 0.6) {
      $btnTop.addClass('on');
    } else {
      $btnTop.removeClass('on');
    }
  });
});
