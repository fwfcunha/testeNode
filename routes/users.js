const express = require('express');

//controller
const Users = require('../controller/Users');
const usersController = new Users();

//instacia do router
const router = express.Router();

router.get('/:id', usersController.get);

module.exports = router;