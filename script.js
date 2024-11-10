document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get user input
    const fromCity = document.getElementById('from-city').value;
    const toCity = document.getElementById('to-city').value;
    const departureDate = document.getElementById('departure-date').value;
  
    if (fromCity && toCity && departureDate) {
      // For now, just simulate the result
      const result = `
        <h3>Flight Results from ${fromCity} to ${toCity}</h3>
        <ul>
          <li>Flight 1: $200, Departure: 8:00 AM</li>
          <li>Flight 2: $250, Departure: 12:00 PM</li>
          <li>Flight 3: $180, Departure: 5:00 PM</li>
        </ul>
      `;
  
      // Show the results below the form
      document.getElementById('flight-search').innerHTML += result;
    } else {
      alert("Please fill in all fields.");
    }
  });
  