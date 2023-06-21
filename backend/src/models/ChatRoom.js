const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatRoomSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('ChatRoom', ChatRoomSchema);
