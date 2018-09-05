(function () {
  $('.js-select-defaul').each(function () {
    $(this).SumoSelect({    nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
    });
  });
})();
$(window).on('load', function () {
  if ($('.js-select-custom-scroll .options').length) {
    new SimpleBar($('.js-select-custom-scroll .options')[0], {
      autoHide: false,
      scrollbarMinSize: 5,
          nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
    });
    if ($('.js-select-custom-scroll .options').length > 4) {
      new SimpleBar($('.js-select-custom-scroll .options')[1], {
        autoHide: false,
        scrollbarMinSize: 5,
            nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
      });
      new SimpleBar($('.js-select-custom-scroll .options')[2], {
        autoHide: false,
        scrollbarMinSize: 5,
            nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
      });
      new SimpleBar($('.js-select-custom-scroll .options')[3], {
        autoHide: false,
        scrollbarMinSize: 5,
            nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
      });
      new SimpleBar($('.js-select-custom-scroll .options')[4], {
        autoHide: false,
        scrollbarMinSize: 5,
            nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
      });
    }

  }
  var toggleTextButton = function () {
    $('.js-show-filter').on('click', function () {
      var text = $(this).find('span').text();
      $(this).find('span').text(function () {
        return text === 'показать еще фильтры' ? 'Скрыть фильтры' : 'показать еще фильтры';
      });
      $('.js-filter').slideToggle('fast');
    });
  };
  toggleTextButton();
});


