document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    
    fetch('/api/posts', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Post published successfully!');
        document.getElementById('postForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
