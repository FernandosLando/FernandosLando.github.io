// Select all video elements inside the rectangles
const videos = document.querySelectorAll('.video-rectangle video');

videos.forEach(video => {
    // Get the parent rectangle
    const rectangle = video.closest('.video-rectangle');
    
    rectangle.addEventListener('mouseenter', () => {
        video.play();
    });

    rectangle.addEventListener('mouseleave', event => {
        // Check if the mouse has left the rectangle and not just hovering over the button
        if (!rectangle.contains(event.relatedTarget) || event.relatedTarget?.classList?.contains('next-category-button')) {
            return; // If hovering over the button within the rectangle, do nothing
        }
        video.pause();
        video.currentTime = 0; // Reset video to the beginning
    });
});

// Scroll to content-section when the "View Categories" button is clicked
const viewCategoriesButton = document.getElementById('view-categories-button');
viewCategoriesButton.addEventListener('click', () => {
    const contentSection = document.getElementById('content-section');
    contentSection.scrollIntoView({ behavior: 'smooth' });
});

// Scroll to the next rectangle when "Next Category" button is clicked
const nextButtons = document.querySelectorAll('.next-category-button');

nextButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const nextRectangle = document.querySelectorAll('.video-rectangle')[index + 1];
        if (nextRectangle) {
            nextRectangle.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Play audio on hover over each video rectangle
const rectangles = document.querySelectorAll('.video-rectangle');

rectangles.forEach(rectangle => {
    const audio = rectangle.querySelector('.rectangle-audio');
    rectangle.addEventListener('mouseenter', () => {
        if (audio) {
            audio.play();
        }
    });

    rectangle.addEventListener('mouseleave', () => {
        if (audio) {
            audio.pause();
            audio.currentTime = 0; // Reset audio to the beginning
        }
    });
    const buyButton = document.getElementById('buy-button');
buyButton.addEventListener('click', () => {
    window.location.href = 'buy.html'; // Redirect to the buy page
});

});
