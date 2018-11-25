(function () {
  $('.js-video-data-slider').slick({
    arrows: false,
    dots: true,
    mobileFirst: true,
    appendDots: $('.video-data__dots'),
    responsive: [{
      breakpoint: 767,
      settings: {
        variableWidth: true
      }
    },
      {
        breakpoint: 1343,
        settings: {
        arrows: true,
        variableWidth: true,
        prevArrow: $('.js-video-prev-btn'),
        nextArrow: $('.js-video-next-btn')
      }
    }]
  });
})();
( function() {

  var youtube = document.querySelectorAll( ".youtube" );

  for (var i = 0; i < youtube.length; i++) {

    var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";

    var image = new Image();
    image.src = source;
    image.alt = youtube[i].dataset.title;
    image.addEventListener( "load", function() {
      youtube[ i ].appendChild( image );
    }( i ) );

    youtube[i].addEventListener( "click", function() {

      var iframe = document.createElement( "iframe" );

      iframe.setAttribute( "frameborder", "0" );
      iframe.setAttribute( "allowfullscreen", "" );
      iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

      this.innerHTML = "";
      this.appendChild( iframe );
    } );
  };

} )();
