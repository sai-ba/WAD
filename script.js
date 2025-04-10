const conversionRate = 83; 

const dishes = [
    {   
        id: 1, 
        name: 'Grilled Salmon', 
        price: 25.0, 
        description: 'Fresh salmon grilled to perfection.', 
        imageUrl: 'https://media.istockphoto.com/id/1214416414/photo/barbecued-salmon-fried-potatoes-and-vegetables-on-wooden-background.jpg?s=612x612&w=0&k=20&c=Y8RYbZFcvec-FXMMuoU-qkprC3TUFNiw3Ysoe8Drn6g=' 
    },
    { 
        id: 2, 
        name: 'Caesar Salad', 
        price: 12.0, 
        description: 'Classic Caesar salad with homemade dressing.', 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuq-kQ-a22VIT_ni9bgOVtDgjvUiX9bdnLBw&s' 
    },
    { 
        id: 3, 
        name: 'Margherita Pizza', 
        price: 15.0, 
        description: 'Traditional Margherita pizza with fresh basil.', 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbFV4Vc0URzRv789DjFD6jErJSVifT-caeQ&s' 
    },
    { 
        id: 4, 
        name: 'Chocolate Cake', 
        price: 8.0, 
        description: 'Rich and moist chocolate cake.', 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS33jmqF8gBUpA6En__J7u5E5YMoEkjZDSOLA&s' 
    },
    
];

let cart = [];

function loadFeaturedDishes() {
    const featuredDishesDiv = document.getElementById('featuredDishes');
    featuredDishesDiv.innerHTML = ''; 
    dishes.forEach(dish => {
        const dishCard = document.createElement('div');
        dishCard.classList.add('product-card');
        dishCard.innerHTML = `
            <img src="${dish.imageUrl}" alt="${dish.name}">
            <h3>${dish.name}</h3>
            <a href="./ingredients${dish.id}.html"><button>View</button></a>

        `;
        featuredDishesDiv.appendChild(dishCard);
    });
}

function viewDish(id) {
    window.location.href = `dish-varieties.html?id=${id}`;
}

function addToCart(dish) {
    cart.push(dish);
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `<p>${item.name}</p>`;
        cartItemsDiv.appendChild(cartItem);
        total += item.price;
    });

    const totalInINR = (total * conversionRate).toFixed(2);
    document.getElementById('cartTotal').innerText = `Total: ₹${totalInINR}`; 
}

document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Order placed successfully for Room: ' + document.getElementById('roomNumber').value);
    cart = [];
    updateCart();
});

document.getElementById('addToCartButton').addEventListener('click', () => {
    const dishId = dishes.find(d => d.name === document.getElementById('dishName').innerText);
    addToCart(dishId);
});

loadFeaturedDishes();
