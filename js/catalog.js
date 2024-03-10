
let products = [
    { name: "Наушники", image: URL(""), price: 10},
    { name: "Наушники", image: URL(""), price: 10},
    { name: "Наушники", image: URL(""), price: 10},
  ];

function render(products){
    var productsList = document.getElementsByClassName("card-list")[0];
    var productsCode = '';

    products.forEach((product) => {
        var price = (product.prices.new > 0) ? `<h2 class="price">${product.prices.new} руб. </h2><h2 class="old-price">${product.prices.old} руб. </h2>` : `<h2 class="price">${product.prices.old} руб. </h2>`;
        
        productsCode +=`
                <div class="product info">
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
                <h3>Название</h3>
                <p>${product.tieser.slice(0,120)}...</p>
                <div class="prices">
                    <h2>${price}</h2>
                </div>
                <div class="bttns">
                <button class="butt">Подробнее →</button>
                <button class="butt" onclick="document.location='cart.html'">В корзину</button>
                </div>
            </div>
        </div>`;
    });

    productsList.insertAdjacentHTML("beforeend", productsCode);
}

let button = document.querySelector(".render");

if(button){
    button.addEventListener("click", (e) => {
        render(products);
    });
}


function productInfo(e) {
    
}

function addToCart(event){
    var productName = event.target.dataset.productName;
    var productPrice = event.target.dataset.productPrice;
    var cartItem = document.createElement('div');
}

let cart = document.querySelector(".cart");
if(cart){
   cart.addEventListener("click", (e) => {
       addToCart(e);
})};

var checkbox = document.getElementsByClassName('checkbox');
if(checkbox.checked){
    alert("Товар добавлен в избранное");
}