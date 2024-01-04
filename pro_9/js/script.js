
var products = [
    {
        id: 1,
        name: "SanDisk Ultra USB Flash Drive",
        price: 629.00,
        description: "SanDisk Ultra USB Type-C USB Flash Drive, CZ460 64G…",
        imageSrc: "img/41f+a8MR-OL._AC_AA180_.jpg"
    },
    {
        id: 2,
        name: "HP USB 3.2 Flash Drive 128GB",
        price: 769.00,
        description: "HP USB 3.2 Flash Drive 128GB 796wHP USB 3.2 Flash Drive 128GB",
        imageSrc: "img/41KAEGS+bML._AC_AA180_.jpg"
    },
    {
        id: 3,
        name: "boAt Nirvana Ion TWS Earbuds",
        price: 1799.00,
        description: "boAt Nirvana Ion TWS Earbuds with 120 HRS Play…",
        imageSrc: "img/61NDPRXm9XL._AC_AA180_.jpg"
    },
    {
        id: 4,
        name: "Vaseline Lip Therapy Pink Rosy Lips",
        price: 322.00,
        description: "Vaseline Lip Therapy Pink Rosy Lips, 0.25 oz with ....",
        imageSrc: "img/91D+lmcDAiL._AC_AA180_.jpg"
    },
    {
        id: 5,
        name: "VASELINE Lip Therapy ROSY LIPS",
        price: 276.00,
        description: "VASELINE Lip Therapy ROSY LIPS with Rose and Almond Oil 20g",
        imageSrc: "img/61URhIMgO8L._AC_AA180_.jpg"
    },
    {
        id: 6,
        name: "LEOTUDE Men's Regular Fit Loopknit Solid Bomber Jacket",
        price: 449.00,
        description: "LEOTUDE Men's Regular Fit Loopknit Solid Bomber Jack…",
        imageSrc: "img/61UIHcgQUvL._AC_AA180_.jpg"
    },
    {
        id: 7,
        name: "Himalaya Herbals Antiseptic Cream",
        price: 38.00,
        description: "Himalaya Herbals Antiseptic Cream, 20g Serum for Glowing Skin...",
        imageSrc: "img/7150KeN4HxL._AC_AA180_.jpg"
    },
    {
        id: 8,
        name: "Minimalist 10% Vitamin C Face Serum",
        price: 664.00,
        description: "Minimalist 10% Vitamin C Face Serum for Glowing Skin...",
        imageSrc: "img/717Kb7GUFyL._AC_AA180_.jpg"
    },
    {
        id: 9,
        name: "Garnier Facewash Gel",
        price: 168.00,
        description: "Garnier Facewash Gel, Gentle Cleanser, Fast Brightening,",
        imageSrc: "img/51lujkx+bbL._AC_AA180_.jpg"
    },
    {
        id: 10,
        name: "Casio Vintage Digital Grey Dial Unisex A-158WA-1Q ( D011 )",
        price: 1644.00,
        description: "Casio Vintage Digital Grey Dial Unisex A-158WA-1Q (…",
        imageSrc: "img/61ybeKQto8L._AC_AA180_.jpg"
    },
];

var cartItemsArray = JSON.parse(localStorage.getItem("cartItems")) || [];

function addToCart(productIndex) {
    var product = products[productIndex];
    
    var existingCartItem = cartItemsArray.find(item => item.id === product.id);

    if (existingCartItem) {
        existingCartItem.quantity = (existingCartItem.quantity || 1) + 1;
        existingCartItem.totalPrice = existingCartItem.quantity * existingCartItem.price;
    } else {
        product.quantity = 1;
        product.totalPrice = product.quantity * product.price;
        cartItemsArray.push(product);
    }
    updateLocalStorage();
    updateCartModal();
}

function updateLocalStorage() {
    localStorage.setItem("cartItems", JSON.stringify(cartItemsArray));
}

function updateCartModal() {
    var cartItemsContainer = document.getElementById("cartItems");
    cartItemsContainer.innerHTML = "";

    var totalCartPrice = 0;

    cartItemsArray.forEach(function (item) {
        var cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = 
        `<div class="col-xxl-12 mt-5">
            <div class="d-flex">
                <div class="col-3">
                    <img src="${item.imageSrc}" class="img-fluid" alt="Product Image" />
                </div>
                <div class="col-9">
                    <div class="cart-product-details">
                        <h4>$ ${item.totalPrice.toFixed(2)}</h4>
                        <p>${item.description}</p>
                        
                        <button onclick="return updateQuantityAndPrice(${item.id}, 1)" class="pm">+</button>
                        <span id="quantity-${item.id}">${item.quantity}</span>
                        <button onclick="return updateQuantityAndPrice1(${item.id}, -1)" class="pm">-</button>
                        <button class="delete-btn" onclick="deleteFromCart(${item.id})">Delete</button>
                    </div>
                </div>
            </div>
        </div>`;
        cartItemsContainer.appendChild(cartItem);

        totalCartPrice += item.totalPrice;
    });

    
    var totalElement = document.createElement("div");
    totalElement.innerHTML = `<div class="modal-footer">
                                <div class="col-12 text-end">
                                        <h4>Total: $ ${totalCartPrice.toFixed(2)}</h4>
                                </div>
                            </div>`;
    cartItemsContainer.appendChild(totalElement);

}

const updateQuantityAndPrice = (id) =>{

    var existingCartItem = cartItemsArray.filter(item => item.id === id);
    if(existingCartItem[0].quantity >= 1){
        existingCartItem[0].quantity += 1;
        updateLocalStorage();
        updateCartModal();
    }

}

const updateQuantityAndPrice1 = (id) =>{

    var existingCartItem = cartItemsArray.filter(item => item.id === id);
    if(existingCartItem[0].quantity >= 2){
        existingCartItem[0].quantity -= 1;
        updateLocalStorage();
        updateCartModal();
    }
    
}

function deleteFromCart(productId) {
    cartItemsArray = cartItemsArray.filter(item => item.id !== productId);
    updateLocalStorage();
    updateCartModal();
}

function generateProductCards() {
    var productContainer = document.getElementById("productContainer");

    products.forEach(function (product, index) {
        var col = document.createElement("div");
        var productCard = document.createElement("div");
        col.className = 'col-3';
        productCard.className = "card";
        productCard.style = "height: 530px; margin-bottom:20px;";

        product.totalPrice = product.price;

        productCard.innerHTML = `
            <img src="${product.imageSrc}" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="mb-3">
                    <h4 class="card-title">$${product.price.toFixed(2)}</h4>
                    <p class="card-text">${product.description}</p>
                </div>
                <div>
                    <button class="btn btn-primary" onclick="addToCart(${index})">Add TO Cart</button>
                </div>
            </div>`;

        col.appendChild(productCard);
        productContainer.appendChild(col);
    });
}

window.addEventListener('DOMContentLoaded', function () {
    generateProductCards();
    cartItemsArray = JSON.parse(localStorage.getItem("cartItems")) || [];
    updateCartModal();
}); 