$(function () {



	$('.visual-list').slick({
		//버튼 설정해주기
		prevArrow: '.btn-prev',
		nextArrow: '.btn-next',

		slidesToShow: 4, //한번에 보여질 슬라이드 갯수
		slidesToScroll: 1, //스크롤 되는 갯수
		// centerMode: true, // 첫번째 슬라이드를 중앙으로 배치 센터모드는 하나씩 밖에 스크롤안됨
		// centerPadding: '0', //센터 모드 일때 슬라이드 좌우 패딩값(기본50px)
		variableWidth: true,

		responsive: [{

			breakpoint: 1024,
			settings: {
				variableWidth: false,
				slidesToShow: 3,
				slidesToScroll: 1
			}

		}, {

			breakpoint: 800,
			settings: {
				variableWidth: false,
				slidesToShow: 2,
				dots: true
			}

		}, {

			breakpoint: 420,
			settings: {
				variableWidth: false,
				slidesToShow: 1,
				dots: false,
				Arrows: false,
				centerMode: true,
			}

		}]
	});


	$('.best-list').slick({
		//버튼 설정해주기
		prevArrow: '.best-prev',
		nextArrow: '.best-next',

		slidesToShow: 3, //한번에 보여질 슬라이드 갯수
		slidesToScroll: 1, //스크롤 되는 갯수
		// centerMode: true, // 첫번째 슬라이드를 중앙으로 배치 센터모드는 하나씩 밖에 스크롤안됨
		// centerPadding: '0', //센터 모드 일때 슬라이드 좌우 패딩값(기본50px)

		responsive: [{

			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}

		}, {

			breakpoint: 800,
			settings: {
				slidesToShow: 2,
				dots: true
			}

		}, {

			breakpoint: 420,
			settings: {
				slidesToShow: 1,
				dots: false,
				Arrows: false
			}

		}]
	});


	$('.highlight-list').slick({
		//버튼 설정해주기
		prevArrow: '.high-prev',
		nextArrow: '.high-next',

		slidesToShow: 3, //한번에 보여질 슬라이드 갯수
		slidesToScroll: 1, //스크롤 되는 갯수
		// centerMode: true, // 첫번째 슬라이드를 중앙으로 배치 센터모드는 하나씩 밖에 스크롤안됨
		// centerPadding: '0', //센터 모드 일때 슬라이드 좌우 패딩값(기본50px)
		variableWidth: true,

		responsive: [{

			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}

		}, {

			breakpoint: 800,
			settings: {
				slidesToShow: 2,
				dots: true
			}

		}, {

			breakpoint: 420,
			settings: {
				slidesToShow: 1,
				dots: false,
				Arrows: false
			}

		}]
	});





	// $('.pofo-list').slick({
	// 	prevArrow: '.prev',
	// 	nextArrow: '.next',

	// 	slidesToShow: 2, //한번에 보여질 슬라이드 갯수
	// 	slidesToScroll: 1, //스크롤 되는 갯수

	// 	autoplay: true, //자동재생
	// 	autoplaySpeed: 2000, //자동재생시간
	// 	speed: 1000, //슬라이딩되는 시간

	// 	pauseOnDotsHover: true, //인디케이터 호버시 일시중지

	// 	variableWidth: true,
	// 	rtl: true,



	// $selctList = $('.selct-list > li');

	// $selctList.on('click', function () {
	// 	var listIdx = $(this).index();
	// 	// console.log(listIdx);

	// 	$selctList.removeClass('on');
	// 	$selctList.eq(listIdx).addClass('on');
	// 	$('.pofo-list').slick('slickGoTo', listIdx);
	// });




	// var $bestList = $('.best-list > li');


	// $bestList.on('click', function () {
	// 	// e.preventDefault();

	// 	var BestIdx = $(this).index();

	// 	$bestList.removeClass('on');
	// 	$bestList.eq(BestIdx).addClass('on');

	// });


});