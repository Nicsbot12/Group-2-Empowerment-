document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    
    fetch('/api/contact', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
