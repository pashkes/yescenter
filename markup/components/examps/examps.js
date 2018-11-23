(function () {
  $('.js-examp-first-slider').slick({
    dots: true,
    arrows: false,
    mobileFirst: true,
    adaptiveHeight: true,
    prevArrow: $('.js-slider1-examp-prev-btn'),
    nextArrow: $('.js-slider1-examp-next-btn'),
    responsive: [
      {
        breakpoint: '767',
        settings: {
          slidesToShow: 2,
          adaptiveHeight: false
        }
      },
      {
        breakpoint: '1343',
        settings: {
          slidesToShow: 3,
          arrows: true,
          adaptiveHeight: false
        }
      }
    ]
  });
})();
(function () {
  $('.js-examp-second-slider').slick({
    dots: true,
    arrows: false,
    mobileFirst: true,
    adaptiveHeight: true,
    prevArrow: $('.js-slider2-examp-prev-btn'),
    nextArrow: $('.js-slider2-examp-next-btn'),
    responsive: [
      {
        breakpoint: '767',
        settings: {
          slidesToShow: 2,
          adaptiveHeight: false
        }
      },
      {
        breakpoint: '1343',
        settings: {
          slidesToShow: 3,
          arrows: true,
          adaptiveHeight: false
        }
      }
    ]
  });
})();
