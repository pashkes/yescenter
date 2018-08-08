(function () {
  $('.js-partners-slider').slick({
    arrows: false,
    dots: true,
    mobileFirst: true,
    slidesToShow: 2,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1343,
      settings: {
        slidesToShow: 6
      }
    }]
  });
})();
