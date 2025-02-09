$(function () {
    var $btnGame = $('.btn-game');
    var $gameList = $('.game-list');
    var $gameListDiv = $('.game-list > div');

    $gameListDiv.hide();
   
    $btnGame.on('click', function () {

        $(this).toggleClass('on');
        $(this).css({
            background:'#105628'
        })
        $gameListDiv.stop().fadeToggle();


    });

});