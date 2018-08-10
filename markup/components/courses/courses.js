(function () {
  let lastItemReview;
  $('.js-reviews-list').on('change', function () {
    let currentItem = $(this).find('option:selected').val();
    $('.js-current-lang').addClass(currentItem);
    lastItemReview = currentItem;
  });


  var DESCTOP_SCREEN = 1343;
  var langSlider = $('.js-slider-course');
  var langSliderSettigs = {
    arrows: false,
    dots: true,
    mobileFirst: true,
    adaptiveHeight: true,
    appendDots: $('.courses__dots'),

    responsive: [{
      breakpoint: 767,
      settings: {
        variableWidth: true,
        adaptiveHeight: false
      }
    }]
  };
  // включение слайдера на мобильном
  function slickMobile(slider, settings) {
    if ($(window).width() > DESCTOP_SCREEN) {
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
