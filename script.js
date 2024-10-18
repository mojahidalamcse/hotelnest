const searchForm = document.getElementById('searchForm');
const hotelPages = document.getElementById('hotelPages');
const destinationInput = document.getElementById('destination');
const priceRangeInput = document.getElementById('price-range');
const priceDisplay = document.getElementById('price-display');

const hotels = [
    {
        name: "Hotel 1",
        price: 1000,
        image: "hotel1.jpg",
        backgroundImage: "hotel1-bg.jpg"
    },
    {
        name: "Hotel 2",
        price: 2000,
        image: "hotel2.jpg",
        backgroundImage: "hotel2-bg.jpg"
    },
    {
        name: "Hotel 3",
        price: 3000,
        image: "hotel3.jpg",
        backgroundImage: "hotel3-bg.jpg"
    },
    {
        name: "Hotel 4",
        price: 4000,
        image: "hotel4.jpg",
        backgroundImage: "hotel4-bg.jpg"
    },
    {
        name: "Hotel 5",
        price: 5000,
        image: "hotel5.jpg",
        backgroundImage: "hotel5-bg.jpg"
    },
    {
        name: "Hotel 6",
        price: 6000,
        image: "hotel6.jpg",
        backgroundImage: "hotel6-bg.jpg"
    },
    {
        name: "Hotel 7",
        price: 7000,
        image: "hotel7.jpg",
        backgroundImage: "hotel7-bg.jpg"
    },
    {
        name: "Hotel 8",
        price: 8000,
        image: "hotel8.jpg",
        backgroundImage: "hotel8-bg.jpg"
    },
    {
        name: "Hotel 9",
        price: 9000,
        image: "hotel9.jpg",
        backgroundImage: "hotel9-bg.jpg"
    },
    {
        name: "Hotel 10",
        price: 10000,
        image: "hotel10.jpg",
        backgroundImage: "hotel10-bg.jpg"
    },
];

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const destination = destinationInput.value.toLowerCase();
    const priceRange = priceRangeInput.value;

    hotelPages.innerHTML = '';

    if (destination === 'rangpur' && priceRange >= 1000 && priceRange <= 12000) {
        hotels.forEach(hotel => {
            if (hotel.price <= priceRange) {
                const hotelSection = document.createElement('div');
                hotelSection.classList.add('hotel-page');
                hotelSection.style.backgroundImage = `url(${hotel.backgroundImage})`;
                hotelSection.style.backgroundSize = 'cover';
                hotelSection.style.backgroundPosition = 'center';

                hotelSection.innerHTML = `
                    <h3>${hotel.name}</h3>
                    <img src="${hotel.image}" alt="${hotel.name}">
                    <p>Price: $${hotel.price}</p>
                    <button class="book-button">Book Now</button>
                `;
                hotelPages.appendChild(hotelSection);
            }
        });
    }
});

// Update the price display and background color on input
priceRangeInput.addEventListener('input', function() {
    const price = priceRangeInput.value;
    priceDisplay.textContent = price; // Update displayed price

    // Change color based on price range
    if (price < 6000) {
        priceRangeInput.style.background = 'red';
    } else if (price < 9000) {
        priceRangeInput.style.background = 'yellow';
    } else {
        priceRangeInput.style.background = 'green';
    }
});

// Keep the initial display value
priceDisplay.textContent = priceRangeInput.value;
