const User = require('../models/User');
const History = require('../models/History');

// GET /api/users
// Fetch all users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// POST /api/users
// Add a new user
exports.addUser = async (req, res) => {
  const { name } = req.body;
  const newUser = new User({ name });
  await newUser.save();
  res.status(201).json(newUser);
};

// POST /api/claim
// Randomly award 1-10 points to a user and store history
exports.claimPoints = async (req, res) => {
  const { userId } = req.body;

  // Generate random points between 1 and 10
  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  // Update user's total points
  user.totalPoints += points;
  await user.save();

  // Save to history collection
  const history = new History({ userId, points });
  await history.save();

  res.json({ user, points });
};

// GET /api/leaderboard
// Fetch users sorted by points in descending order
exports.getLeaderboard = async (req, res) => {
  const leaderboard = await User.find().sort({ totalPoints: -1 });
  res.json(leaderboard);
};

// GET /api/history
// Fetch claim history (with user names)
exports.getHistory = async (req, res) => {
  const history = await History.find()
    .populate('userId', 'name') // Populate user name
    .sort({ timestamp: -1 });   // Most recent first
  res.json(history);
};
