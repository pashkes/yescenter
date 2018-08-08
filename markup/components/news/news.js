(function () {
  var TABLET_SIZE = 767;
  var newsSlider = $('.js-news-slide');
  var newsSliderSettigs = {
    arrows: false,
    dots: true,
    mobileFirst: true,
    adaptiveHeight: true,
    appendDots: $('.news__dots')
  };
  // включение слайдера на мобильном
  function slickMobile(slider, settings) {
    if ($(window).width() > TABLET_SIZE) {
      if (slider.hasClass('slick-initialized')) {
        slider.slick('unslick');
      }
      return false;
    }
    if (!slider.hasClass('slick-initialized')) {
      return slider.slick(settings);
    }
  }
  $(window).on('load resize', function () {
    slickMobile(newsSlider, newsSliderSettigs);
  });
})();
