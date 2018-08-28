(function () {
  $('.js-techers-slider').slick({
    dots: true,
    arrows: false,
    variableWidth: true,
    adaptiveHeight: true,
    mobileFirst: true,
    slidesToShow: 2,
    appendDots: $('.teachers__dots'),
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        variableWidth: false,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 1343,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: $('.js-techers-prev-btn'),
        nextArrow: $('.js-techers-next-btn'),
        variableWidth: true
      }
    }
    ]
  });
})();
