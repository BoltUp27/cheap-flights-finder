document.addEventListener('DOMContentLoaded', () => {
    // Get the form and results container
    const searchForm = document.getElementById('search-form');
    const resultsContainer = document.getElementById('results-container');

    // Handle the search form submission
    if (searchForm) {
        searchForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const fromCity = document.getElementById('from-city').value.trim();
            const toCity = document.getElementById('to-city').value.trim();
            const departureDate = document.getElementById('departure-date').value;

            if (fromCity && toCity && departureDate) {
                // Redirect to results.html with query parameters
                window.location.href = `results.html?fromCity=${fromCity}&toCity=${toCity}&departureDate=${departureDate}`;
            } else {
                alert('Please fill in all the fields');
            }
        });
    }

    // Code for displaying flight results on results.html page
    if (resultsContainer) {
        // Get query parameters from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const fromCity = urlParams.get('fromCity');
        const toCity = urlParams.get('toCity');
        const departureDate = urlParams.get('departureDate');

        if (fromCity && toCity && departureDate) {
            // Display a header with the search details
            resultsContainer.innerHTML = `
                <h3>Flights from ${fromCity} to ${toCity} on ${departureDate}</h3>
            `;

            // Mock flight results for demonstration
            const mockResults = [
                {
                    airline: 'American Airlines',
                    price: '$300',
                    departure: '2024-12-01',
                    from: fromCity,
                    to: toCity,
                    flightNumber: 'AA123',
                    flightTime: '2h 15m'
                },
                {
                    airline: 'Delta Airlines',
                    price: '$320',
                    departure: '2024-12-02',
                    from: fromCity,
                    to: toCity,
                    flightNumber: 'DL456',
                    flightTime: '2h 30m'
                },
                {
                    airline: 'United Airlines',
                    price: '$280',
                    departure: '2024-12-05',
                    from: fromCity,
                    to: toCity,
                    flightNumber: 'UA789',
                    flightTime: '2h 10m'
                }
            ];

            // Loop through mock results and display them
            mockResults.forEach(flight => {
                const flightCard = document.createElement('div');
                flightCard.classList.add('flight-card');

                flightCard.innerHTML = `
                    <h4>Flight ${flight.flightNumber}</h4>
                    <p><strong>Airline:</strong> ${flight.airline}</p>
                    <p><strong>Price:</strong> ${flight.price}</p>
                    <p><strong>Departure:</strong> ${flight.departure}</p>
                    <p><strong>From:</strong> ${flight.from}</p>
                    <p><strong>To:</strong> ${flight.to}</p>
                    <p><strong>Flight Time:</strong> ${flight.flightTime}</p>
                `;

                resultsContainer.appendChild(flightCard);
            });
        } else {
            resultsContainer.innerHTML = '<p>No results found. Please go back and try again.</p>';
        }
    }
});
