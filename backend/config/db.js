// Connects to cloud MongoDB using Mongoose
const mongoose = require('mongoose');

const connectDB = async () => {
    console.log('MONGO_URI =', process.env.MONGO_URI);       //fetching mongodb uri from enviroment file
  try {
    await mongoose.connect(process.env.MONGO_URI, {           //connecting mongodb
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
