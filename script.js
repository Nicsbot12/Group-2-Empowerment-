document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const media = document.getElementById('media').files[0];

    // Create a FileReader to read the uploaded file
    const reader = new FileReader();
    reader.onload = function(e) {
        const post = {
            title: title,
            content: content,
            media: e.target.result // This will be the base64 encoded string of the file
        };

        // Get existing posts from local storage or initialize an empty array
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(post); // Add the new post to the array

        // Save the updated posts array back to local storage
        localStorage.setItem('posts', JSON.stringify(posts));

        // Redirect to the homepage
        window.location.href = 'index.html';
    };

    // Read the uploaded file as a data URL (base64)
    reader.readAsDataURL(media);
});
