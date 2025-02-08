// Initialize the application
document.addEventListener("DOMContentLoaded", function() {
    console.log("Application initialized");
    changeHeroImage();
});

// Function to change hero background image instantly
function changeHeroImage() {
    const images = [
        '../images/ai.jpg',
        '../images/ear.jpg',
        '../images/waste.jpg',
        '../images/edge.jpg'
    ];
    
    // Set a random image on page load
    const randomIndex = Math.floor(Math.random() * images.length);
    document.getElementById('hero-section').style.backgroundImage = `url('${images[randomIndex]}')`;

    // Change image on click
    document.getElementById('hero-section').addEventListener('click', () => {
        const newIndex = Math.floor(Math.random() * images.length);
        document.getElementById('hero-section').style.backgroundImage = `url('${images[newIndex]}')`;
    });
}
