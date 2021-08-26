const mongoose = require('mongoose');

// DB Connect
const connectDB = connection_url =>
  mongoose.connect(
    connection_url,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log('database connected');
    }
  );

module.exports = connectDB;
