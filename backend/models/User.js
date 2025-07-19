const mongoose = require('mongoose');

// database schema for users

const userSchema = new mongoose.Schema({
  name: String,          //name
  totalPoints: {
    type: Number,
    default: 0  // assign 0 point as default
  }
});

module.exports = mongoose.model('User', userSchema);
