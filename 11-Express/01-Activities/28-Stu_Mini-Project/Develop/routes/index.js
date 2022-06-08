const express = require('express');

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');
// TODO: import your diagnostics route
const diagnosticsRouter = require('./diagnostics');

const router = express();

router.use('/tips', tipsRouter);
router.use('/feedback', feedbackRouter);
// TODO: Initialize diagnostics route
router.use('/diagnostics', diagnosticsRouter);

module.exports = router;
