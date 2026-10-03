const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 1499,
        icon: "🎧",
        description: "Comfortable wireless headphones with clear sound quality."
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 2499,
        icon: "⌚",
        description: "A stylish smart watch for fitness and daily activities."
    },
    {
        id: 3,
        name: "Running Shoes",
        price: 1999,
        icon: "👟",
        description: "Lightweight running shoes designed for everyday comfort."
    },
    {
        id: 4,
        name: "Backpack",
        price: 999,
        icon: "🎒",
        description: "Durable backpack suitable for college, travel and work."
    },
    {
        id: 5,
        name: "Bluetooth Speaker",
        price: 1299,
        icon: "🔊",
        description: "Portable Bluetooth speaker with powerful audio."
    },
    {
        id: 6,
        name: "Smartphone",
        price: 14999,
        icon: "📱",
        description: "Modern smartphone with useful features and sleek design."
    }
];

function displayProducts() {

    const container = document.getElementById("productContainer");

    container.innerHTML = "";

    products.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <div class="product-icon">${product.icon}</div>

            <h3>${product.name}</h3>

            <span class="price">₹${product.price}</span>

            <p>${product.description}</p>

            <button class="btn" onclick="showProduct(${product.id})">
                View Details
            </button>
        `;

        container.appendChild(card);
    });
}

function showProduct(id) {

    const product = products.find(item => item.id === id);

    const details = document.getElementById("productDetails");

    details.innerHTML = `
        <div class="details-card">

            <div class="product-icon large">
                ${product.icon}
            </div>

            <h2>${product.name}</h2>

            <h3 class="price">₹${product.price}</h3>

            <p>${product.description}</p>

            <button class="btn" onclick="backToProducts()">
                Back to Products
            </button>

        </div>
    `;

    document.getElementById("product-details").scrollIntoView({
        behavior: "smooth"
    });
}

function backToProducts() {

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", function () {
    displayProducts();
});
