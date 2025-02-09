$(function() {

    var $window = $(window);

    var $workList = $('.work-list');
    var $paging = $('.indicator > p')
    var $descSlide = $('.desc-slide')

    
    $window.on('load',function() {
        
        $workList.slick({
            prevArrow: '.btn-prev',
            nextArrow: '.btn-next',
            
            slidesToShow: 2,
            asNavFor: $descSlide,
            autoplay: true,
            speed: 1500
        });
        
    });

    $descSlide.slick({
        asNavFor: $workList,
        arrows: false,
        speed: 1000,
        fade: true,

    });

    $workList.on('afterChange', function(event, slick, currentSlide) {
        console.log(slick);
        console.log(currentSlide);

        //현재 페이지 표시
        var i = currentSlide + 1;
        $paging.text(i + ' / ' + 6)

        //프로그레스바 표시
        // barWidth = i / slick.slideCount * 100;
        // $('.progress-bar').css({
        //     width: barWidth + '%'
        // })
    });

    //aos

    $(function() {

        AOS.init({
            duration: 800,
            easing: 'ease-in-out-cubic'
        });



    });

    //마우스
    var $cursor = $('.cursor');
    var $trueCursor = $('.true-cursor')
    var $clickCur = $('.cursor-click')
    var mouseX = 0;
    var mouseY = 0;

    $window.on('mousemove', function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;

        $cursor.add($trueCursor).css({
            top: mouseY,
            left: mouseX
        })
        $clickCur.css({
            top: mouseY,
            left: mouseX,
        })
    })

    //a에 호버할 때 마우스

    $('a').on('mouseenter', function() {
        $trueCursor.addClass('on')
    })

    $('a').on('mouseleave', function() {
        $trueCursor.removeClass('on')
    })

        //마우스 왼쪽키가 눌러질 때
    $window.on('mousedown', function(e) {
        $cursor.addClass('click')
    })

        //마우스 왼쪽키에서 손가락이 떨어질때
    $window.on('mouseup', function(e) {
        setTimeout(function(){
            $cursor.removeClass('click')
        },1000);
    })

    //햄버거메뉴
    var $hamburger = $('.hamburger');
    var $closeBtn = $('.tab-btn');
    var $tabMenu = $('.tabmenu')
    var $dim = $('.dim');
    var duration = 300
    
    $hamburger.on('click', function(e){
        e.preventDefault()

        $dim.fadeIn(duration);
        $tabMenu.css({
            right: 0,
        })

        catThinkMove()
    })

    $closeBtn.add($dim).on('click',function(e){
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

    //탑버튼
    var $goTop = $('.go-top');
    var winHeight;
    var docHeight;
    var $document = $(document);
    getNum();
    
    $window.on('scroll', function() {
        var scrollTop = $window.scrollTop();        

        var activeNum = Math.round(scrollTop / (docHeight - winHeight) * 100);
        var moveNum = scrollTop / docHeight * 100; 

        $goTop.css({
            top: `${moveNum}%`
        });

        if (activeNum > 30) {
            $goTop.fadeIn();
        } else {
            $goTop.fadeOut();
        }


       
    });

    function getNum() {
        winHeight = $window.outerHeight();
        docHeight = $document.outerHeight();
    }

    $window.on('resize', function () {
        getNum();
        $window.trigger('scroll');
    });

    $goTop.on('click',function() {

        $('html, body').animate({
            scrollTop: 0
        })
    })

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

        // (function(){ 

        //     document.onreadystatechange = () => {

        //       if (document.readyState === 'complete') {
                         
        //         /**
        //          * Setup your Lazy Line element.
        //          * see README file for more settings
        //          */

        //         let el = document.querySelector('#canvas-tree');
        //         let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#222F3D","strokeCap":"square"}); 
        //         myAnimation.paint(); 
        //       }
        //     }

        //   })();
        (function(){ 

            document.onreadystatechange = () => {

              if (document.readyState === 'complete') {
                        
                /**
                 * Setup your Lazy Line element.
                 * see README file for more settings
                 */

                let el = document.querySelector('#canvas-tree');
                let myAnimation = new LazyLinePainter(el, {"ease":"easeInOutQuad","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#222F3D","strokeCap":"square"}); 
                myAnimation.paint(); 
              }
            }

          })();
});