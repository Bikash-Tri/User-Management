const express = require('express');
const router = express.Router();
const userController = require('../contrroller/userController');

router.post('/createuser', userController.createUser);
router.get('/', userController.listUsers);
router.get('/getuser/:id', userController.readUser);
router.put('/updateuser/:id', userController.updateUser);
router.delete('/deleteuser/:id', userController.deleteUser);

module.exports = router;