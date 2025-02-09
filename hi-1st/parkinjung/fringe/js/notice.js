$(function () {
  // 대상을 변수에 저장
  const $body = $('body');
  const $tabMenu = $('.tab_tit_list li');
  const $tabContent = $('.tab_ctn_box');
  const $infoTab = $('.info_tab_cont');

  $tabMenu.on('click', function (e) {
    e.preventDefault();

    tIdx = $(this).index();
    tabAction(tIdx);
  });

  // function tabAction(index) {
  //   // 메서드 체인
  //   $tabMenu.removeClass('on').eq(index).addClass('on');
  //   $tabContent.hide().eq(index).show();
  // }

  function tabAction(index) {
    var windowWidth = $(window).width();
    if (windowWidth < 1200) {
      //창 가로 크기가 1200 미만일 경우
      // $tabMenu.eq(index).removeClass();
      $tabContent.show();
    } else {
      //창 가로 크기가 1200보다 클 경우
      $tabMenu.removeClass('on').eq(index).addClass('on');
      $tabContent.hide().eq(index).show();
    }
  }
});
