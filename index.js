'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
  const radius = parseFloat(req.params.r);
  const area = Math.PI * radius * radius;
  const circumference = 2 * Math.PI * radius;
  const result = { area: area.toFixed(2), circumference: circumference.toFixed(2) };
  res.json(result);
});

// define endpoint for exercise 2 here


// define endpoint for exercise 3 here


// define endpoint for exercise 4 here


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});