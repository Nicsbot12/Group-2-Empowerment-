document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display blog posts
    fetch('/api/posts')
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById('posts');
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
                postsContainer.appendChild(postElement);
            });
        });
});
