$(function () {

    //풀페이지
    var $window = $(window);
    var $document = $(document);
    var $section = $('main > section');
    // console.log($section)
    var secLength = $section.length - 1;
    var duration = 300;
    var sec1pos;
    var sec2pos;
    var sec3pos;
    var sec4pos;
    var flag = true;
    getPosition();

    var secIdx = 0;

    //top 버튼

    var $goTop = $('.go-top');



    var winHeight;
    var docHeight;
    var scrollTop
   

    $window.on('scroll', _.throttle(function () {
        var scrollTop = $(this).scrollTop();

        if (scrollTop >= sec1pos && scrollTop < sec2pos) {
            secIdx = 0;
        } else if (scrollTop >= sec2pos && scrollTop < sec3pos) {
            secIdx = 1;
        } else if (scrollTop >= sec3pos && scrollTop < sec4pos) {
            secIdx = 2;
        } else if (scrollTop >= sec4pos) {
            secIdx = 3;
            // skillAnimation()


        };

        if (scrollTop >= sec4pos - 700) {
            if (flag) {
                setTimeout(skillAnimation, 100);
                flag = false;
            }
        }

        var activeNum = Math.round(scrollTop / (docHeight - winHeight) * 100);
        var moveNum = scrollTop / docHeight * 100;

        $goTop.css({
            top: `${moveNum}%`
        });

        if (activeNum > 50) {
            $goTop.fadeIn();
        } else {
            $goTop.fadeOut();
        }
    }, 800))

    
    $goTop.on('click', function () {

        $('html, body').animate({
            scrollTop: 0
        })
    })



    $window.on('wheel DOMMouseScroll', _.throttle(function (e) {
        // console.log(e)


        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            //휠을 올린상황 --> 위로올라간다

            // 위로 이동하겠다는 건 secIdx값이 줄어든다
            // 하지만 0 이하로 줄어들면 안된다 -- > secIdx(-1) 상황은 없다.
            // 그래서 secIdx가 0일 때 조치를 취해야한다.
            if (secIdx == 0) {
                // secIdx = secLength - 1 ;
                return; // 함수의 종료 --> 이 시점에서 아무것도 하지마라

            } else {
                secIdx--;
            };

        } else {
            //휠을 내린상황 --> 내려간다

            if (secIdx == secLength) {
                // secIdx = 0;
                return;

            } else {
                secIdx++;
            };
        };
        
        moveSection();

    }, 400));

    function getPosition() {
        sec1pos = $section.eq(0).offset().top;
        sec2pos = $section.eq(1).offset().top;
        sec3pos = $section.eq(2).offset().top;
        sec4pos = $section.eq(3).offset().top;
    }

    function moveSection() {

        $('html,body').stop().animate({
            scrollTop: $section.eq(secIdx).offset().top
        }, 300);

    }
    //풀페이지 끝

    //슬라이드
    var $personSlide = $('.person-slide')

    $personSlide.slick({
        prevArrow: $('.btn-prev'),
        nextArrow: $('.btn-next'),
        autoplay: true,
        autoplaySpeed: 1800,
        speed: 1200,
    })



    //skill 팝업


    var $skillList = $('.skill-list > li');
    var $skillInfo = $('.skill-info');
    var $skillTit = $('.skill-tit');
    $skillList.on('click', function () {
        $skillList.find($skillInfo).fadeOut();
        $(this).find($skillInfo).stop().fadeToggle(300);

        $(this).siblings().find($skillTit).removeClass('on');
        $(this).find($skillTit).toggleClass('on');

        //    if($(this).find($skillInfo).hasClass('on')) {

        //        $skillTit.removeClass('on')
        //     } else {
        //         $(this).find($skillTit).addClass('on')
        //    }


    })

    //마우스 커서
    var $cursor = $('.cursor');
    var $trueCursor = $('.true-cursor')
    var $clickCur = $('.cursor-click')

    //메인 마우스무브
    var $cloud = $('.cloud1');
    var $cloud2 = $('.cloud2');
    var $mainMe = $('.main-ill')
    var $mainView = $('.main-view')

    var mouseX = 0;
    var mouseY = 0;

    var x = 0;
    var y = 0;

    var mx = 0;
    var my = 0;
    var speed = 0.009;
    $window.on('mousemove', function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;

        x = e.pageX - $window.width() / 2;
        y = e.pageY - $window.height() / 2;

        $cursor.add($trueCursor).css({
            top: mouseY,
            left: mouseX
        })

        $clickCur.css({
            top: mouseY,
            left: mouseX,
        }) // mx my 로 변경

    })

    movingObj()

    //오브젝트 움직임
    function movingObj() {
        mx += (x - mx) * speed
        my += (y - my) * speed

        $cloud.css({
            transform: `translate(${mx * 0.04}px, ${my * 0.04}px)`
        });
        $cloud2.css({
            transform: `translate(${-mx * 0.04}px, ${-my * 0.04}px)`
        });

        $mainMe.css({
            transform: `translateX(${mx * 0.015}px)`
        });

        // $mainView.css({
        //     transform: `translateX(${mx * 0.005}px)`
        // });

        requestAnimationFrame(movingObj);

    }
    //a에 호버할 때 마우스

    $('a').on('mouseenter', function () {
        $trueCursor.addClass('on')
    })

    $('a').on('mouseleave', function () {
        $trueCursor.removeClass('on')
    })

    //마우스 왼쪽키가 눌러질 때
    $window.on('mousedown', function (e) {
        $cursor.addClass('click')
    })

    //마우스 왼쪽키에서 손가락이 떨어질때
    $window.on('mouseup', function (e) {
        // $cursor.removeClass('click')
        setTimeout(function () {
            $cursor.removeClass('click')
        }, 1000);
    })


    //aos
    $(function () {

        AOS.init({
            duration: 1000,
            easing: 'ease-in-out-cubic'
        });



    });

    //햄버거메뉴
    var $hamburger = $('.hamburger');
    var $closeBtn = $('.tab-btn');
    var $tabMenu = $('.tabmenu')
    var $dim = $('.dim');

    $hamburger.on('click', function (e) {
        e.preventDefault()

        $dim.fadeIn(duration);
        $tabMenu.css({
            right: 0,
        })

        catThinkMove()

    })

    $closeBtn.add($dim).on('click', function (e) {
        e.preventDefault()

        $dim.fadeOut(duration);
        $tabMenu.css({
            right: '-100%',
        })
    })


    
    // 로딩 페이지
    setTimeout(function() {
        $('.loding').slideUp()
    } , 800)
    

    $window.on('resize', function () {
        getNum();
        $window.trigger('scroll');
    });

    getNum();


    function getNum() {
        winHeight = $window.outerHeight();
        docHeight = $document.outerHeight();
    }
   

    
    //스킬 페이지 애니매이션
    var skillAni = gsap.timeline();
    var $skillBar = $('.skill-bar');



    function skillAnimation() {

        // gsap.from($($skillList), {
        //     duration: .5,
        //     y: 100,
        //     stagger: .2,
        //     opacity: 0
        // })
        skillAni
            .from($skillList, {
                duration: .5,
                y: 100,
                stagger: .2,
                opacity: 0
            })
            .from($skillBar, {
                duration: .4,
                width: 0,
            })
    }

    //메인 이미지 애니매이션

    var $mainBtn = $('.main-btn');
    var $mainTit = $('.main-tit > h2');
    var $mainTxt = $('.main-txt');    

    var mainAni = gsap.timeline();

    mainAni
        .from($mainMe,{
            opacity:0,
            duration: 2,
        }, '+=.8')
        .from($mainView,{
            opacity:0,
            duration:2
        }, '-=1')
        .from($mainTit,{
            opacity:0,
            y:100,
            duration: 1
        },'-=1.5')
        .from($mainTxt,{
            opacity:0,
            y:100,
            duration:1
        },'-=.8')
        .from($mainBtn,{
            opacity:0,
            duration: .5
        },'-=.5')
        .from($cloud,{
            opacity:0,
            duration:1

        },'<')
        .from($cloud2,{
            opacity:0,
            duration:1,
        },'<')
        .from($('#maintag_1'),{
            onStart: movingTag,
            duration:1,
            opacity: 0,
        })
        .from($('.tag-circle'),{
            opacity:0,
            duration: 3,
            repeat: -1
        }, '+=.5')
        function movingTag() {

        
                    let el = document.querySelector('#maintag_1');
                    let myAnimation = new LazyLinePainter(el, {
                        "ease": "easeInSine",
                        "strokeWidth": 1,
                        "strokeOpacity": 1,
                        "strokeColor": "#333333",
                        "strokeCap": "square"
                    });
                    myAnimation.paint();
        }


    //햄버거메뉴고양이 애니매이션
    var $catCircle1 = $('.cat-circle1');
    var $catCircle2 = $('.cat-circle2');
    var $catCircle3 = $('.cat-circle3');

    var catAni = gsap.timeline();

        function catThinkMove() {

            catAni
                .from($catCircle1, {
                    opacity:0,
                    duration: 2,
        
                })
                .from($catCircle2,{
                    opacity:0,
                    duration: 2,
        
                },'-=1')
                .from($catCircle3,{
                    opacity:0,
                    duration: 2,
        
                },'-=1')
        }
   

})