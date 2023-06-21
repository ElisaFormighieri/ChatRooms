const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Authorization token not found' });
  }

  try {
    const decoded = jwt.verify(token, 'BUqtwYxqC69nXteM5FijEDcjjZvOxrrr');
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
