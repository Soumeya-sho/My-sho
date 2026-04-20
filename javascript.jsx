let cart = [];
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const cartItemsList = document.getElementById('cart-items-list');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');

cartBtn.onclick = () => cartModal.style.display = 'block';
closeCart.onclick = () => cartModal.style.display = 'none';


document.querySelectorAll('.add-to-cart').forEach(button => {
    button.onclick = () => {
        const name = button.getAttribute('data-name');
        const price = parseInt(button.getAttribute('data-price'));

        cart.push({ name, price });
        updateCart();
    };
});

function updateCart() {
    cartItemsList.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
    });

    cartTotal.innerText = total;
    cartCount.innerText = cart.length;
}

document.getElementById('checkout-btn').onclick = () => {
    if (cart.length > 0) {
        alert('شكراً لشرائك! المجموع هو: $' + cartTotal.innerText);
        cart = [];
        updateCart();
        cartModal.style.display = 'none';
    } else {
        alert('السلة فارغة!');
    }
};
.cart - modal, .checkout - modal {
    display: none;
    position: fixed;
    top: 50 %;
    left: 50 %;
    transform: translate(-50 %, -50 %);
    background: white;
    padding: 30px;
    box - shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    z - index: 1000;
    border - radius: 15px;
    width: 350px;
}
