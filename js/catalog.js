
var products = [
    {
      name: "Product 1",
      image: "images/scarf.jpg",
      prices: { new: 100, old: 120 },
      tieser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Product 2",
      image: "images/scarf.jpg",
      prices: { new: 80, old: 90 },
      tieser: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Product 3",
      image: "images/scarf.jpg",
      prices: { new: 150, old: 170 },
      tieser: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        name: "Product 4",
        image: "images/scarf.jpg",
        prices: { new: 100, old: 120 },
        tieser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      }
  ];

function render(products){

    var productsList = document.getElementsByClassName("card-list")[0];
    var productsCode = '';

    products.forEach((product) => {
        var price = (product.prices.new > 0) ? `<h2 class="price">${product.prices.new} руб. </h2><h2 class="old-price">${product.prices.old} руб. </h2>` : `<h2 class="price">${product.prices.old} руб. </h2>`;
        
        productsCode +=`
                <div class="product info new_prod">
                <div class="block">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="block2">
                        <div class="heart-back-cont">
                            <div title="Like" class="heart-container">
                            <input id="Give-It-An-Id" class="checkbox" type="checkbox">
                            <div class="svg-container">
                                <svg xmlns="http://www.w3.org/2000/svg" class="svg-outline" viewBox="0 0 24 24">
                                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                                    </path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="svg-filled" viewBox="0 0 24 24">
                                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                                    </path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="svg-celebrate">
                                    <polygon points="10,10 20,20"></polygon>
                                    <polygon points="10,50 20,50"></polygon>
                                    <polygon points="20,80 30,70"></polygon>
                                    <polygon points="90,10 80,20"></polygon>
                                    <polygon points="90,50 80,50"></polygon>
                                    <polygon points="80,80 70,70"></polygon>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <h3>${product.name}</h3>
                    <p>${product.tieser.slice(0,120)}...</p>
                </div>
            </div>
                    <div class="prices">
                        <h2>${price}</h2>
                    </div>
                    <div class="btns">
                    <button type="button" class="butt showinfo" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Подробнее →
                  </button>
                  
                  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="staticBackdropLabel">О товаре</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
          <div class="slider lazy">
            <div class="">
                <img src="images/scarf.jpg" alt="">
            </div>
            <div class="">
                <img src="images/slippers.jpg" alt="">
            </div>
            <div class="">
                <img src="images/socks.jpg" alt="">
            </div>
          </div>
            <div class="description">
              <h3>Название товара</h3>
              <div class="heart-back-cont">
                <div title="Like" class="heart-container">
                  <input id="Give-It-An-Id" class="checkbox" type="checkbox">
                  <div class="svg-container">
                      <svg xmlns="http://www.w3.org/2000/svg" class="svg-outline" viewBox="0 0 24 24">
                          <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                          </path>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" class="svg-filled" viewBox="0 0 24 24">
                          <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                          </path>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="svg-celebrate">
                          <polygon points="10,10 20,20"></polygon>
                          <polygon points="10,50 20,50"></polygon>
                          <polygon points="20,80 30,70"></polygon>
                          <polygon points="90,10 80,20"></polygon>
                          <polygon points="90,50 80,50"></polygon>
                          <polygon points="80,80 70,70"></polygon>
                      </svg>
                  </div>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iusto, modi vitae dolorem veniam in. Quidem, rem tenetur, placeat numquam earum aliquam necessitatibus alias, in iusto veniam perferendis saepe sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloribus autem sunt possimus nihil. Incidunt ipsa molestiae assumenda eos animi similique amet accusamus unde earum quod deserunt beatae, vero ab!</p>
              <div class="atricul"><b>Артикул товара: </b><i>#article</i></div>
              <h6>Выберите размер:</h6>
              <div class="radio-inputs">
                <label class="radio">
                  <input type="radio" name="radio" checked="">
                  <span class="name">L</span>
                </label>
                <label class="radio">
                  <input type="radio" name="radio">
                  <span class="name">S</span>
                </label>
                <label class="radio">
                  <input type="radio" name="radio">
                  <span class="name">M</span>
                </label>
              </div>
              <div class="prices">
                <h2 class="price">${price} </h2>
            </div>
            <button class="butt cart">В корзину</button>
            <h6>Наличие: в наличии</h6>
             </div>
      </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        </div>
                      </div>
                    </div>
                  </div>
                        <button class="butt cart">В корзину</button>
                    </div>
        </div>`;
    });

    productsList.insertAdjacentHTML("beforeend", productsCode);
}

let button_render = document.querySelector(".render");
    button_render.addEventListener("click", () => {
        render(products);
    });

    // let button = document.getElementById('r_button'); 
    // button.addEventListener("click", () => {
    //   let reviews = document.querySelector('.reviews');
    //   reviews.scrollIntoView({ behavior: "smooth" });
    // });


    
     function addToCart(button) {
      if (button.classList.contains("checked")) {
        alert("Товар удалён из корзины");
        button.classList.remove("checked");
        button.innerText = "В корзину";
      } else {
        button.classList.add("checked");
        button.innerText = "В корзине";
      }
    }
    
    let cartButtons = [...document.querySelectorAll(".cart")];
    
    if (cartButtons) {
      cartButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
          addToCart(event.target);
        });
      });
    }




let checkbox = document.querySelector('.checkbox');
let heart_cont = document.querySelector('.heart-container');
checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        checkbox.classList.add("checked");
        heart_cont.classList.add("checked");
        alert("Товар добавлен в избранное");
    }
    else{
        alert("Товар удалён из избранного");
        checkbox.classList.remove("checked");
        heart_cont.classList.remove("checked");
    }
  });

  $('.lazy').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1
  });