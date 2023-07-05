const express = require('express');
const { addSymbolValidator } = require('../controllers/usersValidation');
const joiValidation = require('../middlewares/joiValidation');
const router = express.Router();

const dashboard = require('./../middlewares/dashboard');
const logout = require('./../middlewares/logout');
const symbol = require('./../middlewares/symbol');
const {addSymbol} = require('./../controllers/usersController');

router.get('/dashboard', dashboard); 
router.get('/logout', logout);
router.post('/symbol', joiValidation(addSymbolValidator) ,addSymbol);

module.exports = router;


