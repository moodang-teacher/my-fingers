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
    draggable: true,

    // 반응형
    responsive: [
      {
        breakpoint: 750,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 500,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  $btnNextC.on('click', function (e) {
    e.preventDefault();
    $btnNum.text('2');
  });
  $btnPrevC.on('click', function (e) {
    e.preventDefault();
    $btnNum.text('1');
  });

  // news
  const $news = $('.news');
  const $btnPrevN = $news.find('.btn-prev');
  const $btnNextN = $news.find('.btn-next');
  const $newsList = $news.find('.news-list');

  $newsList.slick({
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,

    prevArrow: $btnPrevN,
    nextArrow: $btnNextN,

    // 반응형
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 700,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  });
});
