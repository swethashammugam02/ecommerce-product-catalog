const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 1499,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
        description: "Comfortable wireless headphones with clear sound quality."
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 2499,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
        description: "A stylish smart watch for fitness and daily activities."
    },
    {
        id: 3,
        name: "Running Shoes",
        price: 1999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
        description: "Lightweight running shoes designed for everyday comfort."
    },
    {
        id: 4,
        name: "Backpack",
        price: 999,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
        description: "Durable backpack suitable for college, travel and work."
    },
    {
        id: 5,
        name: "Bluetooth Speaker",
        price: 1299,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80",
        description: "Portable Bluetooth speaker with powerful audio."
    },
    {
        id: 6,
        name: "Smartphone",
        price: 14999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
        description: "Modern smartphone with useful features and sleek design."
    }
];


// Display products
function displayProducts() {

    const container = document.getElementById("productContainer");

    container.innerHTML = "";

    products.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >

            <h3>${product.name}</h3>

            <span class="price">₹${product.price}</span>

            <p>${product.description}</p>

            <button
                class="btn"
                onclick="showProduct(${product.id})"
            >
                View Details
            </button>
        `;

        container.appendChild(card);
    });
}


// Show product details
function showProduct(id) {

    const product = products.find(item => item.id === id);

    if (!product) {
        return;
    }

    const details = document.getElementById("productDetails");

    details.innerHTML = `
        <div class="details-card">

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <h2>${product.name}</h2>

            <h3 class="price">₹${product.price}</h3>

            <p>${product.description}</p>

            <button
                class="btn"
                onclick="backToProducts()"
            >
                Back to Products
            </button>

        </div>
    `;

    // Scroll directly to product details
    document.getElementById("product-details").scrollIntoView({
        behavior: "smooth"
    });
}


// Back to products
function backToProducts() {

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}


// Load products
document.addEventListener("DOMContentLoaded", function () {
    displayProducts();
});
