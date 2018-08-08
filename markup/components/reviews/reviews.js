(function () {
  $('.js-reviews-slider').slick({
    dots: true,
    arrows: false,
    mobileFirst: true,
    appendDots: $('.reviews__dots'),
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 767,
      settings: {
        variableWidth: true,
        adaptiveHeight: false
      }
    },
    {
      breakpoint: 1343,
      settings: {
        variableWidth: false,
        arrows: true,
        slidesToShow: 3,
        prevArrow: $('.js-reviews-prev-btn'),
        nextArrow: $('.js-reviews-prev-btn')
      }
    }]
  });
})();
