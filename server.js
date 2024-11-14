const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let posts = []; // Array to hold blog posts

app.post('/api/posts', (req, res) => {
    const { title, content } = req.body;
    posts.push({ title, content });
    res.json({ status: 'success', message: 'Post published!' });
});

app.get('/api/posts', (req, res) => {
    res.json(posts);
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Contact Form Submission: ${name}, ${email}, ${message}`);
    res.json({ status: 'success', message: 'Message received!' });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
