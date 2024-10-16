const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

// Allow cross-origin requests
app.use(cors());

// Route to fetch crime data
app.get('/api/crimes', async (req, res) => {
  const { lat, lng, date } = req.query;

  if (!lat || !lng || !date) {
    return res.status(400).json({ error: 'Latitude, longitude, and date are required' });
  }

  try {
    // Replace this URL with the UK Police API endpoint
    const response = await axios.get(
      `https://data.police.uk/api/crimes-street/all-crime?lat=${lat}&lng=${lng}&date=${date}`
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching crime data' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
