$(function () {
  // 탑버튼
  const $win = $(window);
  let conPos = $('#container').outerHeight();
  let scTop;
  const btnTop = $('.btn-top');

  $win.on('scroll', function () {
    scTop = $win.scrollTop();

    if (scTop >= conPos * 0.4) {
      btnTop.addClass('action');
    } else {
      btnTop.removeClass('action');
    }
  });

  // 메뉴버튼
  const $btnMenu = $('.btn-menu');
  const $menu = $('.menu-list');
  const $btnClose = $('.btn-close');

  $btnMenu.on('click', function () {
    console.log('$btnMenu');
    tAction($btnClose, $menu);
  });
  $btnClose.on('click', function () {
    tAction($menu, $btnClose);
  });

  //공통함수
  function tAction(a, b) {
    a.add(b).stop().toggleClass('action');
  }

  //main-category
  const $category = $('.category');
  const $btnNum = $category.find('.btn-num');
  const $btnPrevC = $category.find('.btn-prev');
  const $btnNextC = $category.find('.btn-next');
  const $catList = $category.find('.category-list');

  $catList.slick({
    autoplay: true,
    slidesToShow: 4,
    autoplaySpeed: 2000,
    prevArrow: $btnPrevC,
    nextArrow: $btnNextC,
  });

  $btnNextC.on('click', function (e) {
    e.preventDefault();
    $btnNum.text('2');
  });
  $btnPrevC.on('click', function (e) {
    e.preventDefault();
    $btnNum.text('1');
  });

  //sub-breadCrupms
  const $body = $('body');
  const $breadCrumbs = $('.breadcrumbs');
  const $depth = $breadCrumbs.find('.depth');
  const $depthList = $breadCrumbs.find('.depth-list');

  $depth.on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (!$(this).hasClass('on')) {
      hide();
      $(this).addClass('on');
      $(this).find($depthList).stop().slideDown();
    } else {
      hide();
    }
  });

  $body.on('click', hide);

  //공동함수
  function hide() {
    $depth.removeClass('on');
    $depthList.stop().slideUp();
  }

  //sub-image
  const $brandImg = $('.brandnew-con figure');
  const $trailImg1 = $('.trail .trail-main figure');
  const $trailImg2 = $('.trail .trail-title figure');
  const $desingImg1 = $('.design-main figure');
  const $desingImg2 = $('.design-title figure');
  const $table = $('.ep8-table li');
  let scPos;
  $win.on('scroll', function () {
    addClass($brandImg);
    addClass($trailImg1);
    addClass($trailImg2);
    addClass($desingImg1);
    addClass($desingImg2);

    let $tablePos = $('.ep8').offset().top;
    if (scTop >= $tablePos - 400) {
      $table.addClass('on');
    } else {
      $table.removeClass('on');
    }
  });

  // 공동함수;
  function addClass(x) {
    scTop = $win.scrollTop();
    scPos = x.offset().top - 400;
    if (scTop >= scPos) {
      x.addClass('on');
    } else {
      x.removeClass('on');
    }
  }

  //sub-components
  const $components = $('.components');
  const $btnNumS = $components.find('.btn-num');
  const $btnPrevS = $components.find('.btn-prev');
  const $btnNextS = $components.find('.btn-next');
  const $comList = $components.find('.components-list');
  const $comCard = $comList.find('li');
  const $bike = $components.find('.components-title>figure');

  // slick
  $comList.slick({
    autoplay: true,
    slidesToShow: 4,
    prevArrow: $btnPrevS,
    nextArrow: $btnNextS,
    draggable: true,
    // centerMode: true,
    // centerPadding: '0.5rem',

    // 반응형
    responsive: [
      {
        breakpoint: 1800,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },

      {
        breakpoint: 900,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 620,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  });

  $btnNextS.on('click', function (e) {
    e.preventDefault();
    $btnNumS.text('2');
  });

  $btnPrevS.on('click', function (e) {
    e.preventDefault();
    $btnNumS.text('1');
  });

  // point 부분
  const cssArr = [
    { top: '20%', left: '52.0833%' },
    { top: '0', left: '55.7291%' },
    { top: '55%', left: '23.9583%' },
    { top: '70%', left: '23.9583%' },
    { top: '20%', left: '52.0833%' },
    { top: '0', left: '55.7291%' },
    { top: '0', left: '33.3333%' },
    { top: '0', left: '55.7291%' },
    { top: '0', left: '33.3333%' },
  ];
  $comCard.on('mouseenter', function () {
    let idx = $(this).index();
    $bike.find('.pointer').css(cssArr[idx]);
  });
});
