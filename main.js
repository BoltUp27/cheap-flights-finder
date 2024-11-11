// Wait for the DOM to load completely before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Check if the .deals-container element exists before proceeding
    const dealsContainer = document.querySelector('.deals-container');
    if (!dealsContainer) return; // Stop if the deals section isn't found on the page

    // Define the weekly deals array with data (this can be updated weekly)
    const weeklyDeals = [
        {
            destination: 'Paris, France',
            price: '$299',
            imgSrc: 'assets/images/paris.png',  // Ensure the image path is correct
            link: '#'
        },
        {
            destination: 'Tokyo, Japan',
            price: '$499',
            imgSrc: 'assets/images/tokyo.png',  // Ensure the image path is correct
            link: '#'
        },
        {
            destination: 'New York, USA',
            price: '$199',
            imgSrc: 'assets/images/newyork.png',  // Ensure the image path is correct
            link: '#'
        },
        {
            destination: 'Sydney, Australia',
            price: '$399',
            imgSrc: 'assets/images/sydney.png',  // Ensure the image path is correct
            link: '#'
        }
    ];

    // Function to create a deal card HTML element
    function createDealCard(deal) {
        const dealCard = document.createElement('div');
        dealCard.classList.add('deal-card');  // Add a class to style the deal card

        // Create and insert the HTML content for each deal card
        dealCard.innerHTML = `
            <img src="${deal.imgSrc}" alt="${deal.destination}" class="deal-img"> <!-- Image -->
            <h3>${deal.destination}</h3>  <!-- Destination Name -->
            <p>Price: ${deal.price}</p>  <!-- Price -->
            <a href="${deal.link}" class="btn-primary">Book Now</a>  <!-- "Book Now" button -->
        `;

        return dealCard;
    }

    // Loop through the weeklyDeals array and add a deal card for each one
    weeklyDeals.forEach(deal => {
        const dealCard = createDealCard(deal);  // Generate deal card
        dealsContainer.appendChild(dealCard);  // Append the deal card to the container
    });
});

