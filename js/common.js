let m = document.querySelector(".menu_icon");
let nav = document.querySelector(".main-menu");
let cont2 = document.querySelector(".cont2");

if (m) {
  m.addEventListener("click", (e) => {
    if (m.classList.contains("pushed")) {
      m.classList.remove("pushed");
      nav.classList.remove("opened");
    } else {
      m.classList.add("pushed");
      nav.classList.add("opened");
    }
  });
}

$(".s1").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: false,
  variableWidth: false,
});

$(".overlay").addClass("overlay-blue");

$(".reviews fade").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
});

$(".slider_").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
});

function sendForm(event) {
  event.preventDefault();
  var error2 = false;
  var name = document.getElementById("inputEmail");
  var phone = document.getElementById("inputPhone");
  var message = document.getElementById("inputMessage");
  if (!name.value) {
    name.classList.add("error");
    error2 = true;
  }
  let phoneTemplate = /^\+375[0-9]{9}$/g;
  if (!phone.value || !phoneTemplate.test(phone.value)) {
    phone.classList.add("error");
    error2 = true;
  }
  if (!message.value) {
    message.classList.add("error");
    error2 = true;
  }
  if (error2) {
    alert("Форма заполнена неверно. Введите все поля правильно.");
  } else {
    name.classList.remove("error");
    phone.classList.remove("error");
    message.classList.remove("error");
    alert("Форма заполнена верно");
  }
}

function sendFormOrder(event) {
  let deliveryOptions = document.querySelectorAll(".delivery-options");
  let selected1 = false;
  let selected2 = false;
  var error = false;

  deliveryOptions.forEach((options) => {
    let radioButtons = options.querySelectorAll("input[type=radio]");

    radioButtons.forEach((radio) => {
      if (radio.checked) {
        if (radio.getAttribute("name") === "radio") {
          selected1 = true;
        } else if (radio.getAttribute("name") === "radio2") {
          selected2 = true;
        }
      }
    });
  });

  if (!selected1 || !selected2 || error) {
    alert("Выберите все пункты");
  } 
  if (!error && selected1 && selected2) {
    alert("Заказ успешно отправлен");
  }
}

const btnUp = {
  el: document.querySelector(".btn-up"),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove("btn-up_hide");
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add("btn-up_hide");
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener("scroll", () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector(".btn-up").onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  },
};

btnUp.addEventListener();

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = { threshold: [0.4] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".reason");
let elements_ = document.querySelectorAll(".block1");

for (let elm of elements) {
  observer.observe(elm);
}

function onEntry2(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options2 = { threshold: [0.4] };
let observer2 = new IntersectionObserver(onEntry2, options2);
let elements2 = document.querySelectorAll(".footer");
let elements_2 = document.querySelectorAll("footer");

for (let elm2 of elements2) {
  observer2.observe(elm2);
}

let button = document.getElementById("r_button");
button.addEventListener("click", () => {
  let reviews = document.querySelector(".reviews");
  reviews.scrollIntoView({ behavior: "smooth" });
});

function insertStars() {
  const ratingContainers = document.querySelectorAll(".rating");

  ratingContainers.forEach((container) => {
    const input = container.querySelector('input[name="rating"]');
    const starsValue = parseInt(input.value);
    const starsHtml =
      "\u2605".repeat(starsValue) + "\u2606".repeat(5 - starsValue);
    container.insertAdjacentHTML("beforeend", starsHtml);
  });
}

window.addEventListener("load", () => {
  insertStars();
});
