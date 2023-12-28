const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.post('/', messageController.createMessage);
router.post('/delete', messageController.deleteMessage);
router.patch('/pinMessage', conversationController.pinMessage)

module.exports = router;