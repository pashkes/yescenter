(function () {
  $('.js-promo-slider').slick({
    arrows: false,
    dots: true,
    mobileFirst: true,
    centerPadding: '0',
    appendDots: $('.promo__dots'),
    variableWidth: true,

    responsive: [{
      breakpoint: 767,
      settings: {
      }
    }]
  });
})();
