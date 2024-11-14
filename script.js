document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const content = document.getElementById('content').value;
    const mediaFiles = document.getElementById('media').files; // Get all selected files

    const reader = new FileReader();
    let mediaArray = [];
    let filesProcessed = 0;

    // Loop through all selected files
    for (let i = 0; i < mediaFiles.length; i++) {
        const file = mediaFiles[i];
        reader.onload = function(e) {
            mediaArray.push(e.target.result); // Add the base64 string of the file

            filesProcessed++;

            // Once all files are processed, store the post
            if (filesProcessed === mediaFiles.length) {
                const post = {
                    content: content,
                    media: mediaArray // Array of base64 encoded media
                };

                // Store posts in local storage
                const posts = JSON.parse(localStorage.getItem('posts')) || [];
                posts.push(post);
                localStorage.setItem('posts', JSON.stringify(posts));

                // Clear form and refresh display
                document.getElementById('postForm').reset();
                displayPosts();
            }
        };

        reader.readAsDataURL(file); // Read each file
    }
});

// Function to display all posts
function displayPosts() {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = ''; // Clear previous posts

    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        // Display each media item in the post
        post.media.forEach(media => {
            const mediaElement = document.createElement(media.startsWith('data:image') ? 'img' : 'video');
            mediaElement.src = media;
            mediaElement.controls = true; // Add controls for video
            mediaElement.style.width = '100%'; // Adjust width
            postDiv.appendChild(mediaElement);
        });

        const contentParagraph = document.createElement('p');
        contentParagraph.textContent = post.content;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            deletePost(index);
        };

        postDiv.appendChild(contentParagraph);
        postDiv.appendChild(deleteButton);
        postsContainer.appendChild(postDiv);
    });
}

// Function to delete a post
function deletePost(index) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.splice(index, 1); // Remove the post
    localStorage.setItem('posts', JSON.stringify(posts)); // Update storage
    displayPosts(); // Refresh display
}

// Initial call to display posts on page load
displayPosts();
        
