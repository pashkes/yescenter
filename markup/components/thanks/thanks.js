(function () {
  $('.js-thanks-slider').slick({
    arrows: false,
    dots: true,
    mobileFirst: true,
    slidesToShow: 2,
    infinite: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1343,
        settings: {
          slidesToShow: 6,
          arrows: true,
          dots: false,
          prevArrow: $('.js-thanks-prev-btn'),
          nextArrow: $('.js-thanks-next-btn')
        }
      }
    ]
  });
})();
