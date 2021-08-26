const express = require('express');
const app = express();
const connectDB = require('../db/connect');

const start = async (connection_url, port) => {
  try {
    await connectDB(connection_url);
    app.listen(port, () => {
      console.log(`Server started at ${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = start;
