$(function () {
	var $menu = $('.gnb > ul > li');
	var $subMenu = $('.submenu');
	var duration = 300;
	var $header = $('header');
	var headerHeight = $header.height();
	console.log(headerHeight);

	$menu.on('mouseenter', function () {
		$subMenu.stop().slideDown(duration);
		$header.addClass('active');
		$(this).addClass('on');
	});

	$menu.on('mouseleave', function () {
		$subMenu.stop().slideUp(duration);
		$header.removeClass('active');
		$menu.removeClass('on');
	});

	//스크롤을 시작하면
	$(window).on('scroll', function () {
		//스크롭값을 변수 scTop 에 담아서
		var scTop = $(this).scrollTop();
		console.log(scTop)


	});


	$goTop = $('.go-top');
	$goTop.on('click', function (e) {
		e.preventDefault();

		$('html,body').animate({
			scrollTop: 0

		}, 400);


	});


});