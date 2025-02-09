$(function(){
    //변수선언
		var $header = $('header');
		var $menu = $('.gnb > li');
		var $SubMenu = $('.submenu');
		var $goTop = $('.top');
		var duration = 300;
		var headerHeight = $header.height();
		console.log(headerHeight); //비교값1

		var $footer = $('#footer');
		var footerOffset = $footer.offset().top;
		console.log(footerOffset);
		$goTop.hide();


		$menu.on('mouseenter', function () {
			$header.addClass('active');
			$(this).addClass('on');
			// $SubMenu.stop().fadeIn(duration);
		});

		$menu.on('mouseleave', function() {
			$header.removeClass('active');
			$menu.removeClass('on');
			// $SubMenu.stop().fadeOut(duration);

		});

		$(window).on('scroll', function(){

			var scTop = $(this).scrollTop();

			if (scTop >= headerHeight + 100) {

				$header.addClass('fixed');

				if (scTop > 1000) {
					$goTop.fadeIn();
				}

			} else if (scTop == 0) {

				$header.removeClass('fixed');
				$goTop.hide();

			}


		});

		$goTop.on('click', function (e){
			e.preventDefault();
			
			$('html, body').stop().animate({
				scrollTop: 0
			}, duration);
		});

		});
