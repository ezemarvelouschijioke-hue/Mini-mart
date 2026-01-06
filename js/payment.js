function checkout() {
    const email = document.getElementById("email-address").value;

    if (!email || cart.length === 0) {
        alert("Enter email and add items to cart");
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    let handler = PaystackPop.setup({
        key: "pk_test_YOUR_PUBLIC_KEY",
        email: email,
        amount: total * 100,
        currency: "NGN",
        callback: function(response) {
            localStorage.clear();
            window.location.href =
                "success.html?reference=" + response.reference;
        }
    });

    handler.openIframe();
}