$(function () {
    const $visualSec = $('.desktop-visual > img');
    const $tabletSec = $('.tablet-visual > img')
    const $indicator = $('.indicator > li');
    let visualImg = ['images/visual-img-1.jpg', 'images/visual-img-2.jpg', 'images/visual-img-3.jpg', 'images/visual-img-4.jpg', 'images/visual-img-5.jpg'];
    let tabletImg = ['images/main-table-visual1.jpg', 'images/main-table-visual2.jpg', 'images/main-table-visual3.jpg', 'images/main-table-visual4.jpg', 'images/main-table-visual5.jpg']


    $indicator.on('click', function (){
        let switchIdx  = $(this).index();
        $indicator.removeClass('selected');
        $(this).addClass('selected');
        $visualSec.attr({
            src: `${visualImg[switchIdx]}`
        });
        $tabletSec.attr({
            src: `${tabletImg[switchIdx]}`
        });
    });
});