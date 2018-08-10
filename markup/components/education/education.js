(function () {
  $('.js-slider-education').slick({
    arrows: false,
    dots: true,
    mobileFirst: true,
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
        slidesToShow: 4
      }
    }]
  });
})();

