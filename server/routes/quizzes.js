const express = require('express');
const router = express.Router();
const { getQuizByTopic } = require('../controllers/quizController');

router.get('/:topicId', getQuizByTopic);

module.exports = router;// Quizzes routes 