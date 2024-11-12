document.addEventListener('DOMContentLoaded', function() {
    // Search form and results handling
    const searchForm = document.querySelector('.search-form');
    const searchResults = document.querySelector('.search-results');
    const fromCity = document.querySelector('#from');
    const toCity = document.querySelector('#to');
    const dateInput = document.querySelector('#departure-date');
  
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Retrieve user input
      const from = fromCity.value.trim();
      const to = toCity.value.trim();
      const date = dateInput.value.trim();
  
      if (!from || !to || !date) {
        alert('Missing search details. Please go back and try again.');
        return;
      }
  
      // Store the search details in localStorage or pass them via URL
      localStorage.setItem('searchDetails', JSON.stringify({ from, to, date }));
  
      // Redirect to search results page
      window.location.href = 'search_results.html';
    });
  });
  