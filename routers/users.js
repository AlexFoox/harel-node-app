const express = require('express');
const { addSymbolValidator } = require('../controllers/usersValidation');
const joiValidation = require('../middlewares/joiValidation');
const router = express.Router();

const dashboard = require('./../middlewares/dashboard');
const logout = require('./../middlewares/logout');
const {addSymbol} = require('./../controllers/usersController');

//router.use(bodyParser.urlencoded({ extended: true }));
//router.use(bodyParser.json());


router.get('/dashboard', dashboard); 
router.get('/logout', logout);
router.post('/symbol', joiValidation(addSymbolValidator) ,addSymbol);

//router.post('/symbol',bodyParser.urlencoded({ extended: true }), joiValidation(addSymbolValidator) ,addSymbol);

module.exports = router;


