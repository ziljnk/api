const express = require('express');
const router = express.Router();
const conversationController = require('../controllers/conversationController');

router.post('/', conversationController.createConversationRoom)
router.get('/:userId', conversationController.getAllConversations)
router.post('/group', conversationController.createGroupChatRoom)

module.exports = router;