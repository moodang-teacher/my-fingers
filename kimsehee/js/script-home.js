$(function () {
  //loading-welcome
  $(window).on("load", function () {
    setTimeout(function () {
      $(".wc-wrap").fadeOut();
    }, 6000);
  });

  //물요소
  const $window = $(window);
  const $decoWrap = $(".deco-wrap");
  const $deco2 = $decoWrap.find(".deco2");
  const $deco3 = $decoWrap.find(".deco3");
  const $deco4 = $decoWrap.find(".deco4");
  const $deco5 = $decoWrap.find(".deco5");
  const $deco6 = $decoWrap.find(".deco6");

  //물방울
  const $bubbleWrap = $(".bubble-wrap");
  const $bubble1 = $bubbleWrap.find(".deco-bubble1");
  const $bubble2 = $bubbleWrap.find(".deco-bubble2");
  const $bubble3 = $bubbleWrap.find(".deco-bubble3");
  const $bubble4 = $bubbleWrap.find(".deco-bubble4");

  //스파크
  const $spark1 = $(".deco-spark1");
  const $spark2 = $(".deco-spark2");

  //header
  const $logo = $(".logo");
  const $nav = $(".gnb > li ");
  const $contact = $(".contact-me");
  const $contactInfo = $(".contact-me > strong");
  const $menu = $(".menu");
  //제목
  const $sTypo = $(".main-typo1 strong");
  const $container = $("#container");

  const headerAni = gsap.timeline();

  headerAni
    .from($logo, { opacity: 0, ease: "linear", y: -100, delay: 6 })

    .from($nav, { y: -100, opacity: 0, stagger: 0.1 })
    .from($contact, { y: -100, opacity: 0 })
    .to($contactInfo, { y: 8, repeat: -1, duration: 0.8, yoyo: true })
    .from($menu, { y: -100, opacity: 0 }, "<")
    .from($container, { opacity: 0, duration: 3 })
    .from($sTypo, { opacity: 0, duration: 2 })
    .from($spark1, { opacity: 0, duration: 2 })
    .from($spark2, { opacity: 0, duration: 2 });

  let x = 0;
  let y = 0;

  let mx = 0;
  let my = 0;

  let speed = 0.0007;

  let aniMovingDeco;

  initMoving();

  function getOffset() {
    $window.on("mousemove", function (e) {
      x = e.clientX - $window.outerWidth() / 2;
      y = e.clientY - $window.outerHeight() / 2;
      console.log(x, y);
    });
  }

  function movingDeco() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;
    $deco2.css({
      transform: `translate(${-mx * 0.5}px)`,
    });

    $deco3.css({
      transform: `translate(${-mx}px, ${my}px) rotate(${mx}deg)`,
    });
    $deco4.css({
      transform: `translate(${mx}px, ${my}px) rotate(${mx}deg)`,
    });
    $deco5.css({
      transform: `translate(${-mx * 0.3}px, ${-my}px) rotate(${-mx}deg)`,
    });
    $deco6.css({
      transform: `translate(${-mx * 0.1}px, ${my}px) rotate(${mx}deg)`,
    });

    $bubble1.css({
      transform: `translate(${mx * 0.5}px, ${my * 0.5}px) rotate(${mx}deg)`,
    });
    $bubble2.css({
      transform: `translate(${mx * 0.2}px, ${my * 0.3}px) rotate(${
        -mx * 0.3
      }deg)`,
    });
    $bubble3.css({
      transform: `translate(${-mx * 0.5}px, ${my * 0.5}px) rotate(${
        -mx * 0.1
      }deg)`,
    });
    $bubble4.css({
      transform: `translate(${-mx * 0.4}px, ${my * 0.5}px) rotate(${mx}deg)`,
    });

    aniMovingDeco = requestAnimationFrame(movingDeco);
  }

  function initMoving() {
    getOffset();
    movingDeco();
  }
  Splitting();
});
