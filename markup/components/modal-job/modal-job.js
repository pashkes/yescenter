(function () {
  function addEventFileRemove() {
    $(this).css('z-index', '-1');
    $('.js-attach-file').find('span').addClass('grey');
    $(this).removeClass('remove-icon');
    $(this).addClass('attach-icon');
    $('.js-attach-file').find('span').text('Прикрепить резюме');
    $('.js-select-remove-file').off('click', addEventFileRemove);
  }

  $('.js-file-field').on('change', function (e) {
    if (!e.target.files[0]) {
      return false;
    }
    var fileName = e.target.files[0].name;
    $(this).prev().removeClass('grey');
    $(this).prev().text(fileName);
    $('.js-select-remove-file').css('z-index', '1');
    $('.js-select-remove-file').addClass('remove-icon');
    $('.js-select-remove-file').on('click', addEventFileRemove);
  });
})();
