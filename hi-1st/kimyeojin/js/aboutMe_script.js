$(function () {
  $('#fullpage').fullpage({
    loopBottom: true,
    loopTop: true,

    menu: '.indicator',
    anchors: ['sec1', 'sec2'],
  });

  const $skills = $('.skills > ul > li > figure');

  setInterval(function () {
    $skills.add('.hashtag li').toggleClass('wiggle');
  }, 1800);
});
