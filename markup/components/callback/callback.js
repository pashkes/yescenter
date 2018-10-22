$('#callback-form').on('submit', function (event) {
  event.preventDefault();
  $('#callback').modal('hide');
  setTimeout(function () {
    $('#success-sended').modal('show');
  }, 1000);
});
$('#order-course-form').on('submit', function (event) {
  event.preventDefault();
  $('#order-course').modal('hide');
  setTimeout(function () {
    $('#success-sended').modal('show');
  }, 1000);
});
$('#trial-lesson').on('submit', function (event) {
  event.preventDefault();
  $('#trial-lesson').modal('hide');
  setTimeout(function () {
    $('#success-sended').modal('show');
  }, 1000);
});
(function () {
  $('.js-open-agreement').on('click', function () {
    setTimeout(function () {
      $('body').addClass('modal-open');
    }, 500);
  });
})();
