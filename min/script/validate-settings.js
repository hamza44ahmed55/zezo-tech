const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const db = new sqlite3.Database('../DB/database.sql');

app.use(bodyParser.json());

app.post('/validate-settings', (req, res) => {
    const { title, description } = req.body;

    db.get('SELECT * FROM site_settings WHERE title = ? AND description = ?', [title, description], (err, row) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
        } else if (row) {
            res.json({ valid: true });
        } else {
            res.json({ valid: false });
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});