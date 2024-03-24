let m = document.querySelector(".menu_icon");
let nav = document.querySelector(".main-menu");
let cont2 =  document.querySelector(".cont2");

if(m){
    m.addEventListener("click", (e) => {
        if(m.classList.contains("pushed")){
            m.classList.remove("pushed");
            nav.classList.remove("opened");
        }
        else{
            m.classList.add("pushed");
            nav.classList.add("opened");
        }
    });
}

$('.s1').slick({
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
    event.preventDefault();
    let error = false;
    var name = document.getElementById('inputEmail');
    var phone = document.getElementById('inputPhone');
    var message = document.getElementById('inputMessage');
    var checkbox = document.getElementById('gridCheck');
    if(name.value.trim() === '' || phone.value.trim() === '' || message.value.trim() === ''  ){
      alert("Введите все поля правильно.");
      return;
    }
    if(!checkbox){
      alert("Нажмите checkbox-кнопку");
      return;
    }
    if(!name.value ){
      name.classList.add("error");
      error = true;
    }
    let phoneTemplate = /^\+375[0-9]{9}$/g;
    if(!phone.value || !phoneTemplate.test(phone.value)){
      phone.classList.add("error");
      error = true;
    }
    if(!message.value){
      message.classList.add("error");
      error = true;
    }
    if(!checkbox.checked){
      checkbox.classList.add("error");
      error = true;
    }
    if(error)
    {
      alert('Форма заполнена неверно. Введите все поля правильно.');
    }
    else{
      name.classList.remove("error");
      phone.classList.remove("error");
      message.classList.remove("error");
      checkbox.classList.remove("error");
      alert('Форма заполнена верно');
    }
  }

  const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      // удалим у кнопки класс btn-up_hide
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      // добавим к кнопке класс btn-up_hide
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      // при прокрутке содержимого страницы
      window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
        scrollY > 400 ? this.show() : this.hide();
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.btn-up').onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();


  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = { threshold: [0.4] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.reason');
  let elements_ = document.querySelectorAll('.block1');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

  function onEntry1(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options1 = { threshold: [0.4] };
  let observer1 = new IntersectionObserver(onEntry1, options1);
  let elements1 = document.querySelectorAll('.examples');
  let elements_1 = document.querySelectorAll('main');
  
  for (let elm1 of elements1) {
    observer1.observe(elm1);
  }


  function onEntry2(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options2 = { threshold: [0.4] };
  let observer2 = new IntersectionObserver(onEntry2, options2);
  let elements2 = document.querySelectorAll('.footer');
  let elements_2 = document.querySelectorAll('footer');
  
  for (let elm2 of elements2) {
    observer2.observe(elm2);
  }


  let button = document.getElementById('r_button'); 
  button.addEventListener("click", () => {
    let reviews = document.querySelector('.reviews');
    reviews.scrollIntoView({ behavior: "smooth" });
  });



  function insertStars() {
    const ratingContainers = document.querySelectorAll('.rating');

    ratingContainers.forEach(container => {
      const input = container.querySelector('input[name="rating"]');
      const starsValue = parseInt(input.value);
      const starsHtml = '\u2605'.repeat(starsValue) + '\u2606'.repeat(5 - starsValue);
      container.insertAdjacentHTML('beforeend', starsHtml);
    });
  }

  window.addEventListener('load', () => {
    insertStars();
  });