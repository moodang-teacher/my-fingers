$(function () {
    $('.gnb').find('li:first').hover(
        function () {
            $('.product').stop().slideDown(300);
        },
        function () {
            $('.product').stop().slideUp(300);
        });
});