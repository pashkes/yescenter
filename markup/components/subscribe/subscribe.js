(function () {
  $('.subscribe').on('submit', function (evt) {
    evt.preventDefault();
    $('#subscribe').modal('hide');
    setTimeout(function () {
      $('#order-success').modal('show');
    }, 1000);
  });
})();

