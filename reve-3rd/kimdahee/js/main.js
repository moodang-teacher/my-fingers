

$(function () {

    // 전체 줌인효과 초기 세팅

    gsap.set('body', {scale: 1.3, opacity: 0});

    // 구름 애니메이션

    gsap.to('.cloud', {duration: 10, y: -40, x: 100, repeat: -1, yoyo: true});

    // 전체 애니메이션 타임라인
    var startAni = gsap.timeline();
    var $daheeWrap = $('.dahee-wrap');
    var $dahee = $daheeWrap.children('.dahee');


    //gsap 애니메이션 (timeline(1번효과 후 2번효과...))
    startAni.to('body', {duration: 5, scale: 1, opacity: 1})
            .to('.light', {duration: 4, top: '16.2%', right: '49.9%', opactiy: 1, scale: 0.4 }, '-=2')
            .to('.dark-bg', {duration: 4, opacity: 0, delay:-4})
            .to($dahee, {duration: 5, opacity: 0.5, transformOrigin: '50% 0'})
            .to('.mountain', {duration: 3, opacity: 0, delay:-5})
            .to('.cloud', {duration: 3, opacity: 0}, '<')
            .to($daheeWrap, {duration:3, scale: 0.7, transformOrigin: '30% 15%' ,delay:-3})
            .to($dahee, {duration: 3, opacity: 1 , delay: -3})
            .to($daheeWrap, {duration:2 , x: 300, ease: 'back'})
            .to('.text-bg', {duration:1, width: '780px', delay: -2})
            .to('.text-con', {duration:1, left:0, delay: -2.2})
            .to('.text-con > h2', {duration:1, left:0}, '-=1.2')
            .to('.text-con > p', {duration:1, left:0},'-=.7')
            .to('header', {duration: 0.5, opacity:1})
            .from('.menu', 1, {y: -20, opacity: 0, stagger: 0.2, ease: 'back'});


            // x: 500, y:100

    var $skip = $('.btn-skip');

    // $skip.on('click', function(e) {

    //     // e.preventDefault();
    //     startAni.clear();
    //         // .to('body', {scale: 1, opacity: 1})
    //         // .to('.light', {top: '16.2%', right: '49.9%', opactiy: 1, scale: 0.4 }, '-=2')
    //         // .to('.dark-bg', {opacity: 0, delay:-4})
    //         // .to($dahee, {opacity: 0.5, transformOrigin: '50% 0'})
    //         // .to('.mountain', {opacity: 0, delay:-5})
    //         // .to('.cloud', {opacity: 0}, '<')
    //         // .to($daheeWrap, {scale: 0.7, transformOrigin: '30% 15%' ,delay:-3})
    //         // .to($dahee, {opacity: 1 , delay: -3})
    //         // .to($daheeWrap, {x: 300, ease: 'back'})
    //         // .to('.text-bg', {duration:1, width: '780px', delay: -2})
    //         // .to('.text-con', {duration:1, left:0, delay: -2.2})
    //         // .to('.text-con > h2', {duration:1, left:0}, '-=1.2')
    //         // .to('.text-con > p', {duration:1, left:0},'-=.7')
    //         // .to('header', {duration: 0.5, opacity:1})
    //         // .from('.menu', 1, {y: -20, opacity: 0, stagger: 0.2, ease: 'back'})

    // });
            


            



});