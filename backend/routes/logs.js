const express = require('express');
const router = express.Router();
const { ingestLog, getLogs } = require('../controllers/logController');

router.post('/logs', ingestLog);
router.get('/logs', getLogs);

module.exports = router;
