const express = require('express');

const app = express();

// Routes

app.get('/', (req, res) => {
  res.send('We are on Home');
});

app.listen(5500, () => {
  console.log('Server started at 5500...');
});
