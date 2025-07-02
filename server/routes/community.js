const express = require('express');
const router = express.Router();
const { getPostsByTopic, addPost } = require('../controllers/communityController');
const auth = require('../middleware/authMiddleware');

router.get('/:topicId', auth, getPostsByTopic);
router.post('/', auth, addPost);

module.exports = router;// Community routes 