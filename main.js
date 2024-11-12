document.addEventListener('DOMContentLoaded', () => {
    // Get the form and results container
    const searchForm = document.getElementById('search-form');
    const resultsContainer = document.getElementById('results-container');
    const searchResultsSection = document.getElementById('search-results');
  
    // Handle the search form submission
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
      // Get form values
      const fromCity = document.getElementById('from-city').value.trim();
      const toCity = document.getElementById('to-city').value.trim();
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
  
    // Function to display results
    function displayResults(fromCity, toCity, departureDate) {
      // Clear previous results
      resultsContainer.innerHTML = '';
  
      // Create mock flight results (this could be dynamic data from an API)
      const mockResults = [
        {
          airline: 'SkyEase Airlines',
          price: '$350',
          departure: '2024-12-01',
          from: fromCity,
          to: toCity,
          flightNumber: 'SE123',
        },
        {
          airline: 'SkyAir',
          price: '$300',
          departure: '2024-12-02',
          from: fromCity,
          to: toCity,
          flightNumber: 'SA456',
        },
        {
          airline: 'FlyNow',
          price: '$280',
          departure: '2024-12-05',
          from: fromCity,
          to: toCity,
          flightNumber: 'FN789',
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
        `;
  
        resultsContainer.appendChild(flightCard);
      });
  
      // Show the results section
      searchResultsSection.style.display = 'block';
    }
  });
  