document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-banner img'); // Select all images
    let currentIndex = 0; // Start with the first image

    function changeImage() {
        // Ensure we correctly remove 'active' from the current image
        images[currentIndex].classList.remove('active');
        
        // Move to the next image
        currentIndex = (currentIndex + 1) % images.length;
        
        // Add 'active' to the new current image
        images[currentIndex].classList.add('active');
    }

    // Initially set the first image as active
    images[currentIndex].classList.add('active');

    // Change the image every 3 seconds
    setInterval(changeImage, 3000);
});
