$(function () {


	// 이전 작업물들
	var $grid = $('.archive-list').masonry();

	$grid.imagesLoaded().progress(function () {
		$grid.masonry('layout');
	});



});