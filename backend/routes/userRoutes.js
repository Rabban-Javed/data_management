// userRoutes.js
const express = require('express');
const { loginUser } = require('../controllers/userController');
const router = express.Router();

// Login route
router.post('/login', loginUser);

module.exports = router;
