const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const postRoutes = require('./routes/posts');
const bodyParser = require('body-parser');
require('dotenv/config');
const cors = require('cors');
// Middleware
app.use(bodyParser.json());
app.use(cors());
// Connections
const port = process.env.PORT || 5500;
const connection_url = process.env.DB_CONNECTION;

// Import routes
app.use('/posts', postRoutes);
app.get('/', (req, res) => {
  res.send('We are on Home');
});

const start = async () => {
  try {
    await connectDB(connection_url);
    app.listen(port, () => {
      console.log(`Server started at ${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
