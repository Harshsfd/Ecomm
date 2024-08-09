// script.js
document.addEventListener('DOMContentLoaded', () => {
    const buyNowBtn = document.getElementById('buyNowBtn');
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');

    buyNowBtn.addEventListener('click', addToCart);

    function addToCart() {
        const productName = document.querySelector('.product-details h1').innerText;
        const productPrice = parseFloat(document.querySelector('.price').innerText.replace('₹', ''));

        const cartItem = document.createElement('li');
        cartItem.textContent = `${productName} - ₹${productPrice.toFixed(2)}`;

        cartItems.appendChild(cartItem);

        updateTotalPrice(productPrice);
    }

    function updateTotalPrice(price) {
        const currentTotal = parseFloat(totalPrice.innerText);
        const newTotal = currentTotal + price;
        totalPrice.innerText = newTotal.toFixed(2);
    }
});
