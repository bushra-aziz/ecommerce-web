const products = [
  { 
    id: 1, 
    name: "Sony WH-1000XM5", 
    description: "Industry-leading noise canceling headphones with premium sound.", 
    price: 399.99, 
    image: "images/sony-headphones.webp", 
    category: "Electronics",
    rating: 4.9,
    stock: 45
  },
  { 
    id: 2, 
    name: "Apple AirPods Max", 
    description: "Luxury wireless headphones with spatial audio.", 
    price: 549.99, 
    image: "images/airpods-max.jpeg", 
    category: "Electronics",
    rating: 4.6,
    stock: 35
  },
  { 
    id: 3, 
    name: "Nike Air Max Pro", 
    description: "Premium sneakers with responsive cushioning.", 
    price: 189.99, 
    image: "images/nike-airmax.webp", 
    category: "Footwear",
    rating: 4.7,
    stock: 60
  },
  { 
    id: 4, 
    name: "Jordan Retro 1 High", 
    description: "Classic basketball sneakers with premium materials.", 
    price: 170.00, 
    image: "images/jordan-retro.jpg", 
    category: "Footwear",
    rating: 4.9,
    stock: 40
  },
  { 
    id: 5, 
    name: "Chanel Classic Flap", 
    description: "Iconic quilted leather bag with timeless elegance.", 
    price: 8800.00, 
    image: "images/chanel-bag.webp", 
    category: "Fashion",
    rating: 5.0,
    stock: 5
  },
  { 
    id: 6, 
    name: "Louis Vuitton Neverfull", 
    description: "Luxury tote bag with iconic monogram.", 
    price: 2499.00, 
    image: "images/lv-bag.jpeg", 
    category: "Fashion",
    rating: 4.9,
    stock: 20
  },
  { 
    id: 7, 
    name: "Adidas Ultraboost", 
    description: "Running shoes with boost technology for maximum comfort.", 
    price: 180.00, 
    image: "images/ultraboost.webp", 
    category: "Footwear",
    rating: 4.8,
    stock: 70
  },
  { 
    id: 8, 
    name: "Prada Galleria Tote", 
    description: "Elegant Saffiano leather tote with sophisticated design.", 
    price: 3200.00, 
    image: "images/prada-tote.jpeg", 
    category: "Fashion",
    rating: 4.8,
    stock: 15
  }
];

let cart = [];
let filteredProducts = [...products];

function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (filteredProducts.length === 0) {
    grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999; padding: 50px;">No products found</p>';
    return;
  }
  grid.innerHTML = filteredProducts.map(product => `
    <div class="product-card">
      <div class="category-badge">${product.category}</div>
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <div class="product-info">
        <div class="rating">
          <span class="stars">⭐⭐⭐⭐⭐</span>
          <span class="rating-text">(${product.rating})</span>
        </div>
        <div class="product-name">${product.name}</div>
        <div class="product-description">${product.description}</div>
        <div class="product-footer">
          <div class="price-section">
            <div class="price">$${product.price.toLocaleString()}</div>
            <div class="stock">${product.stock} in stock</div>
          </div>
          <button class="add-to-cart-btn" onclick="addToCart(${product.id})" title="Add to Cart">🛒</button>
        </div>
      </div>
    </div>
  `).join('');
}

function searchProducts() {
  const searchTerm = document.getElementById('searchBar').value.toLowerCase();
  filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
  renderProducts();
}

function addToCart(productId) {
  cart.push(productId);
  updateCartCount();
  showNotification();
}

function updateCartCount() {
  document.getElementById('cartCount').textContent = cart.length;
}

function showNotification() {
  const notification = document.getElementById('notification');
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
}

function toggleCart() {
  alert(`You have ${cart.length} items in your cart!`);
}

function scrollToProducts() {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

renderProducts();
