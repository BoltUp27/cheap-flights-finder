document.addEventListener('DOMContentLoaded', () => {
    // Get the form and results container
    const searchForm = document.getElementById('search-form');
    const resultsContainer = document.getElementById('results-container');
    const searchResultsSection = document.getElementById('search-results');

    // City distances in miles (mock data)
    const cityDistances = {
        "chicago": {
            "milwaukee": 92,
            "honolulu": 4190,
            "las vegas": 1744,
            "houston": 1087,
            "boston": 1000,
            "san diego": 1744
        },
        "milwaukee": {
            "chicago": 92,
            "honolulu": 4190,
            "las vegas": 1744,
            "houston": 1087,
            "boston": 1000,
            "san diego": 1744
        },
        "honolulu": {
            "chicago": 4190,
            "milwaukee": 4190,
            "las vegas": 2825,
            "houston": 3723,
            "boston": 5100,
            "san diego": 2445
        },
        "san diego": {
            "chicago": 1744,
            "milwaukee": 1744,
            "honolulu": 2445,
            "las vegas": 330,
            "houston": 1369,
            "boston": 2689
        },
        "las vegas": {
            "chicago": 1744,
            "milwaukee": 1744,
            "honolulu": 2825,
            "san diego": 330,
            "houston": 1189,
            "boston": 2171
        },
        "houston": {
            "chicago": 1087,
            "milwaukee": 1087,
            "honolulu": 3723,
            "san diego": 1369,
            "las vegas": 1189,
            "boston": 1637
        },
        "boston": {
            "chicago": 1000,
            "milwaukee": 1000,
            "honolulu": 5100,
            "san diego": 2689,
            "las vegas": 2171,
            "houston": 1637
        }
    };

    // Function to generate flight time based on distance
    function generateFlightTime(fromCity, toCity) {
        const distance = cityDistances[fromCity][toCity.toLowerCase()];
        
        // Define flight duration based on distance
        let flightTime;
        if (distance <= 500) {
            flightTime = `${Math.floor(Math.random() * 2) + 1} hours`;
        } else if (distance <= 1500) {
            flightTime = `${Math.floor(Math.random() * 3) + 2} hours`;
        } else {
            flightTime = `${Math.floor(Math.random() * 6) + 5} hours`;
        }
        
        return flightTime;
    }

    // Handle the search form submission
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const fromCity = document.getElementById('from-city').value.trim().toLowerCase();
        const toCity = document.getElementById('to-city').value.trim().toLowerCase();
        const departureDate = document.getElementById('departure-date').value;

        if (fromCity && toCity && departureDate) {
            // Display mock results (you can replace this with real data or API calls)
            displayResults(fromCity, toCity, departureDate);

            // Scroll to the results section
            searchResultsSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('Please fill in all the fields');
        }
    });

    // Function to display results with real airlines
    function displayResults(fromCity, toCity, departureDate) {
        // Clear previous results
        resultsContainer.innerHTML = '';

        // Generate flight time for the selected cities
        const flightTime = generateFlightTime(fromCity, toCity);

        // List of real airlines
        const airlines = [
            'American Airlines',
            'Delta Air Lines',
            'Southwest Airlines',
            'United Airlines',
            'Alaska Airlines',
            'JetBlue Airways',
            'Hawaiian Airlines'
        ];

        // Create mock flight results (this could be dynamic data from an API)
        const mockResults = [
            {
                airline: airlines[Math.floor(Math.random() * airlines.length)], // Random airline from the list
                price: '$350',
                departure: '2024-12-01',
                from: fromCity,
                to: toCity,
                flightNumber: 'SE123',
                flightTime: flightTime
            },
            {
                airline: airlines[Math.floor(Math.random() * airlines.length)], // Random airline from the list
                price: '$300',
                departure: '2024-12-02',
                from: fromCity,
                to: toCity,
                flightNumber: 'SA456',
                flightTime: flightTime
            },
            {
                airline: airlines[Math.floor(Math.random() * airlines.length)], // Random airline from the list
                price: '$280',
                departure: '2024-12-05',
                from: fromCity,
                to: toCity,
                flightNumber: 'FN789',
                flightTime: flightTime
            },
        ];

        // Loop through mock results and display them
        mockResults.forEach(flight => {
            const flightCard = document.createElement('div');
            flightCard.classList.add('flight-card');

            flightCard.innerHTML = `
                <h3>Flight ${flight.flightNumber}</h3>
                <p><strong>Airline:</strong> ${flight.airline}</p>
                <p><strong>Price:</strong> ${flight.price}</p>
                <p><strong>Departure:</strong> ${flight.departure}</p>
                <p><strong>From:</strong> ${flight.from}</p>
                <p><strong>To:</strong> ${flight.to}</p>
                <p><strong>Flight Time:</strong> ${flight.flightTime}</p> <!-- Display flight time -->
            `;

            resultsContainer.appendChild(flightCard);
        });

        // Show the results section
        searchResultsSection.style.display = 'block';
    }
});
