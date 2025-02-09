// $(function () {
//     /*
//         선택한 질문을 기준삼아 동작을 만들자!
//     */

//     // 변수 선언
//     var $faqQuestion = $('.faq-wrap ul li');
//     var $faqAnswer = $('.answer-wrap');

//     // FAQ 리스트를 클릭했을 때 동작을 실행
//     $faqQuestion.on('click', function () {
//         // 선택한 질문의 형제들의 자손 중 대답은 모두 slideUp()
//         $(this).siblings().find($faqAnswer).stop().slideUp();
//         // 선택한 질문의 자손 중 대답은 slideToggle()
//         $(this).find($faqAnswer).stop().slideToggle();
//         // 선택한 질문의 형제들 모두의 on클래스명 삭제
//         $(this).siblings().removeClass('on');
//         // 선택한 질문에 on클래스명을 토글
//         $(this).toggleClass('on');
//     });
// });

// $(function () {
//     var $menu = $('.menu_bar ul li')
//     var 
// });