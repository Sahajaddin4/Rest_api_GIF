const GetGif = require('../controller/GetGif_Controller');
const Auth=require('../middlewares/Auth');

const router=require('express').Router();

//post request
router.get('/get-gif',Auth,GetGif);

module.exports=router;