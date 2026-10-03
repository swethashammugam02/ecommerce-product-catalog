const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 1499,
        image: "https://dummyjson.com/image/300x200/2563eb/ffffff?text=Headphones",
        description: "Comfortable wireless headphones with clear sound quality."
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 2499,
        image: "https://dummyjson.com/image/300x200/16a34a/ffffff?text=Smart+Watch",
        description: "A stylish smart watch for fitness and daily activities."
    },
    {
        id: 3,
        name: "Running Shoes",
        price: 1999,
        image: "https://dummyjson.com/image/300x200/f97316/ffffff?text=Running+Shoes",
        description: "Lightweight running shoes designed for everyday comfort."
    },
    {
        id: 4,
        name: "Backpack",
        price: 999,
        image: "https://dummyjson.com/image/300x200/7c3aed/ffffff?text=Backpack",
        description: "Durable backpack suitable for college, travel and work."
    },
    {
        id: 5,
        name: "Bluetooth Speaker",
        price: 1299,
        image: "https://dummyjson.com/image/300x200/db2777/ffffff?text=Speaker",
        description: "Portable Bluetooth speaker with powerful audio."
    },
    {
        id: 6,
        name: "Smartphone",
        price: 14999,
        image: "https://dummyjson.com/image/300x200/0891b2/ffffff?text=Smartphone",
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

            <span class="price">
                ₹${product.price}
            </span>

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

            <h3 class="price">
                ₹${product.price}
            </h3>

            <p>${product.description}</p>

            <a href="#products" class="btn">
                Back to Products
            </a>

        </div>
    `;

    window.location.hash = "product-details";
}


// Simple client-side navigation
function handleNavigation() {

    const hash = window.location.hash;

    if (hash === "#product-details") {
        return;
    }

    if (hash === "#products") {
        displayProducts();
    }
}


// Load products when page opens
document.addEventListener("DOMContentLoaded", () => {

    displayProducts();

    handleNavigation();

});


// Update page when navigation changes
window.addEventListener("hashchange", handleNavigation);
