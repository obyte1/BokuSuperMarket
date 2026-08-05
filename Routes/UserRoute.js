const express = require('express');
const router = express.Router(); //

const userController = require('../Controllers/UserController');

//define the routes
router.post('/createuser', userController.createUser);
router.post('/loginuser', userController.loginUser);

//export the router to be used in other files
module.exports = router;