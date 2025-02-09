$(function () {
  const $body = $('body');
  const $toggle = $('#mode');

  // 로컬스토리지의 colorMode 값이 dark인지 비교
  // 저장된 colorMode값을 변수에 담고
  const colorMode = localStorage.getItem('colorMode');
  // console.log(colorMode);

  // 다크모드가 선택되었다면 body에 클래스 부여, 아니면 삭제
  if (colorMode === 'light') {
    $body.addClass('light-mode');
    // $toggle.next('label').text('LIGHT');
    $toggle.prop('checked', true);
  } else {
    $body.removeClass('light-mode');
    // $toggle.next('label').text('DARK');
    $toggle.prop('checked', false);
  }

  // 체크박스를 클릭했을 때
  $toggle.on('click', function () {
    if ($body.hasClass('light-mode')) {
      // 로컬스토리지에 light값을 저장
      localStorage.setItem('colorMode', 'dark');

      // 만약에 body에 dark-mode클래스가 있다면
      $body.removeClass('light-mode');

      // 라벨의 텍스트 변경
      // $toggle.next('label').text('DARK');

      // 체크박스에 cheked 속성제거
      $toggle.prop('checked', false);
    } else {
      // 만약에 body에 dark-mode클래스가 없으면

      // 로컬스토리지에 dark값을 저장
      localStorage.setItem('colorMode', 'light');
      // body에 클레스 부여
      $body.addClass('light-mode');

      // 라벨의 텍스트 변경
      // $toggle.next('label').text('LIGHT');

      // 체크박스에 cheked 속성부여
      $toggle.prop('checked', true);
    }
  });
});
