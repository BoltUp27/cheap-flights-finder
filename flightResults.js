document.addEventListener('DOMContentLoaded', function() {
    // Retrieve search details from localStorage
    const searchDetails = JSON.parse(localStorage.getItem('searchDetails'));
  
    if (!searchDetails) {
      document.querySelector('.search-results').innerHTML = 'Missing search details. Please go back and try again.';
      return;
    }
  
    // Display search details
    document.querySelector('#from-city').textContent = searchDetails.from;
    document.querySelector('#to-city').textContent = searchDetails.to;
    document.querySelector('#departure-date').textContent = searchDetails.date;
  
    // Sample data for flights (you can replace this with actual flight data)
    const flights = generateFlightResults(searchDetails.from, searchDetails.to);
  
    // Dynamically create flight cards
    const flightResultsContainer = document.querySelector('.flight-results');
    flights.forEach(flight => {
      const flightCard = createFlightCard(flight);
      flightResultsContainer.appendChild(flightCard);
    });
  });
  
  function generateFlightResults(from, to) {
    // Here you would normally calculate based on the cities and distance, but we'll use static data for now.
    const flightData = [
      { from, to, price: getRandomPrice(), duration: getRandomDuration() },
      { from, to, price: getRandomPrice(), duration: getRandomDuration() },
      { from, to, price: getRandomPrice(), duration: getRandomDuration() },
    ];
  
    return flightData;
  }
  
  function getRandomPrice() {
    const min = 100;
    const max = 1000;
    return `$${(Math.random() * (max - min) + min).toFixed(2)}`;
  }
  
  function getRandomDuration() {
    const min = 1;
    const max = 15;
    return `${Math.floor(Math.random() * (max - min) + min)} hours`;
  }
  
  function createFlightCard(flight) {
    const card = document.createElement('div');
    card.classList.add('flight-card');
    
    card.innerHTML = `
      <h3>${flight.from} to ${flight.to}</h3>
      <p>Price: ${flight.price}</p>
      <p>Duration: ${flight.duration}</p>
      <a href="#" class="btn-primary">Book Now</a>
    `;
  
    return card;
  }
  