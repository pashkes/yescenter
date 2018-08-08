(function () {
  $('.js-video-data-slider').slick({
    arrows: false,
    dots: true,
    mobileFirst: true,
    appendDots: $('.video-data__dots'),
    responsive: [{
      breakpoint: 767,
      settings: {
        variableWidth: true
      }
    },
    {
      breakpoint: 1343,
      settings: {
        arrows: true,
        variableWidth: true,
        prevArrow: $('.js-video-prev-btn'),
        nextArrow: $('.js-video-next-btn')
      }
    }]
  });
})();
