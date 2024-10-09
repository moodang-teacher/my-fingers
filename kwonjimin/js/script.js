$(function () {
  gsap.registerPlugin(ScrollTrigger);

  /* ************************
   * 헤더 설정
   ************************ */
  const $header = $("#header");
  const $window = $(window);

  $window.on("wheel", function (e) {
    if (e.originalEvent.wheelDelta > 0) {
      $header.removeClass("hide");
    } else {
      $header.addClass("hide");
      $contactCon.removeClass("active");
      isActive = false;
    }
  });

  // contact창 동작
  const $btContac = $(".btn-contact");
  const $contactCon = $(".contact-con");

  let isActive = false;

  $btContac.on("click", function (e) {
    e.preventDefault();
    if (isActive === false) {
      $contactCon.addClass("active");
      isActive = true;
    } else {
      $contactCon.removeClass("active");
      isActive = false;
    }
  });

  // 복제버튼 작동
  // clipboard.js사용, 주소 : https://clipboardjs.com/

  // new ClipboardJS(".btn-copy");
  var clipboard = new ClipboardJS(".btn-copy");

  // 복제성공
  clipboard.on("success", function (e) {
    e.trigger.classList.add("success");

    setTimeout(function () {
      e.trigger.classList.remove("success");
    }, 1700);

    // 사용자가 텍스트를 복사한 후에 복사된 텍스트가 선택된 상태로 남아있지 않도록 만들어줍니다.
    e.clearSelection();
  });

  // 복제실패
  clipboard.on("error", function (e) {
    e.trigger.classList.add("error");

    setTimeout(function () {
      e.trigger.classList.remove("error");
    }, 1700);
  });

  /* ************************
   * go-top, 상단이동버튼
   ************************ */
  const $btnTop = $(".go-top");
  // 작동
  $btnTop.on("click", function (e) {
    e.preventDefault();
    $("html,body").stop().animate({
      scrollTop: 0,
    });
    $header.removeClass("hide");
  });

  // 평소에 숨기다가
  $btnTop.hide();

  //중간 지나야 보여지기
  let targetPos = $window.outerHeight();
  $window.on("scroll", function () {
    let scrollTop = $(this).scrollTop();
    // console.log(targetPos, scrollTop);

    if (scrollTop >= targetPos) {
      $btnTop.fadeIn();
    } else {
      $btnTop.fadeOut();
    }
  });

  /* ************************
   * Portfolio, 탭메뉴
   ************************ */
  const $tabMenu = $(".tab-menu > li");
  const $tabcontent = $(".tab-con");

  // 초기 세팅
  tabAction(0);

  // 탭메뉴를 클릭했을 때
  $tabMenu.on("click", function () {
    let idx = $(this).index();

    tabAction(idx);
  });

  // 함수 정의
  function tabAction(index) {
    $tabMenu.removeClass("on");
    $tabMenu.eq(index).addClass("on");

    // $tabcontent.hide();
    $tabcontent.addClass("hide");
    $tabcontent.eq(index).removeClass("hide");
  }

  /* ************************
   * Portfolio, 팝업창 + 웹이동
   ************************ */
  const $dim = $(".dim");
  const $popup = $(".popup");
  const $galleryContent = $(".gallery-content");
  const $btnClose = $(".btn-close");
  const $viewBtn = $(".tab-con .more-btn.view-btn"); /* 그래픽작업물 버튼 */
  const $processBtn = $(".tab-con .more-btn.process-btn"); /* 프로세스작업물 버튼 */
  const $designBtn = $(".tab-con .more-btn.design-btn"); /* 디자인작업물 버튼 */

  function showPopup() {
    $header.css("z-index", 1);

    $dim.fadeIn();
    $popup.addClass("active");
  }

  function hidePopup() {
    $dim.fadeOut();
    $popup.removeClass("active");

    // $galleryContent 초기화
    $galleryContent.html("");
    $popup.css("width", "");
  }

  // $viewBtn ,$processBtn 누르면 팝업열기
  $viewBtn.on("click", function () {
    showPopup();

    // 부모 중 .item-graphic를 찾아서 자식인 figure img에 접근
    const $target = $(this).closest(".item-graphic").find("figure img");
    const imgSrc = $target.attr("src");

    $galleryContent.html(`<img src="${imgSrc}">`);
  });
  $processBtn.on("click", function () {
    showPopup();

    // 부모 중 .item-project를 찾아서 자식인 figure img에 접근
    const $target = $(this).closest(".item-project").find("figure img");
    const imgSrc = $target.data("prosess");

    $galleryContent.html(`<img src="${imgSrc}">`);
  });

  // $btnClose, $dim 누르면 팝업닫기
  $btnClose.on("click", hidePopup);
  $dim.on("click", hidePopup);

  // $designBtn 누르면 웹이동
  $designBtn.on("click", function () {
    const webLink = $(this).data("link");
    console.log($(this).data("link"));

    window.open(webLink, "_blank");
  });

  /* ************************
   * about, 스와이퍼
   ************************ */
  const interviewsSwiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "vertical",
    autoplay: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
  });
});
