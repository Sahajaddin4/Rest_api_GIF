
const { createApiKey } = require('../controller/Api_Controller');
const Auth=require('../middlewares/Auth');

const router=require('express').Router();

//post request
router.post('/create-api-key',Auth,createApiKey);

module.exports=router;