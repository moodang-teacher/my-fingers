$(function () {



	$(function () {

		var $window = $(window);
		var $header = $('header');
		var $sideDot = $('.indi-movie > a');
		var $section = $('main > section');
		var secLength = $section.length - 1;
		var duration = 300;

		// console.log(secLength)

		//섹션별 y좌표값 구하기

		var sec1pos;
		var sec2pos;
		var sec3pos;
		var sec4pos;
		var sec5pos;
		var sec6pos;

		// console.log(sec1pos,sec2pos,sec3pos,sec4pos)

		getPosition();




		var secIdx = 0; // 오늘도 열일하는 애


		//기본이동에 대한 테스트 코드
		// $('html,body').stop().animate({
		//     scrollTop: $section.eq(2).offset().top
		// }, 300)

		updateDot();

		//스크롤값을 이용해서 영역에 진입했을때 secIdx를 변하게 만들자


		// lodash.js 사용기본
		// _.throttle(함수 , 시간) / 쓰로틀링
		// _.debounce(함수, 시간) / 디바운스

		$window.on('scroll', _.throttle(function () {
			var scrollTop = $(this).scrollTop();
			// console.log(scrollTop)

			if (scrollTop >= sec1pos && scrollTop < sec2pos) {
				secIdx = 0;
			} else if (scrollTop >= sec2pos && scrollTop < sec3pos) {
				secIdx = 1;

			} else if (scrollTop >= sec3pos && scrollTop < sec4pos) {
				secIdx = 2;

			} else if (scrollTop >= sec4pos && scrollTop < sec5pos) {
				secIdx = 3;

			} else if (scrollTop >= sec5pos && scrollTop < sec6pos) {
				secIdx = 4;

			} else if (scrollTop >= sec6pos) {
				secIdx = 5;
			}
			console.log(secIdx)

			//dot update
			updateDot();
		}, 200));



		// 인디케이터를 클릭하면 이동
		$sideDot.on('click', function (e) {
			e.preventDefault();
			secIdx = $(this).index();


			moveSection();

		});

		$window.on('wheel DOMMouseScroll', _.throttle(function (e) {
			console.log(e)


			if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {


				// 위로 이동하겠다는 건 secIdx값이 줄어든다
				// 하지만 0 이하로 줄어들면 안된다 -- > secIdx(-1) 상황은 없다.
				// 그래서 secIdx가 0일 때 조치를 취해야한다.
				if (secIdx == 0) {
					// secIdx = secLength - 1;
					return; // 함수의 종료 --> 이 시점에서 아무것도 하지마라

				} else {
					// secIdx--;
					$('html,body').stop().animate({
						scrollTop: $section.eq(secIdx - 1).offset().top
					}, 800);
				};

			} else {


				if (secIdx == secLength) {
					secIdx = 0;
					return;

				} else {
					secIdx++;
				};
			};

			moveSection();


		}, 100));

		//화면이 리사이징 될 때
		$window.on('resize', function () {
			getPosition();

			//스크롤 이벤트 강제로 발생
			$window.trigger('scroll');
		});




		function moveSection() {

			$('html,body').stop().animate({
				scrollTop: $section.eq(secIdx).offset().top
			}, 800);

		}

		function updateDot() {
			$sideDot.removeClass('on');
			$sideDot.eq(secIdx).addClass('on');
		}

		//섹션별 좌표값 구하기를 함수로
		function getPosition() {
			sec1pos = $section.eq(0).offset().top;
			sec2pos = $section.eq(1).offset().top;
			sec3pos = $section.eq(2).offset().top;
			sec4pos = $section.eq(3).offset().top;
			sec5pos = $section.eq(4).offset().top;
			sec6pos = $section.eq(5).offset().top;
			// sec4pos = $section.eq(5).offset().top;

		}

	});

});