$(function () {

	var $btnMenu = $('.hamburger');
	var $magaMenu = $('.full-menu');
	var $btnClose = $('.close-btn');


	$btnMenu.on('click', function () {
		$magaMenu.addClass('active');
	});

	$btnClose.on('click', function () {

		$magaMenu.removeClass('active');

	});


	AOS.init({
		// delay: 0, // values from 0 to 3000, with step 50ms
		duration: 1000, // values from 0 to 3000, with step 50ms
		easing: 'ease-in-cubic', // default easing for AOS animations
	});


	var $tabMenu = $('.tabmenu > li');


	$tabMenu.on('click', function () {
		// e.preventDefault();

		var tabIdx = $(this).index();

		$tabMenu.removeClass('on');
		$tabMenu.eq(tabIdx).addClass('on');

	});




	var $window = $(window);
	var $cursor = $('.cursor');
	var $spark = $('.spark');
	var $menu = $('.menu');
	var $followImg = $('.menu-about');
	var mouseX = 0;
	var mouseY = 0;
	var mx = 0;
	var my = 0;
	var speed = 0.09;

	$window.on('mousemove', function (e) {
		// console.log(e);
		mouseX = e.pageX;
		mouseY = e.pageY;

		$cursor.css({
			top: mouseY,
			left: mouseX
		});
	});

	function movingCursor() {
		mx += (mouseX - mx) * speed;
		my += (mouseY - my) * speed;

		// console.log(mx, my);

		$spark.css({
			top: my,
			left: mx
		});


		if ($magaMenu.hasClass('active')) {
			$followImg.css({
				transform: `translate(${mx}px, ${my}px) rotate(-${my * 0.05}deg)`,
			});
		}

		requestAnimationFrame(movingCursor);
	}

	movingCursor();

	$menu.find('li').each(function (index, item) {
		$(item).on('mouseenter', function () {
			$followImg.css({
				// backgroundImage: 'url(images/blackpink1.jpeg)',
				backgroundImage: `url(images/full_menu_0${index + 1}_img.jpg`,
				width: 390,
				height: 565,
				opacity: 1,
			});
		});
	});

	$menu.on('mouseleave', function () {
		$followImg.stop().animate({
			backgroundImage: null,
			width: 10,
			height: 10,
			opacity: 0,
		}, 400);
	});




	//마우스 왼쪽키가 눌러질 때
	$window.on('mousedown', function () {
		$cursor.addClass('click');
	});

	//마우스 왼쪽키에서 손가락이 떨어질 때
	$window.on('mouseup', function () {
		$cursor.removeClass('click');
		// $spark.removeClass('active');
	});

	$window.on('click', function () {
		$spark.addClass('active');
		// setTimeout(함수,시간)
		setTimeout(function () {
			$spark.removeClass('active');
		}, 300);
	});


	var $header = $('header');
	var lastScrollValue = 0;

	$window.on('scroll', function () {
		var scrollTop = $(this).scrollTop();

		if (scrollTop > lastScrollValue) {
			$header.css('top', '-150px');
		} else {
			$header.css('top', 0);
		}

		lastScrollValue = scrollTop;

	});


	$('.process-prev').on('click', function (e) {
		e.preventDefault();

		window.open('about:blank', '_self').close();
	});




	$goTop = $('.go-top');
	$goTop.on('click', function (e) {
		e.preventDefault();

		$('html,body').animate({
			scrollTop: 0

		}, 400);


	});


	// 이전 작업물들
	// var $grid = $('.archive-list').masonry();

	// $grid.imagesLoaded().progress(function () {
	// 	$grid.masonry('layout');
	// });



});