const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  try {
    // Read the vc.json file from the root directory
    const filePath = path.join(process.cwd(), 'vc.json');
    const rawData = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(rawData);

    // Set header and return JSON
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json(jsonData);
  } catch (err) {
    return res.status(500).json({ error: "Failed to load JSON data" });
  }
}
