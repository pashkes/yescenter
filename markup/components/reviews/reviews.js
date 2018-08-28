(function () {
  var sliderReviews = $('.js-reviews-slider').slick({
    dots: true,
    arrows: false,
    mobileFirst: true,
    appendDots: $('.reviews__dots'),
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 767,
      settings: {
        variableWidth: true
      }
    },
    {
      breakpoint: 1343,
      settings: {
        variableWidth: false,
        arrows: true,
        slidesToShow: 3,
        prevArrow: $('.js-reviews-prev-btn'),
        nextArrow: $('.js-reviews-next-btn'),
        adaptiveHeight: true,
      }
    }
      ]
  });
  $('.review__message p').readmore({
    moreLink: '<button type="button" class="review__read-more">читать отзыв</a>',
    lessLink: '<button type="button" class="review__read-more">Свернуть</a>',

  });
  $('.review__message').on('click', function () {
    $('.js-reviews-slider').find('.slick-list').height('auto');
  });
})();

