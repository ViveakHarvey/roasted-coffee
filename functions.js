var coffeeProducts = [];
var carts = [];
var sellerContainer = document.querySelector('.seller-container');
var cartContainer = document.querySelector('.cart-container');
var shopCardsList = document.querySelector('#allGrind');
var cartItems = document.querySelector('#cart-items');
let mediumCheckBox = document.querySelector('#Medium');
let darkCheckBox = document.querySelector('#Dark');
var filterCoffee = document.querySelector('#filterCoffee');
var carouselContainer = document.querySelector(".carousel-container");
var highlightDiv = document.querySelector(".highlight");
var translationValues = ['-0%', '-100%',];
var currentIndex = 0;
var coffeeProducts = [];
var frenchPress = document.querySelector('#frenchPress');
var mokaPot = document.querySelector('#mokaPot');
var wholeBean = document.querySelector('#wholeBean');


if(carouselContainer){
function updateTranslation() {
    carouselContainer.style.transform = 'translateX(' + translationValues[currentIndex] + ')';
    updateHighlight();
    currentIndex = (currentIndex + 1) % translationValues.length;
}

function updateHighlight() {
    var highlightDots = '';
    for (var i = 0; i < translationValues.length; i++) {
        var dotClass = i === currentIndex ? 'highlight-dot active' : 'highlight-dot';
        highlightDots += '<div class="' + dotClass + '" onclick="selectSlide(' + i + ')"></div>';
    }
    highlightDiv.innerHTML = highlightDots;
}

function selectSlide(index) {
    currentIndex = index;
    updateTranslation();
}

setInterval(updateTranslation, 4000);
updateTranslation();
}



var iconCartSpan = document.querySelector('#cartItemCount');


document.querySelector('#closeButton').addEventListener("click", function() {
  cartContainer.classList.add("moved");
});

document.querySelector('#shoppingIcon').addEventListener("click", function() {
  cartContainer.classList.remove("moved");
});

function updateShopCards() {
  shopCardsList.innerHTML = '';
  if (coffeeProducts.length > 0) {
    for (var i = 0; i < coffeeProducts.length; i++) {
      var product = coffeeProducts[i];
      var newProduct = document.createElement('div');
      newProduct.classList.add('sellerCard');
      newProduct.dataset.id = product.id;
      newProduct.innerHTML = '<img src="' + product.image + '" alt="product" class="productImage">\n<p class="productName">' + product.estate + '</p>\n<div class="roastPress">\n    <p>' + product.roast + ' ROAST</p>\n    <p class="leftBorder">' + product.grind.toUpperCase() + '</p>\n</div>\n<div class="weigthPrice">\n    <p>250 g</p>\n    <p class="leftBorder">₹ ' + product.price + '</p>\n</div>\n<button class="shopButton">Add to cart</button>\n ';
      shopCardsList.appendChild(newProduct);
    }
  }
}
if(shopCardsList){
shopCardsList.addEventListener('click', function(event) {
  var postionClick = event.target;
  if (postionClick.classList.contains('shopButton')) {
    var product_id = postionClick.parentElement.dataset.id;
    addToCart(product_id);
  }
});}

function bestseller(){
  sellerContainer.innerHTML = '';
  if (coffeeProducts.length > 0) {
    for (var i = 0; i < coffeeProducts.length; i++) {
      var product = coffeeProducts[i];
      if(product.bestSeller){
      var newProduct = document.createElement('div');
      newProduct.classList.add('sellerCard');
      newProduct.dataset.id = product.id;
      newProduct.innerHTML = '<img src="' + product.image + '" alt="product" class="productImage">\n<p class="productName">' + product.estate + '</p>\n<div class="roastPress">\n    <p>' + product.roast + ' ROAST</p>\n    <p class="leftBorder">' + product.grind.toUpperCase() + '</p>\n</div>\n<div class="weigthPrice">\n    <p>250 g</p>\n    <p class="leftBorder">₹ ' + product.price + '</p>\n</div>\n<button class="shopButton">Add to cart</button>\n ';
      sellerContainer.appendChild(newProduct);
      }
    }
  }
}
if(sellerContainer){
sellerContainer.addEventListener('click', function(event) {
  var postionClick = event.target;
  if (postionClick.classList.contains('shopButton')) {
    var product_id = postionClick.parentElement.dataset.id;
    addToCart(product_id);
  }
});
}

  function frenchPressContainer(){
    frenchPress.innerHTML = '';
    if (coffeeProducts.length > 0) {
      for (var i = 0; i < coffeeProducts.length; i++) {
        var product = coffeeProducts[i];
        if(product.grind=="French Press"){
        var newProduct = document.createElement('div');
        newProduct.classList.add('sellerCard');
        newProduct.dataset.id = product.id;
        newProduct.innerHTML = '<img src="' + product.image + '" alt="product" class="productImage">\n<p class="productName">' + product.estate + '</p>\n<div class="roastPress">\n    <p>' + product.roast + ' ROAST</p>\n    <p class="leftBorder">' + product.grind.toUpperCase() + '</p>\n</div>\n<div class="weigthPrice">\n    <p>250 g</p>\n    <p class="leftBorder">₹ ' + product.price + '</p>\n</div>\n<button class="shopButton">Add to cart</button>\n ';
        frenchPress.appendChild(newProduct);
        }
      }
    }
  } 
  if(frenchPress){
  frenchPress.addEventListener('click', function(event) {
    var postionClick = event.target;
    if (postionClick.classList.contains('shopButton')) {
      var product_id = postionClick.parentElement.dataset.id;
      addToCart(product_id);
    }
  });}

  function mokaPotContainer(){
    mokaPot.innerHTML = '';
    if (coffeeProducts.length > 0) {
      for (var i = 0; i < coffeeProducts.length; i++) {
        var product = coffeeProducts[i];
        if(product.grind=="Mokapot"){
        var newProduct = document.createElement('div');
        newProduct.classList.add('sellerCard');
        newProduct.dataset.id = product.id;
        newProduct.innerHTML = '<img src="' + product.image + '" alt="product" class="productImage">\n<p class="productName">' + product.estate + '</p>\n<div class="roastPress">\n    <p>' + product.roast + ' ROAST</p>\n    <p class="leftBorder">' + product.grind.toUpperCase() + '</p>\n</div>\n<div class="weigthPrice">\n    <p>250 g</p>\n    <p class="leftBorder">₹ ' + product.price + '</p>\n</div>\n<button class="shopButton">Add to cart</button>\n ';
        mokaPot.appendChild(newProduct);
        }
      }
    }
  } 
  if(mokaPot){
  mokaPot.addEventListener('click', function(event) {
    var postionClick = event.target;
    if (postionClick.classList.contains('shopButton')) {
      var product_id = postionClick.parentElement.dataset.id;
      addToCart(product_id);
    }
  });}

  function wholeBeanContainer(){
    wholeBean.innerHTML = '';
    if (coffeeProducts.length > 0) {
      for (var i = 0; i < coffeeProducts.length; i++) {
        var product = coffeeProducts[i];
        if(product.grind=="Whole Bean"){
        var newProduct = document.createElement('div');
        newProduct.classList.add('sellerCard');
        newProduct.dataset.id = product.id;
        newProduct.innerHTML = '<img src="' + product.image + '" alt="product" class="productImage">\n<p class="productName">' + product.estate + '</p>\n<div class="roastPress">\n    <p>' + product.roast + ' ROAST</p>\n    <p class="leftBorder">' + product.grind.toUpperCase() + '</p>\n</div>\n<div class="weigthPrice">\n    <p>250 g</p>\n    <p class="leftBorder">₹ ' + product.price + '</p>\n</div>\n<button class="shopButton">Add to cart</button>\n ';
        wholeBean.appendChild(newProduct);
        }
      }
    }
  } 
  if(wholeBean){
  wholeBean.addEventListener('click', function(event) {
    var postionClick = event.target;
    if (postionClick.classList.contains('shopButton')) {
      var product_id = postionClick.parentElement.dataset.id;
      addToCart(product_id);
    }
  });}
  function filterCoffeeContainer(){
    filterCoffee.innerHTML = '';
    if (coffeeProducts.length > 0) {
      for (var i = 0; i < coffeeProducts.length; i++) {
        var product = coffeeProducts[i];
        if(product.grind=="Filter  Coffee"){
        var newProduct = document.createElement('div');
        newProduct.classList.add('sellerCard');
        newProduct.dataset.id = product.id;
        newProduct.innerHTML = '<img src="' + product.image + '" alt="product" class="productImage">\n<p class="productName">' + product.estate + '</p>\n<div class="roastPress">\n    <p>' + product.roast + ' ROAST</p>\n    <p class="leftBorder">' + product.grind.toUpperCase() + '</p>\n</div>\n<div class="weigthPrice">\n    <p>250 g</p>\n    <p class="leftBorder">₹ ' + product.price + '</p>\n</div>\n<button class="shopButton">Add to cart</button>\n ';
        filterCoffee.appendChild(newProduct);
        }
      }
    }
  } 
  if(filterCoffee){
  filterCoffee.addEventListener('click', function(event) {
    var postionClick = event.target;
    if (postionClick.classList.contains('shopButton')) {
      var product_id = postionClick.parentElement.dataset.id;
      addToCart(product_id);
    }
  });}



function addToCart(product_id) {
  var isThisItemInCart = carts.findIndex(function(value) {
    return value.product_id == product_id;
  });
  if (carts.length <= 0) {
    carts = [{
      product_id: product_id,
      quantity: 1
    }];
  } else if (isThisItemInCart < 0) {
    carts.push({
      product_id: product_id,
      quantity: 1
    });
  } else {
    carts[isThisItemInCart].quantity = carts[isThisItemInCart].quantity + 1;
  }
  addCartToHTML();
  addCartToMemory();
}
function addCartToMemory(){
  localStorage.setItem('cart',JSON.stringify(carts));
}
var totalAmount = 0;

function addCartToHTML() {
  cartItems.innerHTML = '';
  var totalQuantity = 0;
  if (carts.length > 0) {
    for (var i = 0; i < carts.length; i++) {
      var item = carts[i];
      totalQuantity = totalQuantity + item.quantity;
      var newItem = document.createElement('div');
      newItem.classList.add('items');
      newItem.dataset.id = item.product_id;
      var positionProduct = coffeeProducts.findIndex(function(value) {
        return value.id == item.product_id;
      });
      var info = coffeeProducts[positionProduct];
      cartItems.appendChild(newItem);
      newItem.innerHTML = '<img src="' + info.image + '" alt="Item1" width="70px" class="itemImages">\n<div class="itemDescription">\n<p class="estateName">' + info.estate + '</p>\n    <p class="itemGrind">' + info.grind + '  <span class="itemRoast"> ' + info.roast + ' Roast</span></p>\n    <p class="itemRate">₹ ' + info.price + '</p>\n</div>\n<div class="itemCount">\n    <p class="upArrow">&lt;</p>\n    <p class="count">' + item.quantity + '</p>\n    <p class="downArrow">&lt;</p>\n</div>\n';
    }
  }
  iconCartSpan.innerText = totalQuantity;
}

cartItems.addEventListener('click', function(event) {
  var positionClick = event.target;
  if (positionClick.classList.contains('downArrow') || positionClick.classList.contains('upArrow')) {
    var product_id = positionClick.parentElement.parentElement.dataset.id;
    var type = 'downArrow';
    if (positionClick.classList.contains('upArrow')) {
      type = 'upArrow';
    }
    changeQuantityCart(product_id, type);
  }
});



function changeQuantityCart(product_id, type) {
  var positionItemInCart = carts.findIndex(function(value) {
    return value.product_id == product_id;
  });
  if (positionItemInCart >= 0) {
    var info = carts[positionItemInCart];
    switch (type) {
      case 'upArrow':
        carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
        break;
      default:
        var changeQuantity = carts[positionItemInCart].quantity - 1;
        if (changeQuantity > 0) {
          carts[positionItemInCart].quantity = changeQuantity;
        } else {
          carts.splice(positionItemInCart, 1);
        }
        break;
    }
  }
  addCartToHTML();
  addCartToMemory();
}


function initApp() {
  fetch('productList.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      coffeeProducts = data;
      if(shopCardsList){
      updateShopCards();}
      if(sellerContainer){
      bestseller();
      }
      if(frenchPress){
        frenchPressContainer();
      }
      if(mokaPot){
        mokaPotContainer();
      }
      if(wholeBean){
        wholeBeanContainer();
      }
      if(filterCoffee){
        filterCoffeeContainer();
      }
      if(localStorage.getItem('cart')){
        carts = JSON.parse(localStorage.getItem('cart'));
        addCartToHTML();
      }
    });
}

initApp();

