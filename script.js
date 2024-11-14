document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const content = document.getElementById('content').value;
    const mediaFiles = document.getElementById('media').files; // Get all selected files

    Array.from(mediaFiles).forEach(media => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const post = {
                content: content,
                media: e.target.result // Base64 encoded string
            };

            // Store posts in local storage
            const posts = JSON.parse(localStorage.getItem('posts')) || [];
            posts.push(post);
            localStorage.setItem('posts', JSON.stringify(posts));

            // Clear form and refresh display
            document.getElementById('postForm').reset();
            displayPosts();
        };

        reader.readAsDataURL(media); // Read each file
    });
});

// Function to display all posts
function displayPosts() {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = ''; // Clear previous posts

    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const mediaElement = document.createElement(post.media.startsWith('data:image') ? 'img' : 'video');
        mediaElement.src = post.media;
        mediaElement.controls = true; // Add controls for video
        mediaElement.style.width = '100%'; // Adjust width

        const contentParagraph = document.createElement('p');
        contentParagraph.textContent = post.content;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            deletePost(index);
        };

        postDiv.appendChild(mediaElement);
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
            
