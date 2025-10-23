// Wait until the entire HTML document is loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    updateCurrentYear();
    setupContactToggle();
});

/**
 * Updates the current year in the footer section.
 */
function updateCurrentYear() {
    // Get the element with the ID 'currentYear'
    const currentYearElement = document.getElementById('currentYear');
    
    // Check if the element exists to prevent errors
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Sets up the event listener for the contact info toggle button.
 */
function setupContactToggle() {
    const toggleButton = document.getElementById('contactToggle');
    const contactDetails = document.getElementById('contactDetails');

    // Check if both the button and details exist
    if (toggleButton && contactDetails) {
        toggleButton.addEventListener('click', function() {
            // Determine the current visibility state based on the 'hidden' class
            const isHidden = contactDetails.classList.contains('hidden');

            if (isHidden) {
                // SHOW the details
                contactDetails.classList.remove('hidden');
                contactDetails.classList.add('animate-fadeIn'); // Apply CSS animation
                toggleButton.textContent = 'Hide Contact Info';
            } else {
                // HIDE the details
                contactDetails.classList.remove('animate-fadeIn');
                contactDetails.classList.add('hidden');
                toggleButton.textContent = 'Show Contact Info';
            }
        });
    }
}
