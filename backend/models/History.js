const mongoose = require('mongoose');


// Defines the schema for a Claim History entry

const historySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'    // Reference to User collection
  },
  points: Number,    // Points awarded
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('History', historySchema);
