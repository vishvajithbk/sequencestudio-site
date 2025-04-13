// Get references to the necessary elements
const modeToggleButton = document.getElementById('mode-toggle-button');
const bodyElement = document.body; // Get the body element directly

// Add an event listener to the button for click events
modeToggleButton.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body element
    bodyElement.classList.toggle('dark-mode');

    // Optional: You could also change the button text if desired
    // if (bodyElement.classList.contains('dark-mode')) {
    //     modeToggleButton.textContent = 'Light Mode';
    // } else {
    //     modeToggleButton.textContent = 'Dark Mode';
    // }
});
