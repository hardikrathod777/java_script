function updateQuantityAndPrice(productId, change) {
    var quantityElement = document.getElementById("quantity-" + productId);
    var priceElement = document.getElementById("price-" + productId);
    var unitPriceElement = document.getElementById("unit-price-" + productId);

    var currentQuantity = parseInt(quantityElement.innerText);
    var unitPrice = parseInt(unitPriceElement.innerText);

    if (currentQuantity + change >= 1) {
        quantityElement.innerText = currentQuantity + change;
        updatePrice(productId, quantityElement.innerText, priceElement, unitPrice);
        updateSubtotal();
    }
}

function updatePrice(productId, quantity, priceElement, unitPrice) {
    var totalPrice = unitPrice * quantity;
    priceElement.innerText = totalPrice;
}

function updateSubtotal() {
    var subtotalAmountElement = document.getElementById("subtotal-amount");

    var productTotal1 = parseInt(document.getElementById("price-product1").innerText) || 0;
    var productTotal2 = parseInt(document.getElementById("price-product2").innerText) || 0;
    var productTotal3 = parseInt(document.getElementById("price-product3").innerText) || 0;

    var subtotal = productTotal1 + productTotal2 + productTotal3;

    subtotalAmountElement.innerText = "$" + subtotal;
}
