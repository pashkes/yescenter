(function () {
  var TABLET_SCREEN = 767;
  var langSlider = $('.js-form-education-slider');
  var langSliderSettigs = {
    arrows: false,
    dots: true,
    mobileFirst: true,
    adaptiveHeight: true
  };
  // включение слайдера на мобильном
  function slickMobile(slider, settings) {
    if ($(window).width() > TABLET_SCREEN) {
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
    slickMobile(langSlider, langSliderSettigs);
  });
})();
