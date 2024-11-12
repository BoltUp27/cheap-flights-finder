document.addEventListener('DOMContentLoaded', function() {
    // Check if the .deals-container exists before running the code
    const dealsContainer = document.querySelector('.deals-container');
    if (!dealsContainer) return; // Exit if there's no container

    // Array of weekly deals data
    const weeklyDeals = [
        { destination: 'Paris, France', price: '$299', imgSrc: 'assets/images/paris.png', link: '#' },
        { destination: 'Tokyo, Japan', price: '$499', imgSrc: 'assets/images/tokyo.png', link: '#' },
        { destination: 'New York, USA', price: '$199', imgSrc: 'assets/images/newyork.png', link: '#' },
        { destination: 'Sydney, Australia', price: '$399', imgSrc: 'assets/images/sydney.png', link: '#' }
    ];

    // Function to create deal card HTML
    function createDealCard(deal) {
        return `
            <div class="deal-card">
                <img src="${deal.imgSrc}" alt="${deal.destination}" class="deal-img">
                <h3>${deal.destination}</h3>
                <p>Price: ${deal.price}</p>
                <a href="${deal.link}" class="btn-primary">Book Now</a>
            </div>
        `;
    }

    // Render all deal cards
    const dealCardsHTML = weeklyDeals.map(createDealCard).join('');
    dealsContainer.innerHTML = dealCardsHTML;

    // Apply hover effect and transitions to the cards
    const dealCards = document.querySelectorAll('.deal-card');
    dealCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Optional: Log to the console to verify the deals are loaded
    console.log(`${weeklyDeals.length} deals loaded successfully`);

    // Add event listener to the "Book Now" links
    const bookLinks = document.querySelectorAll('.btn-primary');
    bookLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Optional: Track clicks or show an alert for demo purposes
            console.log(`Booking for: ${this.parentElement.querySelector('h3').innerText}`);
        });
    });

    // Optional: Display message if no deals exist (edge case)
    if (weeklyDeals.length === 0) {
        const noDealsMessage = `<p>No current deals available. Please check back later!</p>`;
        dealsContainer.innerHTML = noDealsMessage;
    }
});
