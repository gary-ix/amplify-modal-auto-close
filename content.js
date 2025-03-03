// Function to find and close AWS modals
function closeAwsModals() {
    // Common AWS modal selectors
    const modalSelectors = [
        // Modal close button selectors
        'button[aria-label="Close modal"]',
        'button.awsui-modal-dismiss-control',
        'button.modal-close-button',
        // Add more selectors as needed
    ];

    modalSelectors.forEach(selector => {
        const closeButtons = document.querySelectorAll(selector);
        closeButtons.forEach(button => {
            if (button && button.offsetParent !== null) { // Check if button is visible
                console.log('Found modal close button, attempting to close...');
                button.click();
            }
        });
    });
}

// Create a MutationObserver to watch for dynamically added modals
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            closeAwsModals();
        }
    });
});

// Start observing the document with the configured parameters
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Also try to close modals when the page loads
// document.addEventListener('DOMContentLoaded', closeAwsModals);

// Try periodically in case modals appear through other means
// setInterval(closeAwsModals, 2000); 