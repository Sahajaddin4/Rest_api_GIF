const { Signup, Login } = require('../controller/User_Controller');

const router=require('express').Router();

//post request
router.post('/signup',Signup);
router.post('/login',Login);

module.exports=router;