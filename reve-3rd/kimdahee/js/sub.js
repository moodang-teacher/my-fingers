$(function () {

    var $tabMenu = $('.skill-con > ul > li > p');
    var $tabMenuLi = $('.skill-con > ul > li');
    var $tabContWrap = $('.skill-hover-wrap');
    var $tabCont =$('.skill-hover-wrap > dl');

    // 처음에 보여질 메뉴와 영역 설정
    $tabMenu.first().addClass('on');
    $tabCont.not(':first').hide();

    // 메뉴를 클릭했을 때 동작 실행
    $tabMenuLi.on('mouseenter', function() {

        // 선택한 메뉴의 순번을 tabIdx변수에 담는다

        var tabIdx = $(this).index();
        console.log(tabIdx);
        
        // 모든 on클래스 삭제 후 선택한 메뉴에 on클래스 부여
        
        $tabMenu.removeClass('on');
        $tabMenu.eq(tabIdx).addClass('on');
        
        // 모든 영역 숨긴 후 선택한 메뉴 순번과 같은 콘텐츠 영역 보이게
        $tabCont.hide();
        $tabCont.eq(tabIdx).fadeIn();

        // console.log(bgImg[1]);
    });




});

