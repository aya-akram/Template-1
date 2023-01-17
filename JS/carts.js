let productDom = document.querySelector(".products");
let noproductDom = document.querySelector(".noProducts");


function drawCartProductUi(allProducts = []){

    if(JSON.parse(localStorage.getItem("productsInCart")).length == 0){
    noproductDom.innerHTML = "There is no items !!";}


    let products = JSON.parse(localStorage.getItem("productsInCart")) || allProducts;
    let productUI = products.map( (item) => {
 
    return `
    <div class="product-item">
    <img src="${item.imageurl}" class="product-item-img" alt="img">

    <div class="product-item-desc">
        <h2>${item.title}</h2>
        <p>Loerm ipsum, dolar sit amet comsols;.</p>
        <span>${item.size}</span>
    </div>
    <div class="product-item-actions">
        <button class="add-to-cart" onclick="removedFromCart( ${item.id})">Remove Frome Cart</button>
    
    </div>
</div>
    `
    

    } );
    productDom.innerHTML = productUI;
}
drawCartProductUi();

function removedFromCart(id){
     let productsInCart = localStorage.getItem("productsInCart");
    if(productsInCart){
        let items = JSON.parse(productsInCart);
  
       let filteredItem=  items.filter((items) => items.id !== id);
        localStorage.setItem("productsInCart",JSON.stringify(filteredItem));
        drawCartProductUi(filteredItem);
    }
}