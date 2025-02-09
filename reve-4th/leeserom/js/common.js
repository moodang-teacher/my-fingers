$(function () {

    var $dim = $('.dim');
    var $slideMenu = $('.slide-menu');
    // var $hamburger = $('.hamburger');
    var $slideBG = $('.slide-bg')
    var $wrapperMenu = $('.wrapper-menu');
    var duration = 300;
    var isActive = false;

    $wrapperMenu.on('click', function () {

        if (!isActive){
            $('header').css({
                position: 'static'
            });
            $('main').css({
                marginTop: '-90px'
            });
            $dim.fadeIn(duration);
            $slideMenu.addClass('active');
            $slideBG.addClass('active');
            $wrapperMenu.addClass('open');
            isActive = true;
            
        } else{
            closeMenu();
        }
        
    });
    
    $dim.on('click', function () {
        closeMenu();
    });
    
    
    function closeMenu() {
        $('header').css({
            position: 'fixed'
        });
        $('main').css({
            marginTop: 0
        });
        $dim.fadeOut(duration);
        $slideMenu.removeClass('active');
        $slideBG.removeClass('active');
        $wrapperMenu.removeClass('open')
        isActive = false;
    };

    /* s: gnb hover blur */

    var $menu = $('.gnb > ul > li');
    // console.log($menu);
    
    $menu.on('mouseenter', function(){

        var menuIdx = $(this).index();

        $menu.css('filter','blur(3px)');
        $menu.eq(menuIdx).css('filter','blur(0)');
        
    });

    $menu.on('mouseleave', function(){

        $menu.css('filter','blur(0)');
        
    });

    /* e: gnb hover blur */

    /* s: Language Dropdown Menu */
    var $languageMenu = $('.language-wrap');
    var $languageDrop = $('.language-dropdown');
    var duration = 300;

    $languageMenu.on('click', function(e){
        e.stopPropagation(); 
        
        if( !$(this).hasClass('on')){

            hideItem();

            $(this).addClass('on');
            $(this).find($languageDrop).slideDown(duration);

        } else{
            hideItem();
        }
    });

    function hideItem() {
        $languageMenu.removeClass('on');
        $languageDrop.slideUp(duration);
    }

    $('body').on('click', function(){
        hideItem();
    })

    $(window).on('scroll', function () {
        hideItem();
    });

    /* e: Language Dropdown Menu */

    
    /* s: CURSOR */
    var $window = $(window);
    var $cursor = $('.cursor');
    var mouseX = 0;
    var mouseY = 0;
    
    $window.on('mousemove', function(e) {
        //  console.log(e);
         mouseX = e.pageX;
         mouseY = e.pageY;

         $cursor.css({
             top: mouseY,
             left: mouseX
         });
    });
    
    $('a').hover(function () {
        $cursor.addClass('hover');
    }, function () {
        $cursor.removeClass('hover');
    });

    $('.mouse-hover').hover(function () {
        $cursor.addClass('hover');
    }, function () {
        $cursor.removeClass('hover');
    });

    $slideMenu.hover(function () {
        $cursor.addClass('dark');
    }, function () {
        $cursor.removeClass('dark');
    });

    Splitting();

     /* header hiding when scroll */

     var $header = $('header');
     var lastScrollValue = 0;
     
 
     $window.on('scroll', function () {
         var scrollTop = $(this).scrollTop();
 
         if (scrollTop > lastScrollValue) {
             $header.css('top', '-90px');
         } else {
             $header.css('top', 0);
         }
 
         lastScrollValue = scrollTop;
 
     });
});

