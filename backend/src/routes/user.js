const express = require('express');
const authMiddleware = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to get users' });
  }
});

router.put('/profile', authMiddleware, async (req, res) => {
  const { username, newPassword } = req.body;
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.username = username || user.username;
    if (newPassword) {
      user.password = await bcrypt.hash(newPassword, 10);
    }
    await user.save();
    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Profile update failed' });
  }
});

module.exports = router;
