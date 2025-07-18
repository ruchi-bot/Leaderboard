const mongoose = require('mongoose');

// Defines the schema for a User

const userSchema = new mongoose.Schema({
  name: String,
  totalPoints: {
    type: Number,
    default: 0  // Start with 0 points
  }
});

module.exports = mongoose.model('User', userSchema);
