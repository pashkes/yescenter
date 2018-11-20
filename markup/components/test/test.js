(function () {
  var langs = Array.from(document.querySelectorAll('.js-lang-select'));
  var oldSection = document.querySelector('.js-old');
  langs.forEach((element)=>{
    element.addEventListener('change', function (evt) {
        var value = evt.target.value;
        if (value !== 'italian') {
          oldSection.style.display = 'block';
        } else  {
          oldSection.style.display = 'none';
        }
      })
  });
})();
