const express = require("express");
const router = express.Router();
const userController = require('../Controllers/userController')

router.post('/register', userController.registerController)

router.get('/allUsers', userController.getUsers)

router.post('/updateUser', userController.updateUser)

router.post('/deleteUser', userController.deleteUser)



module.exports = router;
