const express = require("express");
const router = express.Router();
const handleSingUp = require('../controller/userController');

router.post('/singup', handleSingUp.singUpUser);

module.exports = router; // Export the router
