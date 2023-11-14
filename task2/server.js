const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
    const userData = req.body;

    console.log('User Data:', userData);

    res.redirect('/confirmation.html');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
