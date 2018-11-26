(function () {
  (function () {
    $('.js-knowledge-slider').slick({
      arrows: false,
      dots: true,
      mobileFirst: true,
      appendDots: $('.js-knnowledge-dots'),
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 959,
          settings: {
            slidesToShow: 3,
            arrows: true,
            dots: false,
            prevArrow: $('.js-prev-btn'),
            nextArrow: $('.js-next-btn')
          }
        }
      ]
    });
  })();

})();
