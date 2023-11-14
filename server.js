const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (e.g., confirmation.html)
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submission
app.post('/submit', (req, res) => {
    const userData = req.body;

    // Here you can perform actions like storing data in a database
    // For simplicity, let's just log the data to the console
    console.log('User Data:', userData);

    // Redirect to the confirmation page
    res.redirect('/confirmation.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
