const express = require('express');
const router = express.Router();

const testRoutes = require('./routes/testRoutes');

router.use('/api/test', testRoutes);

module.exports = router;
