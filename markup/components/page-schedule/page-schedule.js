(function () {
  $('.js-select-defaul').each(function () {
    $(this).SumoSelect();
  });
})();
$(window).on('load', function () {
  if ($('.js-select-custom-scroll .options').length) {
    new SimpleBar($('.js-select-custom-scroll .options')[0], {
      autoHide: false,
      scrollbarMinSize: 5
    });
    new SimpleBar($('.js-select-custom-scroll .options')[1], {
      autoHide: false,
      scrollbarMinSize: 5
    });
    new SimpleBar($('.js-select-custom-scroll .options')[2], {
      autoHide: false,
      scrollbarMinSize: 5
    });
    new SimpleBar($('.js-select-custom-scroll .options')[3], {
      autoHide: false,
      scrollbarMinSize: 5
    });
    new SimpleBar($('.js-select-custom-scroll .options')[4], {
      autoHide: false,
      scrollbarMinSize: 5
    });
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


