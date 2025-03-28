const express =  require('express');
const path = require('path');
const app = express();
const PORT = 3000;

let entries = [];

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/entries', (req, res) => {
    res.json(entries);
});
app.post('/add-entry' , (req, res) => {
    const { text } = req.body;

    if (!text || typeof text != 'string') {
        return res.status(400).json({message: 'Invalid entry idiot!!'});
    }

    const entry = {
        id: Date.now(),
        text,
        date: new Date().toISOString()
    };

    entries.unshift(entry);
    res.status(201).json({message: "you cool", entry});
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});