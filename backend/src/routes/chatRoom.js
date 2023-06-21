const express = require('express');
const authMiddleware = require('../middleware/auth');
const ChatRoom = require('../models/ChatRoom');

const router = express.Router();

// Create chat room
router.post('/', authMiddleware, async (req, res) => {
  const { name } = req.body;
  try {
    const existingChatRoom = await ChatRoom.findOne({ name });
    if (existingChatRoom) {
      return res.status(400).json({ message: 'Chat room already exists' });
    }
    const chatRoom = new ChatRoom({ name });
    await chatRoom.save();
    res.json(chatRoom);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to create chat room' });
  }
});

// Read chat rooms
router.get('/', authMiddleware, async (req, res) => {
  try {
    const chatRooms = await ChatRoom.find();
    res.json(chatRooms);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to retrieve chat rooms' });
  }
});

// Update chat room
router.put('/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const chatRoom = await ChatRoom.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    if (!chatRoom) {
      return res.status(404).json({ message: 'Chat room not found' });
    }
    res.json(chatRoom);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to update chat room' });
  }
});

// Delete chat room
router.delete('/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const chatRoom = await ChatRoom.findByIdAndDelete(id);
    if (!chatRoom) {
      return res.status(404).json({ message: 'Chat room not found' });
    }
    res.json({ message: 'Chat room deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to delete chat room' });
  }
});

module.exports = router;
