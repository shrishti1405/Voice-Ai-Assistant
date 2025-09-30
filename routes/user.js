const express = require('express');
const router = express.Router();

// Example GET endpoint
router.get('/', (req, res) => {
  res.json({ message: 'User route is working!' });
});

module.exports = router;
