document.addEventListener('DOMContentLoaded', function () {
    // Only run the code if we are on the deals page (checking if .deals-container exists)
    if (document.querySelector('.deals-container')) {

        // Define the weekly deals array with data (this can be updated weekly)
        const weeklyDeals = [
            {
                destination: 'Paris, France',
                price: '$299',
                imgSrc: 'assets/images/paris.png',  // Make sure the image path is correct
                link: '#'  // Link to the booking page or a details page
            },
            {
                destination: 'Tokyo, Japan',
                price: '$499',
                imgSrc: 'assets/images/tokyo.png',  // Make sure the image path is correct
                link: '#'
            },
            {
                destination: 'New York, USA',
                price: '$199',
                imgSrc: 'assets/images/newyork.png',  // Make sure the image path is correct
                link: '#'
            },
            {
                destination: 'Sydney, Australia',
                price: '$399',
                imgSrc: 'assets/images/sydney.png',  // Make sure the image path is correct
                link: '#'
            }
        ];

        // Get the container where the deals will be displayed
        const dealsContainer = document.querySelector('.deals-container');

        // Loop through the weeklyDeals array and dynamically create a deal card for each deal
        weeklyDeals.forEach(deal => {
            const dealCard = document.createElement('div');
            dealCard.classList.add('deal-card');  // Add a class to style the deal card

            // Create the HTML content for each deal card
            dealCard.innerHTML = `
                <img src="${deal.imgSrc}" alt="${deal.destination}" class="deal-img"> <!-- Image -->
                <h3>${deal.destination}</h3>  <!-- Destination Name -->
                <p>Price: ${deal.price}</p>  <!-- Price -->
                <a href="${deal.link}" class="btn-primary">Book Now</a>  <!-- "Book Now" button -->
            `;

            // Append the newly created deal card to the container
            dealsContainer.appendChild(dealCard);
        });
    }

    // Handle Flight Search Results
    if (document.querySelector('.search-results')) {

        // Get the query parameters from the URL
        const urlParams = new URLSearchParams(window.location.search);

        // Extract search parameters (from-city, to-city, departure-date)
        const fromCity = urlParams.get('from-city');
        const toCity = urlParams.get('to-city');
        const departureDate = urlParams.get('departure-date');

        // Display the search details on the page
        if (fromCity && toCity && departureDate) {
            document.getElementById('from-city').textContent = fromCity;
            document.getElementById('to-city').textContent = toCity;
            document.getElementById('departure-date').textContent = departureDate;
        }

        // Mock flight search results (you would replace this with actual flight data)
        const flightResults = [
            {
                airline: 'Airline 1',
                price: '$300',
                departure: '2024-12-01',
                link: '#'
            },
            {
                airline: 'Airline 2',
                price: '$350',
                departure: '2024-12-01',
                link: '#'
            },
            {
                airline: 'Airline 3',
                price: '$280',
                departure: '2024-12-01',
                link: '#'
            }
        ];

        // Get the container where we will add the results
        const flightResultsContainer = document.querySelector('.flight-results');

        // Loop through the mock flight results and display them dynamically
        flightResults.forEach(flight => {
            const flightCard = document.createElement('div');
            flightCard.classList.add('flight-card');

            flightCard.innerHTML = `
                <h3>${flight.airline}</h3>
                <p><strong>Price:</strong> ${flight.price}</p>
                <p><strong>Departure Date:</strong> ${flight.departure}</p>
                <a href="${flight.link}" class="btn-primary">Book Now</a>
            `;

            // Append the flight card to the results container
            flightResultsContainer.appendChild(flightCard);
        });
    }
});
