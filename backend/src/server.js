const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const app = express();
const userRoutes = require('./routes/user');
const chatRoomRoutes = require('./routes/chatRoom');
const cors = require('cors');

app.use(bodyParser.json());

app.use(cors());

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

const MONGODB_URI = `mongodb+srv://elisas:GVBQe1w4MyFRHPqv@cluster0.7ykd5at.mongodb.net`;

mongoose
  .connect(MONGODB_URI, {})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.use('/api/chatRooms', chatRoomRoutes);
