document.getElementById("welcome-section").style.display = "block";

function openCartModal() {
    document.getElementById('cart-modal').style.display = 'flex';
}

function closeCartModal() {
    document.getElementById('cart-modal').style.display = 'none';
}

function displayWelcome() {
    document.getElementById('welcome-section').style.display = 'block';
    document.getElementById('about-us-section').style.display = 'none';
    document.getElementById('manipulations-section').style.display = 'none';
    document.getElementById('shop-section').style.display = 'none';
    document.getElementById('contact-section').style.display = 'none';
}

function displayAboutUs() {
    document.getElementById('about-us-section').style.display = 'block';
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('manipulations-section').style.display = 'none';
    document.getElementById('shop-section').style.display = 'none';
    document.getElementById('contact-section').style.display = 'none';
}

function displayManipulations() {
    document.getElementById("manipulations-section").style.display = "block";
    document.getElementById("welcome-section").style.display = "none";
    document.getElementById('about-us-section').style.display = 'none';
    document.getElementById('shop-section').style.display = 'none';
    document.getElementById('contact-section').style.display = 'none';
}

function displayShop() {
    document.getElementById('shop-section').style.display = 'block';
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('about-us-section').style.display = 'none';
    document.getElementById('manipulations-section').style.display = 'none';
    document.getElementById('contact-section').style.display = 'none';
}

function displayContacts() {
    document.getElementById("contact-section").style.display = "block";
    document.getElementById("welcome-section").style.display = "none";
    document.getElementById('about-us-section').style.display = 'none';
    document.getElementById("manipulations-section").style.display = "none";
    document.getElementById('shop-section').style.display = 'none';
}

async function searchProducts(keyword) {
    const searchResultsContainer = document.getElementById('searchResultsContainer');

    try {
        const response = await fetch(`http://localhost:2121/api/search/${keyword}`);
        const searchResults = await response.json();

        searchResultsContainer.innerHTML = '';

        if (searchResults.length === 0) {
            searchResultsContainer.style.display = 'none';
        } else {

            searchResults.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.innerHTML = `
              <div class="search-result">
                  <div class="result-details">
                      <p> ${result.name}</p>
                      <p>Цена: ${result.price} лв.</p>
                      <button class="add-to-cart-button" onclick="addToCart('${result.name}', ${result.price})">Добави в количката</button>
                  </div>
              </div>`;
                searchResultsContainer.appendChild(resultItem);
            });

            const searchInput = document.getElementById('searchInput');
            const rect = searchInput.getBoundingClientRect();
            searchResultsContainer.style.left = rect.left + 'px';
            searchResultsContainer.style.top = rect.bottom + 'px';

            searchResultsContainer.style.display = 'block';
        }
    } catch (error) {
        console.error(`Error searching for products:`, error);
    }
}

function startSearch() {
    const searchInput = document.getElementById('searchInput');
    const keyword = searchInput.value.trim();
    if (keyword) {
        searchProducts(keyword);
    } else {
        console.warn('Моля, въведете ключова дума за търсене.');
    }
}

let isSearchOpen = false;

function toggleSearch() {
    const searchContainer = document.getElementById('searchResultsContainer');
    isSearchOpen = !isSearchOpen;

    if (isSearchOpen) {
        searchContainer.style.display = 'block';
    } else {
        searchContainer.style.display = 'none';
    }
}

document.addEventListener('click', function (event) {
    const searchContainer = document.getElementById('searchResultsContainer');
    const toggleSearchButton = document.getElementById('toggleSearchButton');

    if (event.target !== toggleSearchButton && !toggleSearchButton.contains(event.target)) {
        searchContainer.style.display = 'none';
        isSearchOpen = false;
    }
});


function displayCategory(category) {
    fetch(`http://localhost:2121/api/${category}`)
        .then(response => response.json())
        .then(products => {
            const categoryProducts = document.getElementById('category-products');
            categoryProducts.innerHTML = '';

            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');

                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" />
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Цена: ${product.price} лв.</p>
                    <button onclick="addToCart('${product.name}', '${product.price}')">Добави в количката</button>`;

                categoryProducts.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error retrieving the data:', error));
}

let cartItems = [];

function addToCart(productName, productPrice) {
    const productToAdd = { name: productName, price: parseFloat(productPrice), quantity: 1 };
    cartItems.push(productToAdd);
    updateCartModal();
}

document.addEventListener('DOMContentLoaded', function() {
    var cartModal = document.getElementById('cart-modal');
    cartModal.classList.add('hidden');
  });
  
function toggleCartModal() {
    var cartModal = document.getElementById('cart-modal');
    cartModal.classList.toggle('hidden');
}
  

function checkout() {
   toggleCartModal(); 
}

let paypalButtonsGenerated = false;

function updateCartModal() {
    const cartModalContent = document.getElementById('cart-modal-content');
    const totalPriceElement = document.getElementById('totalPrice');

    cartModalContent.innerHTML = '';

    let totalValue = 0; 

    cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.textContent = `Продукт: ${item.name}, Количество: ${item.quantity}, Цена: ${typeof item.price === 'number' ? item.price.toFixed(2) + ' лв.' : 'N/A'}`;
        cartModalContent.appendChild(cartItemElement);

        totalValue += item.price * item.quantity;
    });

    totalPriceElement.textContent = totalValue.toFixed(2) + ' лв.';

    const cartData = {
        purchase_units: [{
            amount: {
                currency_code: 'USD',
                value: totalValue.toFixed(2),
                breakdown: {
                    item_total: {
                        currency_code: 'USD',
                        value: totalValue.toFixed(2),
                    },
                },
            },
            items: cartItems.map(item => ({
                name: item.name,
                unit_amount: {
                    currency_code: 'USD',
                    value: item.price.toFixed(2),
                },
                quantity: item.quantity,
            })),
        }],
    };

    if (!paypalButtonsGenerated && cartItems.length > 0) {
        generatePayPalButtons(cartData);
        paypalButtonsGenerated = true;
    }

    const cartModal = document.getElementById('cart-modal');
    if (cartItems.length > 0) {
        cartModal.style.display = 'flex'; 
    } else {
        cartModal.style.display = 'none';
    }

    const cartCountElement = document.getElementById('cartCount');
    cartCountElement.textContent = cartItems.length.toString();
}


function generatePayPalButtons(cartData) {
    paypal.Buttons({
        createOrder: function (data, actions) {
            return actions.order.create({
                purchase_units: cartData.purchase_units,
            });
        },
        onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
                alert('The transaction is successful! Order ID:: ' + details.id);
            });
        },
        onError: function (err) {
            console.error('An error occurred while processing the order:', err);
            alert('An error occurred while processing the order. Please, try again.');
        }
    }).render('#paypal-button-container'); 
}