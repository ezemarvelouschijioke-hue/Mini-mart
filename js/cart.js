let cart = JSON.parse(localStorage.getItem("CART")) || [];

function displayProducts() {
    const grid = document.querySelector(".product-grid");
    grid.innerHTML = "";

    products.forEach(product => {
        grid.innerHTML += `
            <div class="product-card">
                <img src="${product.image}">
                <h3>${product.name}</h3>
                <p>₦${product.price.toLocaleString()}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    localStorage.setItem("CART", JSON.stringify(cart));
    document.getElementById("cart-count").innerText = cart.length;
    renderCart();
}

function renderCart() {
    const list = document.querySelector(".cart-items");
    const totalEl = document.querySelector(".total-price");

    list.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        list.innerHTML += `
            <li>
                ${item.name} - ₦${item.price.toLocaleString()}
                <button onclick="removeFromCart(${index})">x</button>
            </li>
        `;
    });

    totalEl.innerText = total.toLocaleString();
}

displayProducts();
updateCart();