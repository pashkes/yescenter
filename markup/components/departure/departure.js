(function () {
  $('.js-departure-slider').slick({
    variableWidth: true,
    centerPadding: '0',
    slidesToShow: 1,
    dots: true,
    mobileFirst: true,
    arrows: false,
    prevArrow: '.js-departure-prev-btn',
    nextArrow: '.js-departure-next-btn',
    responsive: [
      {
        breakpoint: 1343,
        settings: {
          arrows: true,
          dots: false,
          slidesToShow: 2
        }
      }

    ]
  });
})();
