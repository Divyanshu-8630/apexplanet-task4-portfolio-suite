const products = [
  { name: "Laptop Pro X", category: "Laptop", price: 900, rating: 4.7 },
  { name: "SmartPhone A1", category: "Phone", price: 500, rating: 4.5 },
  { name: "Wireless Headphones", category: "Accessories", price: 120, rating: 4.2 },
  { name: "UltraBook Air", category: "Laptop", price: 1100, rating: 4.8 },
  { name: "Phone Max 5G", category: "Phone", price: 750, rating: 4.6 },
  { name: "Bluetooth Speaker", category: "Accessories", price: 95, rating: 4.1 }
];

const productContainer = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const sortOption = document.getElementById("sortOption");

function displayProducts(productList) {
  productContainer.innerHTML = "";

  productList.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <span class="product-badge">${product.category}</span>
      <h3>${product.name}</h3>
      <p class="product-meta">Price: $${product.price}</p>
      <p class="product-meta">Rating: ${product.rating} / 5</p>
    `;

    productContainer.appendChild(productCard);
  });
}

function filterAndSortProducts() {
  let filteredProducts = [...products];

  const selectedCategory = categoryFilter.value;
  const selectedSort = sortOption.value;

  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter(
      product => product.category === selectedCategory
    );
  }

  if (selectedSort === "priceLowHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "priceHighLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (selectedSort === "ratingHighLow") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filteredProducts);
}

categoryFilter.addEventListener("change", filterAndSortProducts);
sortOption.addEventListener("change", filterAndSortProducts);

displayProducts(products);
