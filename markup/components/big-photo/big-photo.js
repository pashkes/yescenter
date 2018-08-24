(function () {
  let sliderStatus = 'no-initialize';
  let bigPhoto = $('.js-big-photo');
  $('.js-show-big-photo').on('click', function (evt) {
    evt.preventDefault();
    $('#big-photo').modal('show');
    if (sliderStatus === 'no-initialize') {
      let images = [];
      let alts = [];
      $('.js-show-big-photo').each(
        function () {
          images.push($(this).attr('href'));
          alts.push($(this).find('img').attr('alt'));
        }
      );
      images.forEach(function (item, index) {
        let li = $('<li class="big-photo__slide">');
        let img = $('<img class="big-photo__img">');
        let caption = $('<span class="big-photo__caption">');
        let imgInner = $('<div class="big-photo__img-inner">');
        let imgWrapper = $('<div class="big-photo__img-wrapper">');
        caption.text(alts[index]);
        img.attr('src', item);
        img.attr('alt', alts[index]);
        img.appendTo(imgInner);
        imgInner.appendTo(imgWrapper);
        li.append(imgWrapper);
        caption.appendTo(li);
        bigPhoto.append(li);
      });
      bigPhoto.slick(
        {
          dots: true,
          arrows: false,
          mobileFirst: true,
          responsive: [{
            breakpoint: 1343,
            settings: {
              centerMode: true,
              centerPadding: '120px',
              dots: false,
              arrows: true,
              prevArrow: '.js-big-photo-prev-btn',
              nextArrow: '.js-big-photo-next-btn',
              variableWidth: true
            }
          }]
        }
      );
    }
    sliderStatus = 'initialize';
    if (sliderStatus === 'initialize') {
      let indexPhoto = $(evt.target).closest('.js-photo').index();
      bigPhoto.slick('slickGoTo', indexPhoto);
    }
  });
  $('.js-show-all').on('click', function (evt) {
    evt.preventDefault();
    $('.js-big-photo').slick('unslick');
    sliderStatus = 'no-initialize';
  });
})();
