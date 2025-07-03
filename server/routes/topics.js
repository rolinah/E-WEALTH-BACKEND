const express = require('express');
const router = express.Router();
const { getAllTopics, getTopicDetail } = require('../controllers/topicController');

router.get('/', getAllTopics);
router.get('/:id', getTopicDetail);

module.exports = router;// Topics routes 