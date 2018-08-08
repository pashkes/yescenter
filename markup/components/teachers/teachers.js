(function () {
  $('.js-techers-slider').slick({
    dots: true,
    arrows: false,
    mobileFirst: true,
    variableWidth: true,
    adaptiveHeight: true,
    appendDots: $('.teachers__dots'),
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        variableWidth: false,
        adaptiveHeight: false
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        variableWidth: false
      }
    },
    {
      breakpoint: 1343,
      settings: {
        slidesToShow: 4,
        arrows: true,
        dots: false,
        prevArrow: $('.js-techers-prev-btn'),
        nextArrow: $('.js-techers-next-btn'),
        variableWidth: true
      }
    }]
  });
})();
