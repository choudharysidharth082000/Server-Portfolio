const express = require('express');
const formFile = require('../Controllers/FormSection');
const router = express.Router();

router.post('/postMessage',formFile.getFormData);


module.exports = router;