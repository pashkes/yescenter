(function () {
  $('.js-partners-slider').slick({
    arrows: false,
    dots: true,
    mobileFirst: true,
    slidesToShow: 2,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1343,
      settings: {
        slidesToShow: 6,
        dots: false,
        arrows: true,
        prevArrow: $('.js-partners-prev-btn'),
        nextArrow: $('.js-partners-next-btn'),
      }
    }]
  });

  $('.js-partners-long-slider').slick({
    arrows: false,
    dots: true,
    mobileFirst: true,
    slidesToShow: 2,
    rows: 3,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1343,
      settings: {
        slidesToShow: 6,
        dots: false,
        arrows: true,
        prevArrow: $('.js-partners-prev-btn'),
        nextArrow: $('.js-partners-next-btn'),
      }
    }]
  });

})();
