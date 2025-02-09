$(function () {
  const $btnSkip = $('.btn-skip');

  $btnSkip.on('click', function () {
    skip();

    $('.About-Me').addClass('on');
    $('.Web').addClass('on');
    $('.Design').addClass('on');
    $('.Contact-Me').addClass('on');
  });

  // $btnSkip.on('click', function () {
  //   skip();
  //   $('.About-Me').css({
  //     animation: 'About-Me 0.8s both',
  //   });
  //   $('.Web').css({
  //     animation: 'Web 0.8s both',
  //   });
  //   $('.Design').css({
  //     animation: 'Design 0.8s both',
  //   });
  //   $('.Contact-Me').css({
  //     animation: 'Contact-Me 0.8s both',
  //   });
  // });

  Splitting();
  $('.video-wrap video').on('ended', function () {
    skip();
  });

  function skip() {
    $('.video-wrap').fadeOut();
    $('h1').addClass('main-title');
    $btnSkip.fadeOut();
  }

  // 마우스 효과
  const AboutMe = $('.About-Me');
  const Web = $('.Web');
  const Design = $('.Design');
  const ContactMe = $('.Contact-Me');
  const face1 = $('.face1');
  const face2 = $('.face2');
  const face3 = $('.face3');
  const face4 = $('.face4');

  // face1
  AboutMe.on('mouseenter', function () {
    face1.addClass('left');
  });
  AboutMe.on('mouseleave', function () {
    face1.removeClass('left');
  });
  Web.on('mouseenter', function () {
    face1.addClass('up');
  });
  Web.on('mouseleave', function () {
    face1.removeClass('up');
  });

  // face2
  AboutMe.on('mouseenter', function () {
    face2.addClass('right');
  });
  AboutMe.on('mouseleave', function () {
    face2.removeClass('right');
  });
  Design.on('mouseenter', function () {
    face2.addClass('up');
  });
  Design.on('mouseleave', function () {
    face2.removeClass('up');
  });

  // face3
  Web.on('mouseenter', function () {
    face3.addClass('down');
  });
  Web.on('mouseleave', function () {
    face3.removeClass('down');
  });
  ContactMe.on('mouseenter', function () {
    face3.addClass('left');
  });
  ContactMe.on('mouseleave', function () {
    face3.removeClass('left');
  });

  // face4
  Design.on('mouseenter', function () {
    face4.addClass('down');
  });
  Design.on('mouseleave', function () {
    face4.removeClass('down');
  });
  ContactMe.on('mouseenter', function () {
    face4.addClass('right');
  });
  ContactMe.on('mouseleave', function () {
    face4.removeClass('right');
  });
});
