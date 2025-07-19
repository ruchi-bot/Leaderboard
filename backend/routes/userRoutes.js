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

// get all user list
router.get('/users', getUsers);

// add new user
router.post('/users', addUser);

// point claim
router.post('/claim', claimPoints);

// leaderboard dashboard
router.get('/leaderboard', getLeaderboard);

// claim history dashboard
router.get('/history', getHistory);

module.exports = router;
