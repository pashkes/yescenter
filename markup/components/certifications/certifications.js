(function () {
  $('.js-certifications-slider').slick({
    arrows: false,
    mobileFirst: true,
    dots: true,
    centerMode: false,
    centerPadding: false,
    infinite: false,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        variableWidth: true
      }
    },
    {
      breakpoint: 1343,
      settings: {
        slidesToShow: 2
      }
    }]
  });
})();
