// Load Header
fetch("components/header.html")
.then(response => response.text())
.then(data => {

    document.getElementById("header").innerHTML = data;

});

// Load Footer
fetch("components/footer.html")
.then(response => response.text())
.then(data => {

    document.getElementById("footer").innerHTML = data;

});


const productList = document.getElementById("product-list");

function displayProducts(items){

    productList.innerHTML = "";

    items.forEach(product=>{

        productList.innerHTML += `

        <div class="product-card">

            <div class="product-image">

                <img src="${product.image}">

            </div>

            <div class="product-info">

                <span class="brand">

                    ${product.brand}

                </span>

                <h3>

                    ${product.name}

                </h3>

                <div class="rating">

                    ${"★".repeat(product.rating)}

                </div>

                <div class="price">

                    ₹${product.price.toLocaleString()}

                </div>

                <p class="stock">

                    ${
                        product.stock
                        ? "In Stock"
                        : "Out of Stock"
                    }

                </p>

                <button>

                    View Details

                </button>

            </div>

        </div>

        `;

    });

}

displayProducts(products);