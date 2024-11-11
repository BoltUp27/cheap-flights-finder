// Flight Search for index.html
if (document.getElementById('search-form')) {
    document.getElementById('search-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get the user input
        const fromCity = document.getElementById('from-city').value;
        const toCity = document.getElementById('to-city').value;
        const departureDate = document.getElementById('departure-date').value;

        if (fromCity && toCity && departureDate) {
            // Simulate the result (you can replace with actual API later)
            const resultHTML = `
                <h3>Flight Results from ${fromCity} to ${toCity}</h3>
                <ul>
                    <li>Flight 1: $200, Departure: 8:00 AM</li>
                    <li>Flight 2: $250, Departure: 12:00 PM</li>
                    <li>Flight 3: $180, Departure: 5:00 PM</li>
                </ul>
            `;

            // Show the results below the form
            const resultsContainer = document.getElementById('flight-results');
            resultsContainer.innerHTML = resultHTML;
            resultsContainer.classList.remove('hidden'); // Show results
        } else {
            alert("Please fill in all fields.");
        }
    });
}

// Top Deals for deals.html
if (document.querySelector('.deals-container')) {
    document.addEventListener('DOMContentLoaded', function() {
        const weeklyDeals = [
            {
                destination: 'Paris, France',
                price: '$299',
                imgSrc: 'paris.jpg',  // Add actual image paths
                link: '#'
            },
            {
                destination: 'Tokyo, Japan',
                price: '$499',
                imgSrc: 'tokyo.jpg',
                link: '#'
            },
            {
                destination: 'New York, USA',
                price: '$199',
                imgSrc: 'newyork.jpg',
                link: '#'
            },
            {
                destination: 'Sydney, Australia',
                price: '$399',
                imgSrc: 'sydney.jpg',
                link: '#'
            }
        ];

        const dealsContainer = document.querySelector('.deals-container');

        // Loop through deals and create HTML for each deal
        weeklyDeals.forEach(deal => {
            const dealCard = document.createElement('div');
            dealCard.classList.add('deal-card');

            dealCard.innerHTML = `
                <img src="${deal.imgSrc}" alt="${deal.destination}" class="deal-img">
                <h3>${deal.destination}</h3>
                <p>Price: ${deal.price}</p>
                <a href="${deal.link}" class="btn-primary">Book Now</a>
            `;

            // Append each deal to the deals container
            dealsContainer.appendChild(dealCard);
        });
    });
}

// Contact Form for contact.html
if (document.getElementById('form-contact')) {
    document.getElementById('form-contact').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get values from the form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple form validation
        if (name && email && message) {
            // Simulate form submission success (you could integrate with an actual backend here)
            alert('Thank you for your message! We will get back to you soon.');

            // Optionally, clear the form after successful submission
            document.getElementById('form-contact').reset();
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });
}
