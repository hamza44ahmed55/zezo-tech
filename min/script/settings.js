document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const siteTitle = document.getElementById('site-title').value;
        const siteDescription = document.getElementById('site-description').value;

        // Create an object with the form data
        const formData = {
            title: siteTitle,
            description: siteDescription
        };

        // Send the data to the server using the Fetch API
        fetch('/validate-settings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.valid) {
                window.location.href = '../index.html';
            } else {
                alert('Invalid input. Closing the web app.');
                window.close();
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred while validating input.');
        });
    });
});