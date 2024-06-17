const express = require('express');
const app = express();
const PORT = 3000;

// Mock data for inventory summary
const inventorySummary = {
  totalItems: 100,
  totalQuantity: 500
};

// Endpoint to get inventory summary
app.get('/api/inventory/summary', (req, res) => {
  res.json(inventorySummary);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
