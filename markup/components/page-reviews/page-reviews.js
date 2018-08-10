(function () {

  $('.js-reviews-list').on('change', function () {
    let amountReviews = $(this).find('option:selected').val();
    let currentTextOption = $(this).find('option:selected').text();
    $('.js-name-list-reviews').text(currentTextOption);
    $('.js-amount-list-reviews').text(amountReviews);
  });
})();
