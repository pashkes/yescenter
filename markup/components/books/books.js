$('.js-books-slider').slick({
  dots: true,
  arrows: false,
  mobileFirst: true,
  prevArrow: $('.js-books-prev-btn'),
  nextArrow: $('.js-books-next-btn'),
  variableWidth: true,
  appendDots: $('.js-book-dots'),
  responsive: [
    {
      breakpoint: '1343',
      settings: {
        arrows: true
      }
    }
  ]
});
