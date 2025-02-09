$(function() {
    $('.visual-img').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: $('.btn-prev'),
        nextArrow: $('.btn-next'),
        dots: true,
        slideToshow: 1,
        slidesToScroll: 1,
        appendDots: $('.status'),
        responsive: [{

            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              infinite: true
            }
      
          }, {
      
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              dots: true
            }
      
          }, {
      
            breakpoint: 300,
            settings: "unslick" // destroys slick
      
          }]

    });
});