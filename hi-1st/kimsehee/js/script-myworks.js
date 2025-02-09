$(function () {
  AOS.init();

  const $logo = $('.logo');
  const $nav = $('.gnb > li ');
  const $contact = $('.contact-me');
  const $contactInfo = $('.contact-me > strong');
  const $menu = $('.menu');

  const headerAni = gsap.timeline();

  headerAni
    .from($logo, { opacity: 0, ease: 'linear', y: -100 })

    .from($nav, { y: -100, opacity: 0, stagger: 0.1 })
    .from($contact, { y: -100, opacity: 0 })
    .to($contactInfo, { y: 8, repeat: -1, duration: 0.8, yoyo: true })
    .from($menu, { y: -100, opacity: 0 }, '<');

  const $win = $(window);
  const $header = $('#header');

  $win.on('wheel', function (e) {
    // console.log(e);

    if (e.originalEvent.wheelDelta > 0) {
      console.log('휠 올림');
      $header.removeClass('hide');
    } else {
      //마우스 휠을 내렸을 때
      console.log('휠 내림');
      $header.addClass('hide');
    }
  });

  $('.mywork').ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
  });
});
