$(function (){
    
    var $faqQuestion = $('.faq-question'); // 순번이 나올 수 있는 요소를 선택한다.
    var $faqAnswer = $('.faq-answer');
    var duration = 300;


    $faqQuestion.on('click', function () {

        $(this).siblings().find($faqAnswer).slideUp(duration);
        $(this).find($faqAnswer).slideToggle(duration);
    });
});