  $(function () {


  	$('.wave').ripples({
  		imageUrl: null,
  		resolution: 256,
  		dropRadius: 20,
  		perturbance: 0.04,
  		interactive: true,
  		crossOrigin: ''
  	});



  	$('.wave').ripples({
  		resolution: 256,
  		perturbance: 0.04
  	});

  	$(".wave span").on('mousedown', function (e) {
  		e.offsetX = 400;
  		e.offsetY = 200;
  	});

  	setInterval(function () {
  		$(".wave span").fadeIn(500);
  		$(".wave span").trigger('mousedown');
  	}, 3000);

  	setInterval(function () {
  		$(".wave span").fadeOut(500);
  	}, 2000);

  });