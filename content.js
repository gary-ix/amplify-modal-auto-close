// Function to find and close AWS Amplify modals
function closeAwsModals() {
    console.log('Searching for AWS Amplify OAuth migration modal...');
    
    // Try to find the specific OAuth migration modal
    const oauthModal = document.querySelector('dialog[data-testid="oauth-migration-modal"]');
    
    if (oauthModal) {
        console.log('Found OAuth migration modal');
        
        // Try to find the "Remind me later" button
        const remindLaterButton = oauthModal.querySelector('button[data-analytics="OAuthMigrationRemindMeLater"]');
        
        if (remindLaterButton) {
            console.log('Clicking "Remind me later" button');
            remindLaterButton.click();
        } else {
            // Fallback to close button if "Remind me later" isn't found
            const closeButton = oauthModal.querySelector('button[data-testid="dialog-close-icon"]');
            if (closeButton) {
                console.log('Clicking close button');
                closeButton.click();
            }
        }
    } else {
        console.log('OAuth migration modal not found');
    }
}

// Debug message to confirm extension is loaded
console.debug('AWS Amplify Modal Auto Close extension loaded');

// Create a MutationObserver to watch for dynamically added modals
const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        // Check if any of the added nodes is our target modal
        const hasModal = Array.from(mutation.addedNodes).some(node => 
            node.nodeType === 1 && // Element node
            node.matches && // Has matches method
            (node.matches('dialog[data-testid="oauth-migration-modal"]') ||
             node.querySelector('dialog[data-testid="oauth-migration-modal"]'))
        );
        
        if (hasModal) {
            console.log('OAuth migration modal detected - attempting to close');
            closeAwsModals();
        }
    }
});

// Start observing the document with the configured parameters
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Try to close modals when the page loads
document.addEventListener('DOMContentLoaded', closeAwsModals);

// Check periodically for the modal
// setInterval(closeAwsModals, 2000); 