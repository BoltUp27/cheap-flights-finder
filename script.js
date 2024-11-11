document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get user input
  const fromCity = document.getElementById('from-city').value;
  const toCity = document.getElementById('to-city').value;
  const departureDate = document.getElementById('departure-date').value;

  // Check if all fields are filled
  if (fromCity && toCity && departureDate) {
      // Clear any existing flight results
      const resultsContainer = document.getElementById('results-container');
      resultsContainer.innerHTML = '';

      // Simulate flight data based on user input
      const result = document.createElement('div');
      result.classList.add('flight-result');

      result.innerHTML = `
          <h3>Flight Results from ${fromCity} to ${toCity}</h3>
          <ul>
              <li>Flight 1: $200, Departure: 8:00 AM</li>
              <li>Flight 2: $250, Departure: 12:00 PM</li>
              <li>Flight 3: $180, Departure: 5:00 PM</li>
          </ul>
          <button>Book Now</button>
      `;

      // Append the result to the results container
      resultsContainer.appendChild(result);

      // Show the results section
      document.getElementById('flight-results').classList.remove('hidden');

      // Optional: Clear the form after submission
      document.getElementById('search-form').reset();

  } else {
      alert("Please fill in all fields.");
  }
});
