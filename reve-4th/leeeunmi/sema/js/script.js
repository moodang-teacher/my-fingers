$(function () {
	$('.visual-list').slick({
		prevArrow: '.btn-prev',
		nextArrow: '.btn-next',
		// arrows:false, 제어버튼작동금지 (드래그로 동작)

		autoplay: true, //자동재생
		autoplaySpeed: 2000, //자동재생시간
		speed: 1000, //슬라이딩되는 시간

		pauseOnDotsHover: true, //인디케이터 호버시 일시중지

		// fade:true,//페이드인 효과
		// vertical:true,//상하슬라이드



	});

	//초기화
	var slideLength = $('slide-item').not('slick-cloned').length;
	var batWidth = 1 / slideLength * 100;



});