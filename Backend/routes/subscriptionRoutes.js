const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

// Subscription route
router.post('/', subscriptionController.subscribe);

module.exports = router;
