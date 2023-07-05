const express = require('express');
const router = express.Router();
const wellcome = require('./../middlewares/wellcome');

router.get('/wellcome', wellcome); 

module.exports = router;


