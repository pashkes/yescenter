(function () {
  $('.js-toggle-answer').on('click', function () {
    console.log($(this).next());
    $(this).next().slideToggle();
    if ($(this).text() === 'читать ответ') {
      $(this).text('Скрыть ответ');
    } else {
      $(this).text('читать ответ');
    }
  });
})();

