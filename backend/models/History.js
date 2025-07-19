const mongoose = require('mongoose');


// calin history dashboard schema

const historySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'    // Reference to User schema
  },
  points: Number,    // Points
  timestamp: {
    type: Date,       //now date
    default: Date.now
  }
});

module.exports = mongoose.model('History', historySchema);
