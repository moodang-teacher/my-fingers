var wave1 = 'M -44,-50 C -52.71,28.52 15.86,8.186 184,14.69 383.3,22.39 462.5,12.58 638,14 835.5,15.6 987,6.4 1194,13.86 1661,30.68 1652,-36.74 1582,-140.1 1512,-243.5 15.88,-589.5 -44,-50 Z';
var wave2 = 'M -44,-50 C -137.1,117.4 67.86,445.5 236,452 435.3,459.7 500.5,242.6 676,244 873.5,245.6 957,522.4 1154,594 1593,753.7 1793,226.3 1582,-126 1371,-478.3 219.8,-524.2 -44,-50 Z';
var $bubbleWrap = $('.bubble-wrap');
var $bubble = $('.bubble');
var $contentsWrap = $('.contents-wrap');
var $contents = $contentsWrap.find('.contents');
var $btnClose = $('.btn-close');


$bubble.on('click', function () {
	svgAnimation(2000, '-200vh');
	var conIdx = $(this).index();
	// console.log(conIdx);

	setTimeout(function () {
		$contentsWrap.addClass('active');
		$btnClose.stop().fadeIn();
	}, 2000);

	$contents.stop().fadeOut();
	$contents.eq(conIdx).stop().fadeIn();


});

$btnClose.on('click', function () {
	svgAnimation(1000, 0);
	$contentsWrap.removeClass('active');
	$(this).stop().fadeOut();
});


function svgAnimation (dur, pos) {
	anime({
		targets: '.intro-screen',
		duration: dur,
		easing: "easeInOutSine",
		translateY: pos
	});

	wave();
}

function wave () {
	anime({
		targets: '.shape path',
		duration: 1500,
		easing: "easeInOutSine",
		d: [
			{ value: [wave1, wave2] }
		  ],
	});	
}

/* S: BUBBLE MOUSE MOVE */
var $window = $(window);
var $bubble = $('.bubble-wrap > div');
var $bubble1 = $('.bubble:nth-child(1)');
var $bubble2 = $('.bubble:nth-child(2)');
var $bubble3 = $('.bubble:nth-child(3)');
var $bubble4 = $('.bubble:nth-child(4)');
var $bubble5 = $('.bubble:nth-child(5)');
var $bubble6 = $('.bubble:nth-child(6)');
var x = 0;
var y = 0;
var mx = 0;
var my = 0;
var speed = 0.03;

/* S: GSAP ANIMATION */
var bubbleAni = gsap.timeline();

bubbleAni
	.from($bubble, {
		opacity:0,
		scale:.2,
		filter:'blur(20px)',
		stagger: .2,
		duration:.2,
		onComplete: movingObj,
	})
	.to($bubble, {
		opacity:1,
		scale: 1,
		filter:'blur(0)',
		stagger: .2,
		duration:.4,
		onComplete: movingObj,
	})

/* E: GSAP ANIMATION */

$bubbleWrap.on('mousemove',function(e){

	x = e.pageX - $bubbleWrap.outerWidth() / 2;
	y = e.pageY - $bubbleWrap.outerHeight() / 2;
	
});

function movingObj() {
	mx += (x - mx) * speed;
	my += (y - my) * speed;

	// $obj1.css({transform: 'translate(10px, 10px)'});
	$bubble1.css({transform: `translate(${mx * 0.2}px, ${my * 0.1}px)`});
	$bubble2.css({transform: `translate(${-mx * 0.2}px, ${-my * 0.2}px)`});
	$bubble3.css({transform: `translate(${mx * 0.07}px, ${my * 0.05}px)`});
	$bubble4.css({transform: `translate(${mx * 0.3}px, ${my * 0.1}px)`});
	$bubble5.css({transform: `translate(${mx * 0.2}px, ${my * 0.1}px)`});
	$bubble6.css({transform: `translate(${-mx * 0.3}px, ${my * 0.2}px)`});


	requestAnimationFrame(movingObj);
};

/* movingObj(); */
/* E: BUBBLE MOUSE MOVE */





