// pc
$(function () {
  // 자주 사용할 대상을 변수에 저장
  const $win = $(window);
  const $header = $('header');
  const $gnb = $('.gnb');
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const duration = 300;

  $submenu.hide();

  $gnb.on('mouseenter', 'li', function () {
    $header.addClass('active');
    $(this).addClass('on');
    $(this).find($submenu).stop().slideDown(duration);
  });

  $gnb.on('mouseleave', 'li', function () {
    $header.removeClass('active');
    $menu.removeClass('on');
    $submenu.stop().slideUp(duration);
  });

  // 마우스 휠을 움직일 때
  $win.on('wheel', function (e) {
    // console.log(e);

    if (e.originalEvent.wheelDelta > 0) {
      // 마우스 휠을 올렸을 때
      console.log('휠 올림');
      $header.removeClass('hide');
    } else {
      // 마우스 휠을 내렸을 때
      console.log('휠 내림');
      $header.addClass('hide');
    }
  });
});

// tablet
$(function () {
  // 대상을 변수로 저장
  const $btnMenu = $('.btn_menu');
  const $menu01 = $('.menu_wrap');
  const $menu = $('.lnb_list_TA');
  const $dim = $('.lnb_bg');
  let isAct = false; /* 아직 활성화 되지 않음 */

  $menu01.hide();
  // 햄버거 버튼을 클릭했을 때
  // $btnMenu.on('click', function () {})
  $btnMenu.on('click', function (e) {
    e.preventDefault();
    $menu01.show();

    // 3. 조건을 따져서 창을 열고/닫는다.
    if (isAct === false) {
      // $menu를 열어주기
      openMenu();
    } else {
      // $menu를 닫아주기
      closeMenu();
    }
  });

  // $dim을 클릭해도 창이 닫히게
  $dim.on('click', closeMenu);

  // $menu를 열어주기
  function openMenu() {
    $btnMenu.addClass('active');
    slideMenu(0);
    isAct = true;
    $dim.fadeIn();
  }

  // $menu를 닫아주기
  function closeMenu() {
    $btnMenu.removeClass('active');
    slideMenu('-100%');
    isAct = false;
    $dim.fadeOut();

    // 서브 메뉴 초기화
    $menuList.removeClass('on');
    $subMenu.slideUp();
  }

  // 메뉴를 보이게하는 동작
  function slideMenu(pos) {
    // alert('슬라이딩!');
    $menu.animate(
      {
        left: pos,
      },
      350
    );
  }
});
