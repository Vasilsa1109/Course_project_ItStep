let m = document.querySelector(".menu_icon");
let nav = document.querySelector(".main-menu");
let cont2 =  document.querySelector(".cont2");

if(m){
    m.addEventListener("click", (e) => {
        if(m.classList.contains("pushed")){
            m.classList.remove("pushed");
            nav.classList.remove("opened");
            cont2.classList.remove("hidden");
        }
        else{
            m.classList.add("pushed");
            nav.classList.add("opened");
            cont2.classList.add("hidden");
        }
    });
}

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

  ( function($) {
  
    $(document).ready(function() {
      
      var s           = $('.slider'),
          sWrapper    = s.find('.slider-wrapper'),
          sItem       = s.find('.slide'),
          btn         = s.find('.slider-link'),
          sWidth      = sItem.width(),
          sCount      = sItem.length,
          slide_date  = s.find('.slide-date'),
          slide_title = s.find('.slide-title'),
          slide_text  = s.find('.slide-text'),
          slide_more  = s.find('.slide-more'),
          slide_image = s.find('.slide-image img'),
          sTotalWidth = sCount * sWidth;
      
      sWrapper.css('width', sTotalWidth);
      sWrapper.css('width', sTotalWidth);
      
      var clickCount  = 0;
      
      btn.on('click', function(e) {
        e.preventDefault();
  
        if( $(this).hasClass('next') ) {
          
          ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
        } else if ( $(this).hasClass('prev') ) {
          
          ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
        }
        TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })
  
  
        //CONTENT ANIMATIONS
  
        var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
        var toProperties = {autoAlpha:0.8, x:'0', y:'0'};
  
        TweenLite.fromTo(slide_image, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
        TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
        TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
        TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
        TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);
  
      });
            
    });
  })(jQuery);
  
  $('.overlay').addClass('overlay-blue');


  $('.reviews fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });


  $('.slider_').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
      
  function sendForm(event) {
    let error = 0;
  
    error += validate(
      event.target[0],
      /^[А-Я][а-яА-Я\s]*[а-я]$/g,
      "Введите корректное имя"
    );
    error += validate(
      event.target[1],
      /^\+375[0-9]{9}$/g,
      "Введите правильный номер телефона (+375ХХХХХХХХХ)"
    );
    if(event.target[2] == ""){
      error += validate(
        event.target[2],
        "Введите корректное сообщение"
      )};
};

function validate(element, regexTemplate, errorMessage) {
  let val = element.value;
  let errorField = document.createElement("div");
  errorField.classList.add("error");

  if (element.nextElementSibling) {
    element.nextElementSibling.remove();
    element.classList.remove("error");
  }

  if (!regexTemplate.test(val)) {
    errorField.innerText = errorMessage;
    element.parentElement.append(errorField);
    element.classList.add("error");
    return true;
  } else {
    return false;
  }
}