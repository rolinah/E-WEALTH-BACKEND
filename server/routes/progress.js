const express = require('express');
const router = express.Router();
const { updateProgress } = require('../controllers/progressController');
const auth = require('../middleware/authMiddleware');

router.post('/update', auth, updateProgress);

module.exports = router;// Progress routes 