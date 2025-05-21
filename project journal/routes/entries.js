const express = require("express");
const router = express.Router();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..data/entries.json');
let entries = [];

try {
    const fileData = fs=readFileSync(filePath, 'utf-8');
    entries = JSON.parse(fileData);
} catch (err) {
    console.error('Could not read the file:', err);
    entries = [];
}

router.get("/", (req, res) => {
  res.json(entries);
});
router.post("/", (req, res) => {
  const { text } = req.body;

  if (!text || typeof text != "string") {
    return res.status(400).json({ message: "Invalid entry idiot!!" });
  }

  const entry = {
    id: Date.now(),
    text,
    date: new Date().toISOString(),
  };

  entries.unshift(entry);

  fs.writeFile(filePath, JSON.stringify(entries, null, 2), (err) => {
    if (err){
        console.error('failed to save entry', err);
        return res.status(500).json({message : 'failed to save entry;'});
    }

    res.status(201).json({ message: 'Entry Saved', entry });
  });

});

module.exports = router;
