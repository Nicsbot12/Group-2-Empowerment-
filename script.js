// script.js
document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('uploadForm');
    const postDisplay = document.getElementById('postDisplay');
    const loginForm = document.getElementById('loginForm');

    uploadForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        const title = document.getElementById('postTitle').value;
        const description = document.getElementById('postDescription').value;
        const mediaFile = document.getElementById('mediaFile').files[0];

        const reader = new FileReader();
        reader.onload = function(e) {
            const mediaElement = document.createElement(mediaFile.type.startsWith('image/') ? 'img' : 'video');
            mediaElement.src = e.target.result;
            mediaElement.controls = true;
            mediaElement.width = 300;

            const postContainer = document.createElement(' div');
            postContainer.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
            postContainer.appendChild(mediaElement);
            postDisplay.appendChild(postContainer);
        };

        if (mediaFile) {
            reader.readAsDataURL(mediaFile);
        }

        // Clear the form fields
        uploadForm.reset();
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Here you would typically send the credentials to the server for validation
        alert(`Logged in as: ${username}`);
        
        // Clear the form fields
        loginForm.reset();
    });
});
