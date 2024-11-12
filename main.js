document.addEventListener('DOMContentLoaded', function() {
    // Function to calculate the distance between two cities based on their latitudes and longitudes
    function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Earth radius in kilometers
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; // Distance in kilometers
        return distance;
    }

    // City coordinates (lat, lon) for distance calculation (just a small subset for demonstration)
    const cityCoordinates = {
        'Los Angeles': { lat: 34.0522, lon: -118.2437 },
        'New York': { lat: 40.7128, lon: -74.0060 },
        'San Francisco': { lat: 37.7749, lon: -122.4194 },
        'Paris': { lat: 48.8566, lon: 2.3522 },
        'Tokyo': { lat: 35.6762, lon: 139.6503 },
        'Sydney': { lat: -33.8688, lon: 151.2093 },
        'Miami': { lat: 25.7617, lon: -80.1918 },
        'London': { lat: 51.5074, lon: -0.1278 },
        'Rome': { lat: 41.9028, lon: 12.4964 }
    };

    // Example of flight data
    const flights = [
        { from: 'Los Angeles', to: 'New York', duration: '5 hours' },
        { from: 'San Francisco', to: 'Paris', duration: '10 hours' },
        { from: 'Miami', to: 'Tokyo', duration: '14 hours' },
        { from: 'Sydney', to: 'Melbourne', duration: '1 hour' },
        { from: 'London', to: 'Rome', duration: '2 hours' },
        { from: 'New York', to: 'Los Angeles', duration: '6 hours' },
        { from: 'Tokyo', to: 'Los Angeles', duration: '11 hours' }
    ];

    // Function to generate price dynamically based on distance
    function calculatePrice(from, to) {
        const fromCity = cityCoordinates[from];
        const toCity = cityCoordinates[to];

        if (!fromCity || !toCity) return '$0'; // Return $0 if city coordinates are missing

        const distance = calculateDistance(fromCity.lat, fromCity.lon, toCity.lat, toCity.lon);
        
        // Assuming $100 for every 500 km
        const basePrice = 100; // Base price per 500 km
        const price = Math.ceil(distance / 500) * basePrice;
        
        return `$${price}`;
    }

    // Check if on search results page
    if (window.location.pathname.includes('search_results.html')) {
        // Retrieve search parameters from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const fromCity = urlParams.get('from');
        const toCity = urlParams.get('to');
        const departureDate = urlParams.get('departure');

        // Check if parameters are valid and display them
        if (fromCity && toCity && departureDate) {
            document.getElementById('from-city').textContent = fromCity;
            document.getElementById('to-city').textContent = toCity;
            document.getElementById('departure-date').textContent = departureDate;

            // Filter flights based on the entered cities
            const filteredFlights = flights.filter(flight => {
                return (
                    flight.from.toLowerCase() === fromCity.toLowerCase() && 
                    flight.to.toLowerCase() === toCity.toLowerCase()
                );
            });

            // If flights are found, display them
            if (filteredFlights.length > 0) {
                const flightResultsHTML = filteredFlights.map(flight => {
                    const price = calculatePrice(flight.from, flight.to); // Calculate price dynamically
                    return `
                        <div class="flight-card">
                            <h3>${flight.from} to ${flight.to}</h3>
                            <p>Duration: ${flight.duration}</p>
                            <p>Price: ${price}</p>
                        </div>
                    `;
                }).join('');
                document.querySelector('.flight-results').innerHTML = flightResultsHTML;
            } else {
                // If no flights match the search, show a message
                document.querySelector('.flight-results').innerHTML = `
                    <p>No flights available for your search criteria. Please check your spelling or try different cities.</p>
                `;
            }

        } else {
            // Show a message if any of the search details are missing
            document.querySelector('.search-results').innerHTML = "<p>Missing search details. Please go back and try again.</p>";
        }
    }
});
