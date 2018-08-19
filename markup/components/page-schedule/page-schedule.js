(function () {
  $('.js-select-defaul').each(function () {
    $(this).SumoSelect();
  });
})();
$(window).on('load', function () {
  if ($('.js-select-custom-scroll .options').length) {
    new SimpleBar($('.js-select-custom-scroll .options')[0], {autoHide: false,
      scrollbarMinSize: 5
    });
    new SimpleBar($('.js-select-custom-scroll .options')[1], {autoHide: false,
      scrollbarMinSize: 5
    });
    new SimpleBar($('.js-select-custom-scroll .options')[2], {autoHide: false,
      scrollbarMinSize: 5
    });
    new SimpleBar($('.js-select-custom-scroll .options')[3], {autoHide: false,
      scrollbarMinSize: 5
    });
    new SimpleBar($('.js-select-custom-scroll .options')[4], {autoHide: false,
      scrollbarMinSize: 5
    });
  }
  var toggleTextButton = function () {
    var click = 1;
    $('.js-show-filter').on('click', function () {
      if (click % 2 === 0) {
        $(this).find('span').text('Скрыть фильтры');
        $('.js-filter').slideDown();
      } else {
        $(this).find('span').text('показать еще фильтры');
        $('.js-filter').slideUp();
      }
      click = click + 1;
    });
  };
  toggleTextButton();
});

