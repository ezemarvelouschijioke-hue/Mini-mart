const sidebar = document.getElementById("sidebar-cart");
const overlay = document.getElementById("overlay");

document.getElementById("open-cart-btn").onclick = () => {
    sidebar.classList.add("open");
    overlay.classList.add("active");
};

document.getElementById("close-cart-btn").onclick = closeCart;
overlay.onclick = closeCart;

function closeCart() {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
}