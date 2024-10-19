const express = require('express');
const ChatGPTController = require('../controllers/chagpt.controller');

const router = express.Router();

router.post('/question', ChatGPTController.getAnswer);

module.exports = router;
