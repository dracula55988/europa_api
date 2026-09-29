const express = require('express');
const app = express();
const fs = require('fs');

app.get('/launcher/servers/vc', (req, res) => {
  try {
    const rawData = fs.readFileSync('vc.json', 'utf8');
    const jsonData = JSON.parse(rawData);
    res.setHeader('Content-Type', 'application/json');
    res.json(jsonData);
  } catch (err) {
    res.status(500).json({ error: "Failed to load data" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
