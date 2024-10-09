$(function () {
  const $window = $(window);
  const $body = $('body');
  const $slider = $('.slider');
  const $slideIdx = $('.portfolio-text-wrap > li');
  const slideIdxLength = $slideIdx.length - 1;
  let slideNo = 0;

  $slider.slick({
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    vertical: true,
  });

  let timeout;
  $window.on('wheel keydown', function (e) {
    // console.log(e);

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (e.originalEvent.deltaY < 0) {
        // 올린 경우 (deltaY 음수)
        $slider.slick('slickPrev');

        if (slideNo === 0) {
          slideNo = slideIdxLength;
        } else {
          slideNo--;
        }
      } else if (e.originalEvent.deltaY > 0) {
        // 내린 경우 (deltaY 양수)
        $slider.slick('slickNext');

        if (slideNo === slideIdxLength) {
          slideNo = 0;
        } else {
          slideNo++;
        }
      }
      // console.log(slideNo);
      $slideIdx.removeClass('on');
      $slideIdx.eq(slideNo).addClass('on');
    }, 500);
  });

  $slideIdx.on('click', function () {
    slideNo = $(this).index();
    $slideIdx.removeClass('on');
    $slideIdx.eq(slideNo).addClass('on');

    $slider.slick('slickGoTo', slideNo);
  });

  // contact ani
  const contactAni = gsap.timeline();

  contactAni
    .from('.contact-card', { bottom: 268, duration: 1, autoAlpha: 0 })
    .from('.flower-deco', { x: 700, duration: 1, rotation: 40 });

  // dark mode
  const $toggle = $('#mode');
  const $changeBtn = $('.pistol > a');
  const $video = $('.smoke-video > video');
  const colorMode = localStorage.getItem('colorMode');

  if (colorMode === 'dark') {
    setDark();
  } else {
    setLight();
  }

  $toggle.on('click', function () {
    changeMode();
  });

  $changeBtn.on('click', function () {
    $('.smoke-video').show();
    $video.get(0).play();
    $video.on('ended', function () {
      changeMode();
      $('.smoke-video').fadeOut(400);
    });
  });

  function changeMode() {
    if ($body.hasClass('dark-mode')) {
      localStorage.setItem('colorMode', 'light');
      setLight();
    } else {
      localStorage.setItem('colorMode', 'dark');
      setDark();
    }
  }

  function setDark() {
    $body.addClass('dark-mode');
    $toggle.prop('checked', true);
  }

  function setLight() {
    $body.removeClass('dark-mode');
    $toggle.prop('checked', false);
  }

  // cursor-bg
  const $cursorBg = $('.cursor-bg');

  let mouseX = 0;
  let mouseY = 0;

  $window.on('mousemove', function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;

    $cursorBg.css({
      left: mouseX,
      top: mouseY,
    });
  });
});
