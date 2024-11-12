// Wait for the DOM to load completely before executing the script
document.addEventListener('DOMContentLoaded', function() {
    
  // Only run the code if we are on the deals page (checking if .deals-container exists)
  if (document.querySelector('.deals-container')) {

      // Define the weekly deals array with data (this can be updated weekly)
      const weeklyDeals = [
          {
              destination: 'Paris, France',
              price: '$299',
              imgSrc: 'paris.png',  // Make sure the image path is correct
              link: '#'  // Link to the booking page or a details page
          },
          {
              destination: 'Tokyo, Japan',
              price: '$499',
              imgSrc: 'tokyo.png',  // Make sure the image path is correct
              link: '#'
          },
          {
              destination: 'New York, USA',
              price: '$199',
              imgSrc: 'newyork.png',  // Make sure the image path is correct
              link: '#'
          },
          {
              destination: 'Sydney, Australia',
              price: '$399',
              imgSrc: 'sydney.png',  // Make sure the image path is correct
              link: '#'
          }
      ];

      // Get the container where the deals will be displayed
      const dealsContainer = document.querySelector('.deals-container');

      // Clear out any existing content to avoid duplication
      dealsContainer.innerHTML = '';

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
