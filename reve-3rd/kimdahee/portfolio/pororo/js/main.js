$(function () {

    var $win = $(window);
    var $header = $('header');
    var $section = $('main > section')
    var $pororo = $('.pororo-ico');
    var $pororoWrap = $pororo.parent('.pororo-ico-wrap');


    var $videoWrap = $('.video-wrap');
    var headHeight = $header.height();
    var videoHeight = $videoWrap.height();
    // console.log(videoHeight);

    var sec1Pos;
    var sec2Pos;
    var sec3Pos;
    var sec4Pos;

    var secIdx = 0;



    function getPosition() {
        sec1Pos = $section.eq(0).offset().top;
        sec2Pos = $section.eq(2).offset().top;
        sec3Pos = $section.eq(3).offset().top - 100;
        sec4Pos = $section.eq(4).offset().top;

        console.log('섹션1 : ' + sec1Pos);
        console.log('섹션2 : ' + sec2Pos);
        console.log('섹션3 : ' + sec3Pos);
        console.log('섹션4 : ' + sec4Pos);

    };

    getPosition();
    appearPororo();

    function appearPororo() {
        $pororo.removeClass('on');
        $pororo.eq(secIdx).addClass('on');
    }


    $win.on('scroll', function () {

        var scTop = $(this).scrollTop();
        // console.log(scTop);

        $pororo.removeClass('on');

        if (scTop > videoHeight) {
            $pororoWrap.addClass('active');

            if (scTop >= sec1Pos && scTop < sec2Pos) {
                secIdx = 0;

            } else if (scTop >= sec2Pos && scTop < sec3Pos) {
                secIdx = 1;

            } else if (scTop >= sec3Pos && scTop < sec4Pos) {
                secIdx = 2;

            } else if (scTop >= sec4Pos) {
                secIdx = 3;
            }
            appearPororo();
        } else {
            $pororoWrap.removeClass('active');
        }
        // secIdx = 0;




        // console.log('secIdx : ' + secIdx);



    });

    $win.on('resize', function () {

        getPosition();

        $win.trigger('scroll');

    });

      // 슬릭스타일
      $(".youtube-slide").slick({

        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: $('.btn-prev-app'),
        nextArrow: $('.btn-next-app'),
        // fade: true,
        //vertical: true
        // dots: true,
        slidesToShow: 3, // 몇 개가 보여질 지 결정
        slidesToScroll: 1, // 몇 개를 움직일지 결정 (1칸.2칸.3칸)

        responsive: [{

            breakpoint: 1400,
            settings: {
                prevArrow: false,
                nextArrow: false,
            }
        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                //   dots: true
                prevArrow: false,
                nextArrow: false,
                centerMode: true,
            }

        }]

    });

    // 슬릭스타일
    $(".app-slide").slick({

        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: $('.btn-prev-app'),
        nextArrow: $('.btn-next-app'),
        // fade: true,
        //vertical: true
        // dots: true,
        slidesToShow: 3, // 몇 개가 보여질 지 결정
        slidesToScroll: 1, // 몇 개를 움직일지 결정 (1칸.2칸.3칸)

        responsive: [{

            breakpoint: 1400,
            settings: {
                prevArrow: false,
                nextArrow: false,
            }
        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                //   dots: true
                prevArrow: false,
                nextArrow: false,
                centerMode: true,
            }

        }]

    });


    $(".music-slide").slick({

        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: $('.btn-prev-music'),
        nextArrow: $('.btn-next-music'),
        // fade: true,
        //vertical: true
        // dots: true,
        slidesToShow: 3, // 몇 개가 보여질 지 결정
        slidesToScroll: 1, // 몇 개를 움직일지 결정 (1칸.2칸.3칸)

        responsive: [{

            breakpoint: 1400,
            settings: {
                prevArrow: false,
                nextArrow: false,
            }
        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                //   dots: true
                prevArrow: false,
                nextArrow: false,
                centerMode: true,
            }

        }]

    });



    // ㅡㅡㅡㅡ 배경 애니메이션 ㅡㅡㅡㅡ

    //미디어- 고래
    var $whale = $('.whale');
    var startAni = gsap.timeline();

    // startAni.to($whale, {duration: 1, x: '-130%', y:50, ease: 'none'})
    //         .to($whale, {duration: 1, x: '-260%', y:0, ease: 'none'})
    //         .to($whale, {duration: 2, perspective: 1000, rotationY:180})
    //         .to($whale, {duration: 1, x: '-130%', y:50, ease: 'none'})
    //         .to($whale, {duration: 1, x: '0', y:0, ease: 'none'})


 
});