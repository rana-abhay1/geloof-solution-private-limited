// // Load Header
// fetch("components/header.html")
// .then(response => response.text())
// .then(data => {

//     document.getElementById("header").innerHTML = data;

// });

// // Load Footer
// fetch("components/footer.html")
// .then(response => response.text())
// .then(data => {

//     document.getElementById("footer").innerHTML = data;

// });


const productList = document.getElementById("product-list");
const searchInput = document.getElementById("searchProduct");
const resultsCount = document.querySelector(".results strong");

function displayProducts(items) {

    productList.innerHTML = "";

    if (resultsCount) {
        resultsCount.textContent = items.length;
    }

    if (items.length === 0) {
        productList.innerHTML = `
            <div class="no-products">
                <h2>No Products Found</h2>
                <p>Try searching with a different keyword.</p>
            </div>
        `;
        return;
    }

    items.forEach(product => {

        productList.innerHTML += `

        <div class="product-card">

            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>

            <div class="product-info">

                <span class="brand">${product.brand}</span>

                <h3>${product.name}</h3>

                <div class="rating">
                    ${"★".repeat(product.rating)}
                </div>

                <div class="price">
                    ₹${product.price.toLocaleString()}
                </div>

                <p class="${product.stock ? 'in-stock' : 'out-stock'}">
                    ${product.stock ? "✔ In Stock" : "✖ Out of Stock"}
                </p>

                <button>View Details</button>

            </div>

        </div>

        `;
    });

}

displayProducts(products);


// ===============================
// Live Search
// ===============================

// if (searchInput) {
//     searchInput.addEventListener("input", function () {

//         const keyword = this.value.toLowerCase().trim();

//         const filteredProducts = products.filter(product => {

//             return (
//                 product.name.toLowerCase().includes(keyword) ||
//                 product.brand.toLowerCase().includes(keyword) ||
//                 product.category.toLowerCase().includes(keyword)
//             );

//         });

//         displayProducts(filteredProducts);

//     });
// }

const brandFilters = document.querySelectorAll(".brand-filter");
const inStock = document.getElementById("inStock");
const outStock = document.getElementById("outStock");
const sortProducts = document.getElementById("sortProducts");

function applyFilters() {

    let filtered = [...products];

    // ================= SEARCH =================

    const keyword = searchInput.value.toLowerCase().trim();

    if (keyword !== "") {

        filtered = filtered.filter(product =>

            product.name.toLowerCase().includes(keyword) ||

            product.brand.toLowerCase().includes(keyword) ||

            product.category.toLowerCase().includes(keyword)

        );

    }

    // ================= BRAND =================

    const selectedBrands = [];

    brandFilters.forEach(box => {

        if (box.checked) {

            selectedBrands.push(box.value);

        }

    });

    if (selectedBrands.length > 0) {

        filtered = filtered.filter(product =>

            selectedBrands.includes(product.brand)

        );

    }

    // ================= STOCK =================

    if (inStock.checked && !outStock.checked) {

        filtered = filtered.filter(product => product.stock);

    }

    if (!inStock.checked && outStock.checked) {

        filtered = filtered.filter(product => !product.stock);

    }

    // ================= SORT =================

    switch (sortProducts.value) {

        case "low-high":

            filtered.sort((a, b) => a.price - b.price);

            break;

        case "high-low":

            filtered.sort((a, b) => b.price - a.price);

            break;

        case "name":

            filtered.sort((a, b) =>

                a.name.localeCompare(b.name)

            );

            break;

    }

    document.querySelector(".results strong").textContent = filtered.length;

    displayProducts(filtered);

}

// Search
searchInput.addEventListener("input", applyFilters);

// Brand Checkboxes
brandFilters.forEach(box => {

    box.addEventListener("change", applyFilters);

});

// Availability
inStock.addEventListener("change", applyFilters);
outStock.addEventListener("change", applyFilters);

// Sorting
sortProducts.addEventListener("change", applyFilters);

// Initial Load
applyFilters();


const clearButton = document.getElementById("clearFilters");

clearButton.addEventListener("click", () => {

    searchInput.value = "";

    sortProducts.value = "default";

    inStock.checked = false;
    outStock.checked = false;

    brandFilters.forEach(box => {

        box.checked = false;

    });

    applyFilters();

});