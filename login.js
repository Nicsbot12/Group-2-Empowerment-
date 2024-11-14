document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded credentials (for demonstration purposes)
    const validUsername = 'admin';
    const validPassword = 'admin123';

    // Check if the entered credentials match the hardcoded ones
    if (username === validUsername && password === validPassword) {
        // Redirect to the admin panel
        window.location.href = 'admin.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
