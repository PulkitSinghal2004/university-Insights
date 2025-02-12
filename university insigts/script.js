document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from actually submitting

    // Basic Form Validation (Enhance as needed)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const country = document.getElementById('country').value;

    if (!name || !email || !phone || !country) {
        alert("Please fill in all fields.");
        return;
    }

    // Here you would typically send the form data to a server
    // For this example, we'll just log it to the console
    console.log({ name, email, phone, country });

    // Reset the form (optional)
    this.reset();
    alert("Thank you for your inquiry!");

    // Google Analytics and Facebook Pixel tracking:
    // (Add your actual tracking code snippets here)
    // Example:
    // gtag('event', 'generate_lead', { 'value': 1 }); // Google Analytics
    // fbq('track', 'Lead'); // Facebook Pixel

    // script.js
document.getElementById('leadForm').addEventListener('submit', function(event) {
    // ... (your existing form validation code) ...

    // Google Analytics Event Tracking (Example)
    gtag('event', 'generate_lead', {
        'event_category': 'Leads', // Categorize your events
        'event_label': 'MBBS Abroad Form', // Label the specific event
        'value': 1 // Optional value (e.g., lead value)
    });

    // Facebook Pixel Event Tracking (Example)
    fbq('track', 'Lead', {
        // Add any relevant data about the lead here (optional)
        // Example:
        // country: document.getElementById('country').value,
        // ... other lead information
    });

});
});

