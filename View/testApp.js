const express = require('express');
const router = express.Router();

const test = require('../Controllers/testFile');

router.get('/testApp', test.testApp);

module.exports = router;