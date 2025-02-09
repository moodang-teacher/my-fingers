$(function () {
  const $window = $(window);
  const $header = $('#header');
  const $indicator = $('.indicator > a');
  const $section = $('#container > section > .visual-wrap');
  const secLength = $section.length - 1;

  let secIdx = 0;

  moveSection(secIdx);

  function moveSection(index) {
    let posTop = index * $window.outerHeight();

    $('html, body').stop().animate(
      {
        scrollTop: posTop,
      },
      500
    );
    updateHeart(secIdx);

    console.log($section);
    console.log(secIdx);
    $section.removeClass('on').eq(secIdx).addClass('on');
  }

  $indicator.on('click', function (e) {
    e.preventDefault();

    secIdx = $(this).index();
    moveSection(secIdx);
  });

  function updateHeart(index) {
    $indicator.removeClass('on').eq(index).addClass('on');
  }

  $window.on('wheel keydown', function (e) {
    // console.log(e);
    if ($('html, body').is(':animated')) return;

    if (e.originalEvent.deltaY < 0 || e.originalEvent.keyCode === 38) {
      if (secIdx === 0) return;
      secIdx--;
    } else if (e.originalEvent.deltaY > 0 || e.originalEvent.keyCode === 40) {
      if (secIdx === secLength) return;
      secIdx++;
    }
    moveSection(secIdx);
  });
});
