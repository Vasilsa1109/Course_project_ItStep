function render(){
    var productsList = document.getElementsByClassName("card-list")[0];
    var productsCode = '';
    var ids = window.localStorage.getItem("favorites") ? JSON.parse(window.localStorage.getItem("favorites")) : [];
    var ids_cart = window.localStorage.getItem("cart_items") ? JSON.parse(window.localStorage.getItem("cart_items")) : [];
    var filtered = products.filter((product)=>{
        return ids.includes(product.id);
    });
    if (filtered.length == 0) {
    const node = document.createElement("h1");
    const textnode = document.createTextNode("Список товаров в корзине пуст. Сохраняйте понравившиеся товары, нажав на кнопку");
    node.appendChild(textnode);
    productsList.appendChild(node);
    }


    filtered.forEach((product) => {
      var cls = ids.includes(product.id) ? "inFavorite" : "";
      var cls_cart = ids_cart.includes(product.ids_cart) ? "inCart" : "";
      var price =
        product.prices.new > 0
          ? `<h2 class="price">${product.prices.new} руб. </h2><h2 class="old-price">${product.prices.old} руб. </h2>`
          : `<h2 class="price">${product.prices.old} руб. </h2>`;
  
      var buttonHtml = `class="butt cart ${cls_cart}">${
        ids_cart.includes(product.ids_cart)
          ? "Товар в корзине"
          : "Добавить в корзину"
        }`;
        productsCode += `
                <div class="product info new_prod">
                <div class="block">
                    <img src="${product.image1}" alt="${product.name}">
                    <div class="block2">
                        <div class="heart-back-cont">
                            <div title="Like" class="heart-container">
                            <button onclick="addToFavorite(${
                              product.id
                            }, event)" class="${cls}">
                                <svg xmlns="http://www.w3.org/2000/svg" class="svg-outline" viewBox="0 0 24 24">
                                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <h3>${product.name}</h3>
                    <p>${product.tieser.slice(0, 120)}...</p>
                </div>
            </div>
                    <div class="prices">
                        <h2>${price}</h2>
                    </div>
                    <button onclick="addToCart(${
                      product.ids_cart
                    }, event)" ${buttonHtml}</button>
                    <h6>Наличие: в наличии</h6>
                  </div>
                  `;
    });
    
    productsList.insertAdjacentHTML("beforeend", productsCode);
}

function addToFavorite(productId, event) {
  let ids = window.localStorage.getItem("favorites")
    ? JSON.parse(window.localStorage.getItem("favorites"))
    : [];
  let cls = "inFavorite";
  let el = event.target;
  if (event.target.tagName == "svg") {
    el = event.target.parentElement;
  }

  if (ids.length > 0) {
    let index = ids.indexOf(productId);

    if (index != -1) {
      ids.splice(index, 1);
      el.classList.remove(cls);
    } else {
      ids.push(productId);
      el.classList.add(cls);
    }
  } else {
    ids.push(productId);
    el.classList.add(cls);
  }
  window.localStorage.setItem("favorites", JSON.stringify(ids));
}

function addToCart(productId, event) {
  let ids_cart = window.localStorage.getItem("cart_items")
    ? JSON.parse(window.localStorage.getItem("cart_items"))
    : [];
  let products_sizes = window.localStorage.getItem("products_sizes")
    ? JSON.parse(window.localStorage.getItem("products_sizes"))
    : [];
  let cls_cart = "inCart";
  let el = event.target;
  // if(event.target.tagName == "svg"){
  //   el = event.target.parentElement;
  // }

  let radios = [
    ...el.previousElementSibling.previousElementSibling.getElementsByClassName(
      "product-size"
    ),
  ];

  let sizeError = true;
  let checkedSize = null;

  radios.forEach((radio) => {
    if (radio.checked) {
      sizeError = false;
      checkedSize = radio.value;
    }
  });

  if (!sizeError) {
    if (ids_cart.length > 0) {
      let index = ids_cart.indexOf(productId);

      if (index != -1) {
        ids_cart.splice(index, 1);
        el.classList.remove(cls_cart);
        el.innerText = "Добавить в корзину";
        products_sizes[productId] = null;
      } else {
        ids_cart.push(productId);
        el.classList.add(cls_cart);
        el.innerText = "Товар в корзине";
        products_sizes[productId] = checkedSize;
      }
    } else {
      ids_cart.push(productId);
      el.classList.add(cls_cart);
      el.innerText = "Товар в корзине";
      products_sizes[productId] = checkedSize;
    }

    window.localStorage.setItem("cart_items", JSON.stringify(ids_cart));
    window.localStorage.setItem(
      "products_sizes",
      JSON.stringify(products_sizes)
    );
  } else {
    alert("Выберите размер");
  }
}

document.addEventListener("DOMContentLoaded", function(){
    render();
  });
