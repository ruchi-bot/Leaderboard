const express = require('express');
const router = express.Router();

// Import controller methods
const {
  getUsers,
  addUser,
  claimPoints,
  getLeaderboard,
  getHistory,
} = require('../controllers/userController');

// Route: GET all users
router.get('/users', getUsers);

// Route: POST new user
router.post('/users', addUser);

// Route: POST claim points
router.post('/claim', claimPoints);

// Route: GET leaderboard
router.get('/leaderboard', getLeaderboard);

// Route: GET claim history
router.get('/history', getHistory);

module.exports = router;
