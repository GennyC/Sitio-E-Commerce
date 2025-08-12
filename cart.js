// cart.js - Updated for string product IDs
let cart = [];

// Add to cart function
function addToCart(productId) {
    // First check if we already have this product in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        // Create a new cart item
        const product = getProductDetails(productId);
        if (product) {
            product.quantity = 1;
            cart.push(product);
        }
    }
    
    updateCartCount();
    saveCartToStorage();
    console.log('Cart updated:', cart); // For debugging
}

// Helper function to get product details
function getProductDetails(productId) {
    // This should match your actual products
    const products = {
        'iphone15promax': { id: 'iphone15promax', name: 'iPhone 15 Pro Max', price: 1199 },
        'iphone15pro': { id: 'iphone15pro', name: 'iPhone 15 Pro', price: 999 },
        'iphone15plus': { id: 'iphone15plus', name: 'iPhone 15 Plus', price: 899 },
        'iphone15': { id: 'iphone15', name: 'iPhone 15', price: 799 },
        'iphone14promax': { id: 'iphone14promax', name: 'iPhone 14 Pro Max', price: 1099 },
        'iphone14pro': { id: 'iphone14pro', name: 'iPhone 14 Pro', price: 999 },
        'iphone14plus': { id: 'iphone14plus', name: 'iPhone 14 Plus', price: 899 },
        'iphone14': { id: 'iphone14', name: 'iPhone 14', price: 799 },
    's25ultra': { id: 's25ultra', name: 'Galaxy S25 Ultra', price: 1399 },
    's25plus': { id: 's25plus', name: 'Galaxy S25+', price: 1099 },
    's25': { id: 's25', name: 'Galaxy S25', price: 899 },
    'zfold6': { id: 'zfold6', name: 'Galaxy Z Fold 6', price: 1899 },
    'zflip6': { id: 'zflip6', name: 'Galaxy Z Flip 6', price: 1099 },
    's24ultra': { id: 's24ultra', name: 'Galaxy S24 Ultra', price: 1299 },
    's24plus': { id: 's24plus', name: 'Galaxy S24+', price: 999 },
    's24': { id: 's24', name: 'Galaxy S24', price: 799 }
    };
    
    return products[productId];
}

// Update cart count display
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    
    cartCountElements.forEach(el => {
        el.textContent = totalItems;
    });
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart from localStorage when page loads
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartCount();
}

// Initialize cart when page loads
loadCart();