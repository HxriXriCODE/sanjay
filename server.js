const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from current directory
app.use(express.static('.'));

// Handle all routes by serving index.html (for SPA routing if needed)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});