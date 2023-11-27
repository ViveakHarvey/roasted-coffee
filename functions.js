let shopCardsList = document.querySelector('.shopCards');
let cartItems = document.querySelector('#cart-items');
let coffeeProducts = [];
let carts = [];
console.log(shopCardsList);
console.log(cartItems);

const updateShopCards = () =>{
    shopCardsList.innerHTML ='';
    if(coffeeProducts.length>0){
        coffeeProducts.forEach(product =>{
            let newProduct =document.createElement('div');
            newProduct.classList.add('sellerCard');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML =`
            <img src="${product.image}" alt="product" class="productImage">
            <p class="productName">${product.estate}</p>
            <div class="roastPress">
                <p>${product.roast} ROAST</p>
                <p class="leftBorder">${product.grind.toUpperCase()}</p>
            </div>
            <div class="weigthPrice">
                <p>250 g</p>
                <p class="leftBorder">₹ ${product.price}</p>
            </div>
            <button class="shopButton">Add to cart</button>
            
            `;
            shopCardsList.appendChild(newProduct);
        })
    }
}
shopCardsList.addEventListener('click', (event) =>{
    let postionClick = event.target;
    if(postionClick.classList.contains('shopButton')){
        let product_id = postionClick.parentElement.dataset.id;
        addToCart(product_id);
    }
})

const addToCart = (product_id) =>{
    let isItemInCart = carts.find(function(value) {
        return value.product_id == product_id;
    });
    
}



const initApp = () =>{
    fetch('productList.json')
    .then(response => response.json())
    .then(data =>{
        coffeeProducts = data;
        console.log(coffeeProducts);
        updateShopCards();

    })
}
initApp();