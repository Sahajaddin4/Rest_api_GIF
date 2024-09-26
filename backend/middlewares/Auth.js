const jwt=require('jsonwebtoken');
const ApiKey_model = require('../models/ApiKey_model');
require('dotenv').config();

const Auth=async(req,res,next)=>{

   try {
    const token=req.body.token || req.cookies.token 

    //validation
    if(!token){
        return res.status(401).json({
            success:false,
            message:'No token found Login first..'
        })
    }
    //decode token
    let decode=jwt.verify(token,process.env.JWT_SECRET);
    
    req.user=decode.id;

    next();
    
   } catch (error) {
    console.log(error);
    return res.status(500).json({
        message:'Internal server error at Auth middlewares 😔',
        success:false,
        error:error
    });
   }
}

module.exports=Auth;