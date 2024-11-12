// Wait for the DOM to load completely before executing the script
document.addEventListener('DOMContentLoaded', function() {
    
  // Only run the code if we are on the deals page (checking if .deals-container exists)
  if (document.querySelector('.deals-container')) {

      // Define the weekly deals array with data (this can be updated weekly)
      const weeklyDeals = [
          {
              destination: 'Paris, France',
              price: '$149',  // Reduced price
              imgSrc: 'paris.png',  // Image path
              link: '#'  // Link to the booking page or details page
          },
          {
              destination: 'Tokyo, Japan',
              price: '$199',  // Reduced price
              imgSrc: 'tokyo.png',  // Image path
              link: '#'
          },
          {
              destination: 'New York, USA',
              price: '$99',  // Reduced price
              imgSrc: 'newyork.png',  // Image path
              link: '#'
          },
          {
              destination: 'Sydney, Australia',
              price: '$249',  // Reduced price
              imgSrc: 'sydney.png',  // Image path
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
});
