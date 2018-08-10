(function () {
  $('.js-teachers-video').slick({
    dots: true,
    arrows: false,
    mobileFirst: true,
    appendDots: $('.teachers-video__dots'),
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
        prevArrow: $('.js-teachers-video-prev-btn'),
        nextArrow: $('.js-teachers-video-prev-btn')
      }
    }]
  });
})();
