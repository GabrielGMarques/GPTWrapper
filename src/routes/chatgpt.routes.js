const express = require('express');
const ChatGPTController = require('../controllers/chagpt.controller');
const multer = require('multer');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/question',  upload.single('image'), ChatGPTController.getAnswer);

module.exports = router;
