(function () {
  $('.js-promo-slider').slick({
    arrows: false,
    dots: true,
    mobileFirst: true,
    centerPadding: '0',
    appendDots: $('.promo__dots'),
    prevArrow: $('.js-promo-prev-btn'),
    nextArrow: $('.js-promo-next-btn'),

    responsive: [{
      breakpoint: 767,
      settings: {
        variableWidth: true
      }
    },
    {
      breakpoint: 1343,
      settings: {
        variableWidth: true,
        arrows: true,
        dots: false
      }
    }]
  });
})();
