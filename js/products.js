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
const PAGE_SIZE = 24;
let filteredProducts = [...products];
let renderedCount = 0;
let loadMoreButton = null;

function createProductCard(product) {

    const card = document.createElement("div");
    card.className = "product-card";

    const imageWrap = document.createElement("div");
    imageWrap.className = "product-image";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.loading = "lazy";
    image.decoding = "async";

    imageWrap.appendChild(image);

    const info = document.createElement("div");
    info.className = "product-info";

    const brand = document.createElement("span");
    brand.className = "brand";
    brand.textContent = product.brand;

    const title = document.createElement("h3");
    title.textContent = product.name;

    const rating = document.createElement("div");
    rating.className = "rating";
    rating.textContent = "★".repeat(product.rating);

    const stock = document.createElement("p");
    stock.className = product.stock ? "in-stock" : "out-stock";
    stock.textContent = product.stock ? "✔ In Stock" : "✖ Out of Stock";

    const button = document.createElement("button");
    button.textContent = "View Details";

    info.append(brand, title, rating, stock, button);
    card.append(imageWrap, info);

    return card;
}

function renderChunk(items, startIndex) {

    const fragment = document.createDocumentFragment();
    const endIndex = Math.min(startIndex + PAGE_SIZE, items.length);

    for (let i = startIndex; i < endIndex; i++) {
        fragment.appendChild(createProductCard(items[i]));
    }

    productList.appendChild(fragment);
    renderedCount = endIndex;

    if (loadMoreButton) {
        loadMoreButton.remove();
    }

    if (items.length > renderedCount) {
        loadMoreButton = document.createElement("button");
        loadMoreButton.className = "load-more-btn";
        loadMoreButton.textContent = "Load More";
        loadMoreButton.addEventListener("click", () => {
            renderChunk(items, renderedCount);
        });
        productList.insertAdjacentElement("afterend", loadMoreButton);
    }
}

function displayProducts(items) {

    filteredProducts = [...items];
    renderedCount = 0;

    if (productList) {
        productList.innerHTML = "";
    }

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

        if (loadMoreButton) {
            loadMoreButton.remove();
            loadMoreButton = null;
        }

        return;
    }

    renderChunk(items, 0);

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