const { Signup, Login, checkAuth, logOut } = require('../controller/User_Controller');

const router=require('express').Router();

//post request
router.post('/signup',Signup);
router.post('/login',Login);
router.get('/check-auth',checkAuth);
router.delete('/logout',logOut);
module.exports=router;