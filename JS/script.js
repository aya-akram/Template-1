
// localStorage.setItem("name","aya");
// console.log(localStorage.getItem("name"));
// console.log(localStorage.getItem("test"));

// // localStorage.removeItem("name");
// localStorage.clear();





//define products 

let productDom = document.querySelector('.products');
let cartProductMenu = document.querySelector('.cart-products');
let cartProducDivtDom = document.querySelector('.cart-products div');
let badgeDom = document.querySelector('.badge');
let shoppingCartIcon = document.querySelector('.shoppingCart');
let products= JSON.parse( localStorage.getItem('products'));


//open cart menu

shoppingCartIcon.addEventListener('click',openCartMenu);

// display products
let drawProductUi;
(drawProductUi=function(products = []){
    let productUI = products.map( (item) => {
 
    return `
    <div class="product-item">
    <img src="${item.imageurl}" class="product-item-img" alt="img">

    <div class="product-item-desc">
        <a onclick="saveItemData(${item.id})">${item.title}</a>
        <p>Loerm ipsum, dolar sit amet comsols;.</p>
        <span>${item.size}</span>
    </div>
    <div class="product-item-actions">
        <button class="add-to-cart" onclick="addedToCart( ${item.id})">Add To Cart</button>
        <i class="favorate far fa-heart"></i>
    
    </div>
</div>
    `
    

    } );
    productDom.innerHTML = productUI;
})(JSON.parse(localStorage.getItem("products")));

// check if there is items in local storage
let addedItem = localStorage.getItem("productsInCart")? JSON.parse(localStorage.getItem("productsInCart")):[];

if(addedItem){
    addedItem.map((item) => {
        cartProducDivtDom.innerHTML += ` <p> ${item.title}</p>`;
    });
    badgeDom.style.display = "block";
    badgeDom.innerHTM += addedItem.length;
}
;

// add to cart
function addedToCart(id){

    if(localStorage.getItem("username")){
        let choosenItem = products.find((item) => item.id === id);
    
        cartProducDivtDom .innerHTML += ` <p> ${choosenItem.title}</p>`;

        addedItem = [...addedItem,choosenItem];
        localStorage.setItem('productsInCart',JSON.stringify(addedItem));
        let cartProductItems = document.querySelectorAll('.cart-products div p');
    
        badgeDom.style.display="block";
        badgeDom.innerHTML = cartProductItems.length;
    }
    else {
        window.location = "login.html";
    }

  
}
 //JSON.stringify() // object to string
 //JSON.parse()  //string to object

 // open cart menu

function openCartMenu(){
    if(cartProducDivtDom.innerHTML != ""){

        if(cartProductMenu.style.display =="block"){
            cartProductMenu.style.display="none";
        }else {
            cartProductMenu.style.display="block";
        }
    }
}


function saveItemData(id){
    localStorage.setItem("productId",id);
    window.location = "cartDetails.html";
}

// search function

let input = document.getElementById("search");

input.addEventListener("keyup",function(e){

        search(e.target.value , JSON.parse(localStorage.getItem("products")));
    
    if(e.target.value.trim() =="")
    drawProductUi(JSON.parse(localStorage.getItem("products")));
});

function search(title, myArray){
    // for(var i =0; i< myArray.length ;i++){
    //     if(myArray[i].title === title){
    //         console.log(myArray[i]);
    //     }
    // }

    let arr= myArray.filter((item) => item.title.indexof(title) !== -1);
    drawProductUi(arr);
}
// search("headphone item", JSON.parse(localStorage.getItem("products")));
