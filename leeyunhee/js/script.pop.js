$(function () {
  const $gallery = $('.edit-list > div');
  const $dim = $('.dim');
  const $popup = $('.popup');
  const $galleryContent = $('.edit-con');
  const $btnClose = $('.btn-close');
  const duration = 350;

  // 갤러리를 클릭했을 때
  $gallery.on('click', function () {
    $dim.fadeIn(duration);
    $popup.addClass('active');

    // // console.log($(this).find('img'));
    const $target = $(this).find('img');
    // console.log($target);

    const imgSrc = $target.attr('src');
    const videoSrc = $target.data('link');
    console.log(imgSrc, videoSrc);

    // 상황에 맞게 삽입
    if (videoSrc) {
      // 클릭한 요소의 동영상 정보를 받아서
      $galleryContent.html(
        `<iframe src="${videoSrc}?autoplay=1" allow="autoplay">`
      );
    } else {
      // 클릭한 요소의 이미지를 선택 $galleryContent에 삽입
      $galleryContent.html(`<img src="${imgSrc}">`);
      $popup.css('width', $(window).outerWidth() / 3);
    }

    // $galleryContent.text(imgTitle);
    // $galleryContent.prepend(imgTitle) //텍스트 정보만 가져온다
    $galleryContent.prepend(`<div class="gallery-title">${imgTitle}<div>`);
  });

  // 닫기 버튼을 클릭했을 때
  $btnClose.on('click', function () {
    $popup.removeClass('active');
    $popup.css('width', '');

    // $dim을 안보이게
    $dim.fadeOut(duration);

    // 0.5초 후에 팝업창이 사라지게
    setTimeout(function () {
      $galleryContent.html('');
    }, 500); // 0.5초
  });

  // $btnClose을 클릭했을 때 팝업창 닫기
  $btnClose.on('click', function () {
    // 추가 코드가 필요할 때
    closePopup();
  });

  $dim.on('click', closePopup);

  // 공통의 동작을 함수로 정의
  function closePopup() {
    $popup.removeClass('active');
    $dim.fadeOut();
  }
});
