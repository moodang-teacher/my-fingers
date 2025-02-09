$(function () {

	$('.love-img').slick({
		//버튼 설정해주기
		prevArrow: '.love-prev',
		nextArrow: '.love-next',

		slidesToShow: 3, //한번에 보여질 슬라이드 갯수
		slidesToScroll: 1, //스크롤 되는 갯수
		// centerMode: true, // 첫번째 슬라이드를 중앙으로 배치 센터모드는 하나씩 밖에 스크롤안됨
		// centerPadding: '0', //센터 모드 일때 슬라이드 좌우 패딩값(기본50px)
	});


	$('.pofo-list').slick({
		prevArrow: '.prev',
		nextArrow: '.next',

		slidesToShow: 2, //한번에 보여질 슬라이드 갯수
		slidesToScroll: 1, //스크롤 되는 갯수

		autoplay: true, //자동재생
		autoplaySpeed: 2000, //자동재생시간
		speed: 2500, //슬라이딩되는 시간

		pauseOnDotsHover: true, //인디케이터 호버시 일시중지

		variableWidth: true,
		rtl: true,

	});

	$selctList = $('.selct-list > li');

	$selctList.on('click', function () {
		var listIdx = $(this).index();
		// console.log(listIdx);

		$selctList.removeClass('on');
		$selctList.eq(listIdx).addClass('on');
		$('.pofo-list').slick('slickGoTo', listIdx);
	});


	$('.pofo-list').on('afterChange', function (event, slick, currentSlide) {
		console.log(currentSlide);

		$selctList.removeClass('on');
		$selctList.eq(currentSlide).addClass('on');
		$('.pofo-list').slick('slickGoTo', currentSlide);
	});

});